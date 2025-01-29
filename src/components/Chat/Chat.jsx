import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChatAlt1 } from "../../icons/ChatAlt1";
import { Send2 } from "../../icons/Send2";

export const Chat = ({ messages: initialMessages, dealId }) => {
  const { t } = useTranslation();
  const messagesEndRef = useRef(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const ws = useRef(null);

  useEffect(() => {
    let reconnectAttempt = 0;
    const maxReconnectAttempts = 5;
    const reconnectDelay = 3000; // 3 seconds

    const connectWebSocket = () => {
      const wsUrl = `wss://gooddealstest.ddns.net/api/ws/chat/${dealId}`;
      ws.current = new WebSocket(wsUrl);

      ws.current.onopen = () => {
        reconnectAttempt = 0; // Reset reconnect attempts on successful connection
      };

      ws.current.onmessage = (event) => {
        try {
          const newMessage = JSON.parse(event.data);

          setMessages((prevMessages) => {
            // If we receive an array of messages
            if (Array.isArray(newMessage)) {
              return newMessage;
            }
            // If we receive a single message
            return [...prevMessages, newMessage];
          });
        } catch (error) {
          console.error("Error parsing message:", error);
        }
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.current.onclose = (event) => {
        // Attempt to reconnect if the connection was closed unexpectedly
        if (!event.wasClean && reconnectAttempt < maxReconnectAttempts) {
          console.log(
            `Attempting to reconnect... (${
              reconnectAttempt + 1
            }/${maxReconnectAttempts})`
          );
          setTimeout(() => {
            reconnectAttempt++;
            connectWebSocket();
          }, reconnectDelay);
        }
      };
    };

    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (
      newMessage.trim() &&
      ws.current &&
      ws.current.readyState === WebSocket.OPEN
    ) {
      try {
        const messageData = newMessage.trim();

        // Just send the message and wait for the server's response via WebSocket
        ws.current.send(messageData);
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-[#E7E7E7]">
        <h2 className="text-[20px] font-medium text-[#1B4F4A]">
          Deal discussion
        </h2>
        <button className="p-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-[#1B4F4A]"
          >
            <path
              d="M7 14l5-5 5 5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Main container with flex layout */}
      <div className="flex flex-col h-full">
        {/* Messages Container - will scroll */}
        <div className="flex-1 overflow-y-auto p-4 min-h-[300px] max-h-[400px] scrollbar-thin">
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
          `}</style>

          {messages.length > 0 ? (
            messages.map((message, index) => (
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
                <div
                  className={`relative max-w-[70%] px-4 py-3 ${
                    message?.sender?.role === "You"
                      ? "bg-[#1B4F4A] text-white rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]"
                      : "bg-primary-background text-[#212B36] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]"
                  }`}
                >
                  <div
                    className={`text-sm font-medium mb-1 ${
                      message?.sender?.role === "You"
                        ? "text-white"
                        : "text-[#1B4F4A]"
                    }`}
                  >
                    {message?.sender?.role !== "You" &&
                      message?.sender?.name && (
                        <>
                          {message?.sender?.name}
                          {message?.sender?.role !== "You"
                            ? `• ${message?.sender?.role}`
                            : ""}
                        </>
                      )}
                  </div>
                  <div className="text-[15px] break-words leading-[22px]">
                    {message.message}
                  </div>
                  <div
                    className={`text-[13px] mt-1 ${
                      message?.sender?.role === "You"
                        ? "text-white/70"
                        : "text-[#637381]"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))
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
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-[#F4F6F8] rounded-[10px]">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Message ..."
                rows="1"
                style={{ resize: "none" }}
                className="w-full px-4 py-3 text-[15px] outline-none placeholder-[#637381] bg-[#F4F6F8] rounded-[10px] min-h-[46px] max-h-[120px] overflow-y-auto scrollbar-thin"
                onInput={(e) => {
                  // Auto-resize textarea
                  e.target.style.height = "auto";
                  e.target.style.height =
                    Math.min(e.target.scrollHeight, 120) + "px";
                }}
              />
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
