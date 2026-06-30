"use client";

import { useEffect } from "react";
import { useChat } from "@/components/chat-context";
import { useEcom } from "@/components/ecom-context";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Heart } from "lucide-react";

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
      <Button
        onClick={() => {
          addToCart({
            id: "pura-max",
            name: "PETKIT Pura Max",
            price: 7990000,
            image: "/phienbancaitien.webp",
            quantity: 1,
          });
          toast.success("Đã thêm PETKIT Pura Max vào giỏ hàng!");
        }}
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full bg-lime-400 py-1.5 pr-1.5 pl-3 text-[11px] font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(163,230,53,0.4)] active:translate-y-px active:scale-[0.98] sm:py-2 sm:pr-2 sm:pl-5 sm:text-sm"
      >
        <span>Thêm giỏ</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 transition-transform duration-200 sm:h-8 sm:w-8">
          <ShoppingCart className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
        </div>
      </Button>
      <Button
        onClick={() => setChatOpen(true)}
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full border border-slate-200 bg-white py-1.5 pr-1.5 pl-3 text-[11px] font-bold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-px active:scale-[0.98] sm:py-2 sm:pr-2 sm:pl-5 sm:text-sm dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-white dark:hover:bg-[#1E293B]"
      >
        <span>Hỏi HeLiBot</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-transform duration-200 sm:h-8 sm:w-8 dark:bg-white/10">
          <MessageCircle className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
        </div>
      </Button>
      <Button
        variant="outline"
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
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full border border-slate-200 bg-white py-1.5 pr-1.5 pl-3 text-[11px] font-bold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-px active:scale-[0.98] sm:py-2 sm:pr-2 sm:pl-5 sm:text-sm dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-white dark:hover:bg-[#1E293B]"
        title="Lưu thích"
      >
        <span>Lưu thích</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-transform duration-200 sm:h-8 sm:w-8 dark:bg-white/10">
          <Heart
            className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${isFavorite ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 stroke-slate-400 dark:fill-zinc-700 dark:stroke-zinc-500"}`}
          />
        </div>
      </Button>
    </div>
  );
}
