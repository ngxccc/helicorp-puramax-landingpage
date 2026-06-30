"use client";

import { useEffect } from "react";
import { useChat } from "@/components/chat-context";
import { useEcom } from "@/components/ecom-context";
import { toast } from "sonner";

export function HeroActions() {
  const { setChatOpen } = useChat();
  const { addToCart, toggleFavorite, favorites, addViewedProduct } = useEcom();
  const isFavorite = favorites.some((f) => f.id === "pura-max");

  useEffect(() => {
    addViewedProduct({
      id: "pura-max",
      name: "PETKIT Pura Max",
      price: 7990000,
      image: "/phienbancaitien.webp",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid w-full grid-cols-3 gap-2 sm:flex sm:w-auto sm:gap-4">
      <button
        onClick={() => {
          addToCart({
            id: "pura-max",
            name: "PETKIT Pura Max",
            price: 7990000,
            image: "/phienbancaitien.webp",
          });
          toast.success("Đã thêm PETKIT Pura Max vào giỏ hàng!");
        }}
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full bg-lime-400 py-1.5 pr-1.5 pl-3 text-[11px] font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(163,230,53,0.4)] active:translate-y-[1px] active:scale-[0.98] sm:py-2 sm:pr-2 sm:pl-5 sm:text-sm"
      >
        <span>Thêm giỏ</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 transition-transform duration-200 sm:h-8 sm:w-8">
          <svg
            className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
      </button>

      <button
        onClick={() => setChatOpen(true)}
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full border border-slate-200 bg-white py-1.5 pr-1.5 pl-3 text-[11px] font-bold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-[1px] active:scale-[0.98] sm:py-2 sm:pr-2 sm:pl-5 sm:text-sm dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-white dark:hover:bg-[#1E293B]"
      >
        <span>Hỏi HeLiBot</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-transform duration-200 sm:h-8 sm:w-8 dark:bg-white/10">
          <svg
            className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
      </button>

      <button
        onClick={() => {
          toggleFavorite({
            id: "pura-max",
            name: "PETKIT Pura Max",
            price: 7990000,
            image: "/phienbancaitien.webp",
          });
          if (isFavorite) {
            toast.info("Đã xóa khỏi danh sách yêu thích!");
          } else {
            toast.success("Đã thêm vào danh sách yêu thích!");
          }
        }}
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full border border-slate-200 bg-white py-1.5 pr-1.5 pl-3 text-[11px] font-bold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-[1px] active:scale-[0.98] sm:py-2 sm:pr-2 sm:pl-5 sm:text-sm dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-white dark:hover:bg-[#1E293B]"
        title="Lưu thích"
      >
        <span>Lưu thích</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-transform duration-200 sm:h-8 sm:w-8 dark:bg-white/10">
          <svg
            className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${isFavorite ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 stroke-slate-400 dark:fill-zinc-700 dark:stroke-zinc-500"}`}
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
