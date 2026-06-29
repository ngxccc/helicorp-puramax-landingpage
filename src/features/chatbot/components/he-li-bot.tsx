"use client";

import React, { useState, useEffect, useRef } from "react";
import { useChat } from "@/components/chat-context";

interface Message {
  sender: "bot" | "user";
  text: string;
}

export function HeLiBot() {
  const { chatOpen, setChatOpen } = useChat();


  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Xin chào! Tôi là HeLiBot. Tôi có thể giúp gì cho bạn về PETKIT Pura Max?",
    },
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setChatInput("");

    setTimeout(() => {
      let botReply =
        "Cảm ơn bạn đã quan tâm! Bạn có thể để lại thông tin ở phần Đăng ký dùng thử để nhận tư vấn trực tiếp từ HeLiCorp nhé.";
      const query = userText.toLowerCase();

      if (query.includes("giá") || query.includes("bao nhiêu")) {
        botReply =
          "PETKIT Pura Max chính hãng đang có giá ưu đãi đặc biệt tại HeLiCorp. Nhập thông tin đăng ký bên dưới để nhận ngay báo giá kèm ưu đãi phụ kiện 500k!";
      } else if (
        query.includes("mèo") ||
        query.includes("cân nặng") ||
        query.includes("kg")
      ) {
        botReply =
          "Pura Max thích hợp cho mèo từ 1.5kg đến 10kg với khoang chứa rộng 76L thoải mái xoay đầu và hệ cảm biến đo trọng lượng chính xác.";
      } else if (query.includes("cát") || query.includes("loại cát")) {
        botReply =
          "Máy tương thích hoàn hảo với hầu hết các loại cát vón trên thị trường: cát đất sét (khoáng), cát đậu phụ dạng hạt mịn, và cát hỗn hợp.";
      } else if (query.includes("khử mùi") || query.includes("hôi")) {
        botReply =
          "Pura Max tích hợp bộ xịt khử mùi Smart Spray tự động phun tinh dầu hương tự nhiên sau mỗi chu kỳ đi vệ sinh của mèo, loại bỏ mùi hôi tức thì.";
      } else if (query.includes("bảo hành") || query.includes("chính hãng")) {
        botReply =
          "Sản phẩm phân phối chính hãng bởi HeLiCorp được bảo hành 12 tháng tại nhà, cam kết 1 đổi 1 trong 30 ngày đầu tiên nếu có lỗi kỹ thuật.";
      } else if (
        query.includes("ship") ||
        query.includes("giao hàng") ||
        query.includes("lắp đặt")
      ) {
        botReply =
          "HeLiCorp giao hàng nhanh toàn quốc. Khách hàng tại Hà Nội và TP.HCM sẽ được hỗ trợ giao và lắp đặt miễn phí tại nhà trong vòng 2 giờ.";
      }

      setChatMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3">
      {/* Chat window panel */}
      {chatOpen && (
        <div
          className="animate-slide-up flex h-112.5 w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-[#0E1322] dark:text-white shadow-2xl transition-all duration-300 sm:w-96"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-lime-400 px-4 py-3 font-bold text-black">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-black text-xs font-extrabold text-lime-400">
                🤖
              </div>
              <div className="text-left">
                <div className="leading-tight">HeLiBot AI</div>
                <div className="text-[10px] font-semibold opacity-75">
                  Trực tuyến 24/7
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="cursor-pointer px-2 text-base font-bold text-black hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Messages box */}
          <div
            className="flex flex-1 flex-col gap-3 overflow-y-auto p-4 text-xs leading-normal bg-slate-50 dark:bg-[#0A0D14]"
          >
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-3 text-left shadow-sm ${
                    msg.sender === "user"
                      ? "rounded-br-none bg-lime-400 font-semibold text-black"
                      : "rounded-bl-none border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-[#131B2E] dark:text-zinc-300"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick replies suggestion chips */}
          <div className="flex scrollbar-none gap-1.5 overflow-x-auto border-t border-slate-800/40 bg-slate-900/35 p-2 text-[10px] whitespace-nowrap">
            {[
              "Máy cho mèo mấy kg?",
              "Dùng cát gì?",
              "Giá bao nhiêu?",
              "Có bảo hành không?",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setChatInput(suggestion);
                }}
                className="cursor-pointer rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-black dark:border-slate-800 dark:bg-slate-950/40 dark:text-zinc-400 dark:hover:text-white px-2.5 py-1 text-[10px] font-semibold transition-all"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSendMessage}
            className="flex gap-2 border-t border-slate-200 bg-white dark:border-slate-800/80 dark:bg-[#0E1322] p-3"
          >
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:border-lime-500 dark:border-slate-800 dark:bg-[#0A0D14] dark:text-white dark:focus:border-lime-400 px-3 py-2 text-xs transition-all outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-lime-400 px-4 py-2 text-xs font-bold text-black shadow-sm transition-all hover:bg-lime-500"
            >
              Gửi
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="group flex cursor-pointer items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black shadow-[0_4px_25px_rgba(163,230,53,0.35)] transition-all hover:scale-105 active:scale-95"
      >
        {/* Bot Indicator Pulse */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-slate-950"></span>
        </span>
        <span className="font-extrabold tracking-wider uppercase">HeLiBot</span>
      </button>
    </div>
  );
}
