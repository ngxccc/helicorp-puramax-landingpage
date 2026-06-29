"use client";

import { useChat } from "@/components/chat-context";
import { toast } from "sonner";

export function HeroActions() {
  const { setChatOpen } = useChat();

  return (
    <div className="grid grid-cols-3 gap-2 w-full sm:flex sm:w-auto sm:gap-4">
      <button
        onClick={() => toast.success("Đã thêm Pura Max vào giỏ hàng!")}
        className="flex cursor-pointer items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full bg-lime-400 px-1.5 py-3 sm:px-6 sm:py-3.5 text-[11px] leading-tight sm:text-sm font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.3)] transition-all hover:scale-[1.02] active:scale-95 w-full"
      >
        <svg
          className="h-4 w-4 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span>Thêm giỏ</span>
      </button>

      <button
        onClick={() => setChatOpen(true)}
        className="flex cursor-pointer items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full border px-1.5 py-3 sm:px-6 sm:py-3.5 text-[11px] leading-tight sm:text-sm font-bold transition-all w-full border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-white dark:hover:bg-[#1E293B]"
      >
        <svg
          className="h-4 w-4 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Hỏi HeLiBot</span>
      </button>

      <button
        onClick={() => toast.info("Đã lưu vào danh sách yêu thích!")}
        className="flex cursor-pointer items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full border px-1.5 py-3 sm:px-4 sm:py-3.5 text-[11px] leading-tight sm:text-sm font-bold transition-all w-full border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-white dark:hover:bg-[#1E293B]"
        title="Lưu thích"
      >
        <svg
          className="h-4 w-4 fill-current text-red-500 flex-shrink-0"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <span>Lưu thích</span>
      </button>
    </div>
  );
}
