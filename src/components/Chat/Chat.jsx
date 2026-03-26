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
  const longPressThreshold = 600;
  const messagesContainerRef = useRef(null);
  const pressTimerRef = useRef(null);
  const dispatch = useDispatch();
  const { participants, participantStatus } = useSelector(
    (state) => state.participants
  );
  const [showMentions, setShowMentions] = useState(false);
  const [mentionFilter, setMentionFilter] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const textareaRef = useRef(null);
  const [mentions, setMentions] = useState([]);
  const gestureRef = useRef(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const activeMessageRef = useRef(null);

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
          const incomingMessage = JSON.parse(event.data);
          console.log({ incomingMessage });
          setMessages((prevMessages) => {
            if (Array.isArray(incomingMessage)) {
              return [...incomingMessage].sort(
                (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
              );
            }
            if (prevMessages.some((msg) => msg.id === incomingMessage.id)) {
              return prevMessages;
            }
            return [...prevMessages, incomingMessage].sort(
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

  const handleReply = useCallback((message) => {
    setReplyTo((prevReply) => {
      // If the same message is selected again, toggle it off (cancel reply)
      if (prevReply && prevReply.id === message.id) {
        return null;
      }
      // Otherwise, replace with the newly selected message
      return message;
    });
    
    // Focus the textarea
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

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
    if (e.touches.length !== 1) return;
  
    const touch = e.touches[0];
  
    activeMessageRef.current = message; // ✅ track message globally
  
    startXRef.current = touch.clientX;
    startYRef.current = touch.clientY;
    gestureRef.current = null;
    
    // Immediately apply a subtle press effect class
    const messageNode = document.querySelector(`[data-message-id="${message.id}"]`);
    if (messageNode) {
      messageNode.classList.add("pressing");
    }
  
    const timer = setTimeout(() => {
      if (!gestureRef.current && activeMessageRef.current) {
        handleReply(activeMessageRef.current);
        // Remove pressing style and optionally trigger a quick flash
        if (messageNode) {
          messageNode.classList.remove("pressing");
          messageNode.classList.add("highlight-message");
          setTimeout(() => messageNode.classList.remove("highlight-message"), 500);
        }
      }
    }, longPressThreshold);
  
    pressTimerRef.current = timer;
  }, [handleReply]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length !== 1) return;
  
    const touch = e.touches[0];
  
    const diffY = touch.clientY - startYRef.current;
  
    // 🚨 CRITICAL FIX — cancel instantly on scroll
    if (Math.abs(diffY) > 2) {
      gestureRef.current = "scroll";
  
      if (pressTimerRef.current) {
        clearTimeout(pressTimerRef.current);
        pressTimerRef.current = null;
      }
  
      if (activeMessageRef.current) {
        const messageNode = document.querySelector(`[data-message-id="${activeMessageRef.current.id}"]`);
        if (messageNode) {
          messageNode.classList.remove("pressing");
        }
      }
      activeMessageRef.current = null; // ✅ prevent reply trigger
      return;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (activeMessageRef.current) {
      const messageNode = document.querySelector(`[data-message-id="${activeMessageRef.current.id}"]`);
      if (messageNode) {
        messageNode.classList.remove("pressing");
      }
    }
    activeMessageRef.current = null; // ✅ reset
    gestureRef.current = null;
  
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  }, []);

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

  const parseMessage = (msg) => {
    if (!msg) return null;
    try {
      return JSON.parse(msg);
    } catch {
      return null;
    }
  };

  const findTaggedMessage = (taggedMessageId) => {
    if (!taggedMessageId) return null;
    return messages.find((msg) => msg.id === taggedMessageId);
  };

  const formatMessageWithMentions = (text) => {
    if (!text) return "";
    const parts = text.split(/(@[\w]+)/g);
    return parts.map((part, index) => {
      if (part.startsWith("@")) {
        return (
          <strong key={index} className="text-[#ffb130]">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  const renderMessage = (message, index) => {
    const actualMessage = message.message;
    const messageJSON = parseMessage(actualMessage);
    const taggedMessage = message.tag_message
      ? findTaggedMessage(message.tag_message)
      : message.taged_message
      ? findTaggedMessage(message.taged_message)
      : null;
    
    // Safety check: sometimes the backend returns an object for the tagged message directly,
    // or sometimes we need to extract from messageJSON if the backend nested it.
    // If taggedMessage is null, but we have a tag_message ID, it might be in initial messages or not loaded yet.
    // Let's ensure we safely handle parsing.
    let taggedMessageContent = "";
    let taggedMessageSender = "";
    
    if (taggedMessage) {
       const taggedJSON = parseMessage(taggedMessage.message);
       taggedMessageContent = taggedJSON ? taggedJSON.message : taggedMessage.message;
       taggedMessageSender = taggedMessage?.sender?.name || "";
    } else if (messageJSON && (messageJSON.tag_message || messageJSON.taged_message)) {
       // Fallback if the tagged message is passed inside the JSON structure
       const nestedTagged = messageJSON.tag_message || messageJSON.taged_message;
       taggedMessageContent = nestedTagged.message || "";
       taggedMessageSender = nestedTagged?.sender?.name || "";
    }

    const handleTaggedMessageClick = () => {
      if (message.tag_message || message.taged_message) {
        scrollToMessage(message.tag_message || message.taged_message);
      }
    };

    return (
      <div
        key={message.id || index}
        className={`message-container relative max-w-[70%] px-4 py-3 ${
          message?.sender?.role === "You"
            ? "bg-[#1B4F4A] text-white rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]"
            : "bg-primary-background text-[#212B36] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]"
        }`}
        onTouchStart={(e) => handleTouchStart(e, message)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        data-message={JSON.stringify(message)}
        data-message-id={message.id}
      >
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

        {(message.tag_message || message.taged_message) && (taggedMessage || taggedMessageContent) && (
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
                  {taggedMessageSender || "Unknown"}
                </div>
                <div
                  className={`text-[13px] truncate whitespace-pre-line ${
                    message?.sender?.role === "You"
                      ? "text-white/70"
                      : "text-[#E7E7E7]"
                  }`}
                >
                  {formatMessageWithMentions(taggedMessageContent)}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-[15px] break-words leading-[22px]  truncate whitespace-pre-line ">
          {messageJSON
            ? formatMessageWithMentions(messageJSON.message)
            : formatMessageWithMentions(message.message)}
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
  };

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

    // Capitalize first letter of each word, then remove spaces
    const mentionName = participant.participant_name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("")
      .trim();

    const newText = `${beforeMention}@${mentionName} ${afterMention}`;

    setMentions([
      ...mentions,
      {
        ...participant,
        mention_name: mentionName,
      },
    ]);

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
            background-color: transparent;
          }
        }

        .highlight-message {
          animation: highlight 2s ease-out;
        }
        
        .message-container {
          position: relative;
          transition: transform 0.2s ease-out, filter 0.2s ease-out;
        }

        .message-container.pressing {
          filter: brightness(0.85);
          transform: scale(0.98);
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
                      {renderMessage(message, index)}
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
                <div className="text-sm text-[#637381] truncate text-wrap">
                  {parseMessage(replyTo.message)
                    ? formatMessageWithMentions(parseMessage(replyTo.message).message)
                    : formatMessageWithMentions(replyTo.message)}
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
                      className="px-4 py-2 hover:bg-[#F4F6F8] cursor-pointer flex items-start justify-between gap-2"
                    >
                      <div className="flex items-start gap-2 flex-1 min-w-0">
                        {participant?.profile_picture ? (
                          <div className="w-6 h-6 shrink-0 mt-[2px] rounded-full overflow-hidden bg-[#E7E7E7]">
                            <img
                              src={participant.profile_picture}
                              alt={participant?.participant_name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-[#E7E7E7] flex items-center justify-center text-sm shrink-0 mt-[2px]">
                            {participant?.participant_name?.charAt(0)}
                          </div>
                        )}
                        <span className="text-[#212B36] break-words">
                          {participant?.participant_name}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full shrink-0 min-w-[80px] text-center ${
                          participant?.role?.toLowerCase() === "organiser"
                            ? "bg-[#1B4F4A] text-white"
                            : "bg-[#fc661a] text-white"
                        }`}
                      >
                        {participant?.role}
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
