import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ChatAlt1 } from "../../icons/ChatAlt1";
import { Send2 } from "../../icons/Send2";
import { WS_URL } from "../../config";
import { fetchParticipantsByDeal } from "../../redux/app/participants/participantSlice";
import { useDispatch, useSelector } from "react-redux";

export const Chat = ({ messages: initialMessages, dealId }) => {
  const { t, i18n } = useTranslation();
  const messagesEndRef = useRef(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const ws = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [slideStartX, setSlideStartX] = useState(null);
  const [pressTimer, setPressTimer] = useState(null);
  const longPressThreshold = 500; // 500ms for long press
  const messagesContainerRef = useRef(null);
  const [slideOffset, setSlideOffset] = useState(0);
  const dispatch = useDispatch();
  const { participants, participantStatus } = useSelector(
    (state) => state.participants
  );
  const [showMentions, setShowMentions] = useState(false);
  const [mentionFilter, setMentionFilter] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const textareaRef = useRef(null);
  const [mentions, setMentions] = useState([]);

  useEffect(() => {
    let reconnectAttempt = 0;
    const maxReconnectAttempts = 5;
    const reconnectDelay = 3000;
    let reconnectTimeout = null;
    dispatch(fetchParticipantsByDeal(dealId));
    const connectWebSocket = () => {
      if (ws.current?.readyState === WebSocket.OPEN) {
        ws.current.close();
      }

      const wsUrl = `wss://${WS_URL}/api/ws/chat/${dealId}`;
      ws.current = new WebSocket(wsUrl);

      ws.current.onopen = () => {
        console.log("WebSocket connected");
        reconnectAttempt = 0;
      };

      ws.current.onmessage = (event) => {
        try {
          const newMessage = JSON.parse(event.data);
          console.log({ newMessage });
          setMessages((prevMessages) => {
            if (Array.isArray(newMessage)) {
              return [...newMessage].sort(
                (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
              );
            }
            return [...prevMessages, newMessage].sort(
              (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
            );
          });
        } catch (error) {
          console.error("Error parsing message:", error);
        }
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
        // Trigger reconnect on error
        if (reconnectAttempt < maxReconnectAttempts) {
          reconnectTimeout = setTimeout(() => {
            reconnectAttempt++;
            connectWebSocket();
          }, reconnectDelay);
        }
      };

      ws.current.onclose = (event) => {
        if (!event.wasClean && reconnectAttempt < maxReconnectAttempts) {
          console.log(
            `Attempting to reconnect... (${
              reconnectAttempt + 1
            }/${maxReconnectAttempts})`
          );
          reconnectTimeout = setTimeout(() => {
            reconnectAttempt++;
            connectWebSocket();
          }, reconnectDelay);
        }
      };
    };

    connectWebSocket();

    return () => {
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [dealId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return t("chat.today");
    } else if (date.toDateString() === yesterday.toDateString()) {
      return t("chat.yesterday");
    }
    return date.toLocaleDateString(i18n.language === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const groupMessagesByDate = (messages) => {
    const groups = {};
    messages.forEach((message) => {
      const date = new Date(message.timestamp).toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    return groups;
  };

  const handleReply = (message) => {
    setReplyTo(message);
    // Focus the textarea
    document.querySelector("textarea").focus();
  };

  const handleSendMessage = useCallback(
    (e) => {
      e.preventDefault();
      if (
        !newMessage.trim() ||
        !ws.current ||
        ws.current.readyState !== WebSocket.OPEN
      ) {
        return;
      }
      const tag_participants = [...new Set(mentions)];

      try {
        const messageData = {
          message: newMessage.trim(),
          tag_message: replyTo?.id || null,
          tag_participant: tag_participants.map(
            (participant) => participant.participant_id
          ),
        };

        console.log({ messageData });
        ws.current.send(JSON.stringify(messageData));
        setNewMessage("");
        setReplyTo(null);
        setMentions([]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    [newMessage, replyTo, mentions]
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleTouchStart = useCallback((e, message) => {
    if (e.touches.length !== 1) return; // Handle single touch only

    const touch = e.touches[0];
    setSlideStartX(touch.clientX);

    const timer = setTimeout(() => {
      // Pass the full message object for long press
      handleReply(message);
    }, longPressThreshold);

    setPressTimer(timer);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!slideStartX || e.touches.length !== 1) return;

      const touch = e.touches[0];
      const diff = slideStartX - touch.clientX;

      if (pressTimer) {
        clearTimeout(pressTimer);
        setPressTimer(null);
      }

      // Update slide offset for animation
      setSlideOffset(Math.min(Math.max(-diff, 0), 50));

      if (Math.abs(diff) > 50) {
        const messageData = e.currentTarget.dataset.message;
        if (messageData) {
          try {
            const parsedMessage = JSON.parse(messageData);
            handleReply(parsedMessage);
          } catch (error) {
            console.error("Error parsing message data:", error);
          }
          setSlideStartX(null);
          setSlideOffset(0); // Reset offset after reply
        }
      }
    },
    [slideStartX, pressTimer]
  );

  const handleTouchEnd = useCallback(() => {
    setSlideStartX(null);
    setSlideOffset(0); // Reset offset
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  }, [pressTimer]);

  const scrollToMessage = useCallback((messageId) => {
    if (!messageId) return;

    const messageElement = document.querySelector(
      `[data-message-id="${messageId}"]`
    );
    if (messageElement && messagesContainerRef.current) {
      messageElement.classList.add("highlight-message");
      messageElement.scrollIntoView({ behavior: "smooth", block: "center" });

      // Remove highlight after animation
      setTimeout(() => {
        messageElement.classList.remove("highlight-message");
      }, 2000);
    }
  }, []);

  const MessageContent = useCallback(
    ({ message, index }) => {
      const parseMessage = useCallback((msg) => {
        if (!msg) return null;
        try {
          return JSON.parse(msg);
        } catch {
          return null;
        }
      }, []);

      const findTaggedMessage = useCallback(
        (taggedMessageId) => {
          return messages.find((msg) => msg.id === taggedMessageId);
        },
        [messages]
      );

      const actualMessage = message.message;
      const messageJSON = parseMessage(actualMessage);
      const taggedMessage = message.taged_message
        ? findTaggedMessage(message.taged_message)
        : null;

      const handleTaggedMessageClick = useCallback(() => {
        if (taggedMessage) {
          scrollToMessage(message.taged_message);
        }
      }, [taggedMessage, message.taged_message]);

      return (
        <div
          className={`message-container relative max-w-[70%] px-4 py-3 ${
            message?.sender?.role === "You"
              ? "bg-[#1B4F4A] text-white rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]"
              : "bg-primary-background text-[#212B36] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]"
          } ${slideOffset > 0 ? "sliding" : ""}`}
          onTouchStart={(e) => handleTouchStart(e, message)}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          data-message={JSON.stringify(message)}
          data-message-id={message.id}
          style={{
            transform: `translateX(${slideOffset}px)`,
          }}
        >
          {/* Add slide indicator */}
          <div className="slide-indicator">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M10 9l-6 6 6 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 15h11a4 4 0 004-4v0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div
            className={`text-sm font-medium mb-1 ${
              message?.sender?.role === "You" ? "text-white" : "text-[#1B4F4A]"
            }`}
          >
            {message?.sender?.role !== "You" && message?.sender?.name && (
              <>
                {message?.sender?.name}
                {message?.sender?.role !== "You"
                  ? ` • ${message?.sender?.role}`
                  : ""}
              </>
            )}
          </div>

          {taggedMessage && (
            <div
              className={`relative mb-2 pl-2 ${
                message?.sender?.role === "You"
                  ? "border-l-2 border-white/40"
                  : "border-l-2 border-[#1B4F4A]"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleTaggedMessageClick();
              }}
            >
              <div
                className={`text-sm rounded-sm p-2 cursor-pointer hover:opacity-90 transition-opacity ${
                  message?.sender?.role === "You"
                    ? "bg-[#E7E7E7] text-[#1B4F4A]"
                    : "bg-[#163f3a] text-[#E7E7E7]"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-[13px] flex items-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className={
                        message?.sender?.role === "You"
                          ? "text-white/70"
                          : "text-[#637381]"
                      }
                    >
                      <path
                        d="M9 14l-4-4 4-4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 10h11a4 4 0 014 4v0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {taggedMessage.sender.name}
                  </div>
                  <div
                    className={`text-[13px] truncate whitespace-pre-line ${
                      message?.sender?.role === "You"
                        ? "text-white/70"
                        : "text-[#E7E7E7]"
                    }`}
                  >
                    {taggedMessage.message}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-[15px] break-words leading-[22px]  truncate whitespace-pre-line ">
            {messageJSON ? messageJSON.message : message.message}
          </div>

          <div className="text-[13px] mt-1">
            <span
              className={
                message?.sender?.role === "You"
                  ? "text-white/70"
                  : "text-[#637381]"
              }
            >
              {formatTime(message.timestamp)}
            </span>
          </div>
        </div>
      );
    },
    [
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      messages,
      scrollToMessage,
    ]
  );

  const handleInput = (e) => {
    const textarea = e.target;
    const text = textarea.value;
    const position = textarea.selectionStart;
    setCursorPosition(position);

    // Auto-resize textarea (existing functionality)
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";

    // Check if we should show mentions
    const lastAtSymbol = text.lastIndexOf("@", position);
    if (lastAtSymbol !== -1) {
      const nextSpace = text.indexOf(" ", lastAtSymbol);
      const isCurrentlyTypingMention =
        nextSpace === -1 || position <= nextSpace;

      if (isCurrentlyTypingMention) {
        const filterText = text.slice(lastAtSymbol + 1, position);
        setMentionFilter(filterText);
        setShowMentions(true);
        return;
      }
    }

    setShowMentions(false);
  };

  const handleMentionClick = (participant) => {
    const textarea = textareaRef.current;
    const text = textarea.value;
    const lastAtSymbol = text.lastIndexOf("@", cursorPosition);

    const beforeMention = text.slice(0, lastAtSymbol);
    const afterMention = text.slice(cursorPosition);
    const newText = `${beforeMention}@${participant.participant_name} ${afterMention}`;

    setMentions([...mentions, participant]);

    setNewMessage(newText);
    setShowMentions(false);
    textarea.focus();
  };

  // Filter participants based on mention input
  const filteredParticipants = participants.filter((participant) =>
    participant?.participant_name
      ?.toLowerCase()
      .includes(mentionFilter.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-sm">
      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #e7e7e7 transparent;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #e7e7e7;
          border-radius: 20px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #d1d1d1;
        }

        @keyframes highlight {
          0% {
            background-color: rgba(27, 79, 74, 0.2);
          }
          100% {
            background-color: #163f3a;
          }
        }

        .highlight-message {
          animation: highlight 2s ease-out;
        }

        .message-container {
          position: relative;
          transition: transform 0.2s ease-out;
        }

        .slide-indicator {
          position: absolute;
          left: -40px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.2s ease-out;
          color: #1b4f4a;
        }

        .sliding .slide-indicator {
          opacity: 1;
        }
      `}</style>

      {/* Make entire header clickable */}
      <div
        className="flex justify-between items-center px-4 py-3 border-b border-[#E7E7E7] cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2 className="text-[20px] font-semibold text-[#1B4F4A]">
          {t("chat.deal_discussion")}
        </h2>
        <div className="p-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={`text-[#1B4F4A] transform transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          >
            <path
              d="M7 14l5-5 5 5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Main container with animated collapse */}
      <div
        className={`flex flex-col transition-all duration-300 ease-in-out origin-top ${
          isCollapsed
            ? "max-h-0 opacity-0 scale-y-0"
            : "max-h-[800px] opacity-100 scale-y-100"
        }`}
      >
        {/* Messages Container - will scroll */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 min-h-[300px] max-h-[400px] scrollbar-thin"
        >
          {messages.length > 0 ? (
            Object.entries(groupMessagesByDate(messages)).map(
              ([date, dateMessages]) => (
                <div key={date}>
                  <div className="flex justify-center my-4">
                    <div className="bg-[#F4F6F8] px-3 py-1 rounded-full text-sm text-[#637381]">
                      {formatDate(dateMessages[0].timestamp)}
                    </div>
                  </div>
                  {dateMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-2 mb-4 ${
                        message?.sender?.role === "You"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      {/* Profile Picture */}
                      <div className="w-8 h-8 rounded-full bg-primary-background flex-shrink-0 overflow-hidden">
                        {message?.sender?.profile_image ? (
                          <img
                            src={message?.sender?.profile_image}
                            alt={message?.sender?.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#E7E7E7] text-[#637381] text-sm font-medium">
                            {message?.sender?.name?.charAt(0)}
                          </div>
                        )}
                      </div>

                      {/* Message Content */}
                      <MessageContent message={message} index={index} />
                    </div>
                  ))}
                </div>
              )
            )
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ChatAlt1 className="w-12 h-12 mb-4" color="#637381" />
              <p className="text-center">{t("chat.no_messages")}</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Container - fixed at bottom */}
        <div className="p-4 border-t border-[#E7E7E7] bg-white">
          {replyTo && (
            <div className="flex items-center justify-between mb-2 p-2 bg-[#F4F6F8] rounded-[10px]">
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1B4F4A]">
                  {replyTo.sender.name}
                </div>
                <div className="text-sm text-[#637381] truncate">
                  {replyTo.message}
                </div>
              </div>
              <button
                onClick={() => setReplyTo(null)}
                className="ml-2 text-[#637381] hover:text-[#1B4F4A]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-[#F4F6F8] rounded-[10px] relative">
              <textarea
                ref={textareaRef}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                onInput={handleInput}
                placeholder="Message ..."
                rows="1"
                style={{ resize: "none" }}
                className="w-full px-4 py-3 text-[15px] outline-none placeholder-[#637381] bg-[#F4F6F8] rounded-[10px] min-h-[46px] max-h-[120px] overflow-y-auto scrollbar-thin"
              />

              {/* Mentions dropdown */}
              {showMentions && filteredParticipants.length > 0 && (
                <div className="absolute bottom-full left-0 w-full mb-2 bg-white rounded-lg shadow-lg border border-[#E7E7E7] max-h-[200px] overflow-y-auto">
                  {filteredParticipants.map((participant) => (
                    <div
                      key={participant.id}
                      onClick={() => handleMentionClick(participant)}
                      className="px-4 py-2 hover:bg-[#F4F6F8] cursor-pointer flex items-center gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#E7E7E7] flex items-center justify-center text-sm">
                        {participant?.participant_name?.charAt(0)}
                      </div>
                      <span className="text-[#212B36]">
                        {participant?.participant_name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`min-w-[40px] h-[40px] flex items-center justify-center rounded-full transition-colors bg-[#1B4F4A] hover:bg-[#163f3a]`}
            >
              <Send2 className="!w-5 !h-5" color="#FFFFFF" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
