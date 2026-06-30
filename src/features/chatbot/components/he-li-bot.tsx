"use client";

import { useState, useRef } from "react";
import { useChat } from "@/components/chat-context";
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from "@/components/ui/message-scroller";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageContent } from "@/components/ui/message";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  // MessageScroller handles scroll behavior automatically
  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userText = text.trim();
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

      // Stream the response word by word
      const words = botReply.split(" ");
      let currentWordIndex = 0;

      // Add empty bot reply
      setChatMessages((prev) => [...prev, { sender: "bot", text: "" }]);

      const interval = setInterval(() => {
        if (currentWordIndex < words.length) {
          const nextText = words.slice(0, currentWordIndex + 1).join(" ");
          setChatMessages((prev) => {
            const updated = [...prev];
            if (updated.length > 0) {
              const lastMsg = updated[updated.length - 1];
              if (lastMsg) {
                updated[updated.length - 1] = {
                  sender: lastMsg.sender,
                  text: nextText,
                };
              }
            }
            return updated;
          });
          currentWordIndex++;
        } else {
          clearInterval(interval);
        }
      }, 60);
    }, 600);
  };

  const suggestionsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!suggestionsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - suggestionsRef.current.offsetLeft);
    setScrollLeft(suggestionsRef.current.scrollLeft);
    setDraggedDistance(0);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !suggestionsRef.current) return;
    e.preventDefault();
    const x = e.pageX - suggestionsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    suggestionsRef.current.scrollLeft = scrollLeft - walk;
    setDraggedDistance(Math.abs(x - startX));
  };

  const handleSendMessage = (e?: React.SubmitEvent) => {
    if (e) e.preventDefault();
    sendMessage(chatInput);
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3">
      <Popover open={chatOpen} onOpenChange={setChatOpen}>
        <PopoverTrigger asChild>
          {/* Floating Toggle Button */}
          <Button className="group/button inline-flex h-11 items-center justify-center gap-2 rounded-full bg-lime-400 px-5 text-sm font-bold text-black shadow-[0_4px_25px_rgba(163,230,53,0.35)] transition-all hover:bg-lime-500 hover:text-black active:scale-95">
            {/* Bot Indicator Pulse */}
            <span className="relative flex h-2.5 w-2.5 shrink-0 self-center">
              <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-slate-950"></span>
            </span>
            <span className="leading-none font-extrabold tracking-wider uppercase">
              HeLiBot
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={12}
          className="animate-slide-up dark:bg-background flex h-112.5 w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 text-slate-800 shadow-2xl sm:w-96 dark:border-slate-800 dark:text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-lime-400 px-4 py-3 font-bold text-black">
            <div className="flex items-center gap-2 text-sm">
              <div className="pl-1 text-left">
                <div className="leading-tight">HeLiBot AI</div>
                <div className="text-[10px] font-semibold opacity-75">
                  Trực tuyến 24/7
                </div>
              </div>
            </div>
            <Button
              onClick={() => setChatOpen(false)}
              variant="ghost"
              size="xs"
              className="h-7 w-7 cursor-pointer p-0 text-base font-bold text-black hover:bg-black/10 hover:text-black hover:opacity-80"
            >
              ✕
            </Button>
          </div>

          {/* Messages box */}
          <MessageScrollerProvider>
            <MessageScroller className="relative flex flex-1 flex-col overflow-hidden">
              <MessageScrollerViewport className="dark:bg-background flex-1 scrollbar-none overflow-y-auto bg-slate-50 p-4 text-xs leading-normal">
                <MessageScrollerContent className="flex flex-col gap-3">
                  {chatMessages.map((msg, i) => (
                    <MessageScrollerItem
                      key={i}
                      messageId={String(i)}
                      scrollAnchor={msg.sender === "user"}
                    >
                      <Message align={msg.sender === "user" ? "end" : "start"}>
                        <MessageContent>
                          <Bubble variant="custom">
                            <BubbleContent
                              className={
                                msg.sender === "user"
                                  ? "rounded-br-none bg-lime-400 font-semibold text-black shadow-sm"
                                  : "rounded-bl-none border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-800 dark:bg-[#131B2E] dark:text-zinc-300"
                              }
                            >
                              {msg.text}
                            </BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton
                variant="outline"
                className="absolute right-4 bottom-4 left-auto translate-x-0 border-lime-400 bg-lime-400 text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-lime-500 hover:bg-lime-500 active:scale-95"
              />
            </MessageScroller>
          </MessageScrollerProvider>

          {/* Quick replies suggestion chips */}
          <div
            ref={suggestionsRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className="dark:bg-background/30 flex cursor-grab scrollbar-none gap-2 overflow-x-auto bg-slate-50/30 px-3 py-2.5 text-[11px] whitespace-nowrap select-none active:cursor-grabbing"
          >
            {[
              "Máy cho mèo mấy kg?",
              "Dùng cát gì?",
              "Giá bao nhiêu?",
              "Có bảo hành không?",
            ].map((suggestion) => (
              <Button
                key={suggestion}
                onClick={() => {
                  if (draggedDistance < 5) {
                    sendMessage(suggestion);
                  }
                }}
                variant="outline"
                size="xs"
                className="h-8 cursor-pointer rounded-full border border-slate-200/60 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 transition-all duration-200 hover:border-lime-300 hover:bg-lime-50 hover:text-lime-600 active:scale-95 dark:border-slate-800 dark:bg-slate-900/30 dark:text-zinc-400 dark:hover:border-lime-900/40 dark:hover:bg-lime-950/15 dark:hover:text-lime-400"
              >
                {suggestion}
              </Button>
            ))}
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSendMessage}
            className="dark:bg-background flex gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-800/80"
          >
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="dark:bg-background flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 transition-all outline-none focus:border-lime-500 dark:border-slate-800 dark:text-white dark:focus:border-lime-400"
            />
            <Button
              type="submit"
              className="h-8 cursor-pointer rounded-lg bg-lime-400 px-4 py-2 text-xs font-bold text-black shadow-sm transition-all hover:bg-lime-500 hover:text-black"
            >
              Gửi
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
