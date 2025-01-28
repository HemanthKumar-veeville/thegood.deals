import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChatAlt1 } from "../../icons/ChatAlt1";
import { Send2 } from "../../icons/Send2";

export const Chat = ({ messages: initialMessages, currentUserId, dealId }) => {
  const { t } = useTranslation();
  const messagesEndRef = useRef(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const ws = useRef(null);

  useEffect(() => {
    const wsUrl = `wss://gooddealstest.ddns.net/api/ws/chat/${dealId}`;

    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);

      setMessages((prevMessages) => [...prevMessages, ...newMessage]);
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
      console.log(error);
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && ws.current) {
      const messageData = newMessage.trim();

      ws.current.send(messageData);
      setNewMessage("");
    }
  };
  console.log({ messages });
  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-sm">
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

      {/* Messages Container */}
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
                  {message?.sender?.role !== "You" && message?.sender?.name && (
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
        {/* Message Input */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#F4F6F8] rounded-[10px]">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Message ..."
              className="w-full px-4 py-3 text-[15px] outline-none placeholder-[#637381] bg-[#F4F6F8] rounded-[10px]"
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
  );
};
