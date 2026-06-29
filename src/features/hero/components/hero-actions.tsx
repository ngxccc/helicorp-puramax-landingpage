"use client";

import { useChat } from "@/components/chat-context";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";

export function HeroActions() {
  const { setChatOpen } = useChat();
  const { isDark } = useTheme();

  return (
    <div className="flex w-full flex-wrap gap-4 sm:w-auto">
      <button
        onClick={() => toast.success("Đã thêm Pura Max vào giỏ hàng!")}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.3)] transition-all hover:scale-[1.02] active:scale-95 sm:flex-initial"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        Thêm giỏ
      </button>

      <button
        onClick={() => setChatOpen(true)}
        className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold transition-all sm:flex-initial ${
          isDark
            ? "border-slate-800 bg-[#131B2E]/60 text-white hover:bg-[#1E293B]"
            : "border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50"
        }`}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Hỏi HeLiBot
      </button>

      <button
        onClick={() => toast.info("Đã lưu vào danh sách yêu thích!")}
        className={`flex cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3.5 transition-all ${
          isDark
            ? "border-slate-800 bg-[#131B2E]/60 text-white hover:bg-[#1E293B]"
            : "border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50"
        }`}
        title="Lưu thích"
      >
        <svg
          className="h-4 w-4 fill-current text-red-500"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        Lưu thích
      </button>
    </div>
  );
}
