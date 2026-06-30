"use client";

import { useState, useEffect } from "react";
import { useEcom } from "./ecom-context";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export function RecentlyViewed() {
  const { viewed, addToCart, toggleFavorite, favorites } = useEcom();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter out to avoid rendering anything if there are no viewed items or not mounted
  if (!mounted || viewed.length === 0) return null;

  const mockRecommendations = [
    {
      id: "pura-x",
      name: "Máy dọn rác mèo PETKIT Pura X",
      price: 6490000,
      image: "/12cambien.webp",
      desc: "Phiên bản thiết kế cổ điển thông minh"
    },
    {
      id: "smart-spray",
      name: "Bộ xịt khử mùi Smart Spray",
      price: 590000,
      image: "/khumuidietkhuan.webp",
      desc: "Tinh dầu tự nhiên khử trùng 99%"
    },
    {
      id: "petkit-litter",
      name: "Cát mèo đậu nành PETKIT 5 in 1",
      price: 150000,
      image: "/loaicattuongthich.jpg",
      desc: "Vón hút nhanh, kiểm soát mùi tốt"
    }
  ];

  return (
    <section className="dark:bg-background border-t border-slate-200/80 bg-slate-50 py-16 transition-colors duration-300 dark:border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid for Viewed vs Recommended */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Recently Viewed (Left - 5 Cols) */}
          <div className="lg:col-span-5 text-left">
            <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-400 uppercase">
              BẠN ĐÃ XEM
            </span>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Đã xem gần đây
            </h2>
            
            <div className="flex flex-col gap-4">
              {viewed.map((item) => {
                const isFav = favorites.some((f) => f.id === item.id);
                return (
                  <div
                    key={item.id}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:bg-[#131B2E]/40"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover bg-slate-100 dark:bg-slate-950 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                        Sản phẩm chủ đạo của cửa hàng
                      </p>
                      <span className="mt-2 block text-sm font-extrabold text-lime-600 dark:text-lime-400">
                        {item.price.toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <button
                        aria-label="Thêm vào giỏ hàng"
                        onClick={() => {
                          addToCart({ ...item, quantity: 1 });
                          toast.success(`Đã thêm ${item.name} vào giỏ hàng!`);
                        }}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-lime-400 text-black shadow-sm transition-all hover:bg-lime-500 active:scale-95"
                        title="Thêm giỏ hàng"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      </button>
                      <button
                        aria-label="Thêm vào danh sách yêu thích"
                        onClick={() => {
                          toggleFavorite(item);
                          if (isFav) {
                            toast.info("Đã xóa khỏi danh sách yêu thích!");
                          } else {
                            toast.success("Đã thêm vào danh sách yêu thích!");
                          }
                        }}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-red-500 transition-all active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-zinc-400"
                        title="Yêu thích"
                      >
                        <svg
                          className={`h-4 w-4 ${isFav ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 dark:fill-zinc-700 stroke-slate-400 dark:stroke-zinc-500"}`}
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Recommended Products (Right - 7 Cols) */}
          <div className="lg:col-span-7 text-left">
            <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-400 uppercase">
              HỆ SINH THÁI
            </span>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Gợi ý cho boss của bạn
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mockRecommendations.map((prod) => {
                const isFav = favorites.some((f) => f.id === prod.id);
                return (
                  <Card
                    key={prod.id}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:bg-[#131B2E]/40"
                  >
                    <CardHeader className="p-4 pb-0">
                      <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950 aspect-square mb-3">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardTitle className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-2 min-h-10 sm:min-h-12 leading-snug">
                        {prod.name}
                      </CardTitle>
                      <CardDescription className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 line-clamp-1">
                        {prod.desc}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-4 pt-2 pb-0">
                      <span className="block text-sm sm:text-base font-extrabold text-lime-600 dark:text-lime-400">
                        {prod.price.toLocaleString("vi-VN")}đ
                      </span>
                    </CardContent>
                    
                    <CardFooter className="p-4 pt-3 flex gap-2">
                      <button
                        onClick={() => {
                          addToCart({ ...prod, quantity: 1 });
                          toast.success(`Đã thêm ${prod.name} vào giỏ hàng!`);
                        }}
                        className="flex-1 cursor-pointer rounded-lg bg-lime-400 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-extrabold text-black hover:bg-lime-500 transition-colors"
                      >
                        Mua ngay
                      </button>
                      <button
                        aria-label="Thêm vào danh sách yêu thích"
                        onClick={() => {
                          toggleFavorite(prod);
                          if (isFav) {
                            toast.info("Đã xóa khỏi danh sách yêu thích!");
                          } else {
                            toast.success("Đã thêm vào danh sách yêu thích!");
                          }
                        }}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-red-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-zinc-400"
                      >
                        <svg
                          className={`h-3.5 w-3.5 ${isFav ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 dark:fill-zinc-700 stroke-slate-400 dark:stroke-zinc-500"}`}
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
