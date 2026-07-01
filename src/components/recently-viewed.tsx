"use client";

import { useIsClient } from "@/hooks/useIsClient";
import { useEcom } from "./ecom-context";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export function RecentlyViewed() {
  const { viewed, addToCart, toggleFavorite, favorites } = useEcom();
  const isClient = useIsClient();

  // Filter out to avoid rendering anything if there are no viewed items or not mounted
  if (!isClient || viewed.length === 0) return null;

  const mockRecommendations = [
    {
      id: "pura-x",
      name: "Máy dọn rác mèo PETKIT Pura X",
      price: 6490000,
      image: "/12cambien.webp",
      desc: "Phiên bản thiết kế cổ điển thông minh",
    },
    {
      id: "smart-spray",
      name: "Bộ xịt khử mùi Smart Spray",
      price: 590000,
      image: "/khumuidietkhuan.webp",
      desc: "Tinh dầu tự nhiên khử trùng 99%",
    },
    {
      id: "petkit-litter",
      name: "Cát mèo đậu nành PETKIT 5 in 1",
      price: 150000,
      image: "/loaicattuongthich.jpg",
      desc: "Vón hút nhanh, kiểm soát mùi tốt",
    },
  ];

  return (
    <section className="dark:bg-background border-t border-slate-200/80 bg-slate-50 py-16 transition-colors duration-300 dark:border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid for Viewed vs Recommended */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Recently Viewed (Left - 5 Cols) */}
          <div className="text-left lg:col-span-5">
            <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-700 uppercase dark:text-lime-400">
              BẠN ĐÃ XEM
            </span>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
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
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-xl bg-slate-100 object-cover transition-transform duration-300 dark:bg-slate-950"
                    />
                    <div className="flex-1">
                      <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                        Sản phẩm chủ đạo của cửa hàng
                      </p>
                      <span className="mt-2 block text-sm font-extrabold text-lime-700 dark:text-lime-400">
                        {item.price.toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="default"
                        size="icon"
                        aria-label="Thêm vào giỏ hàng"
                        onClick={() => addToCart({ ...item, quantity: 1 })}
                        className="h-8 w-8 bg-lime-400 text-black shadow-sm hover:bg-lime-500 active:scale-95"
                        title="Thêm giỏ hàng"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Thêm vào danh sách yêu thích"
                        onClick={() => toggleFavorite(item)}
                        className="h-8 w-8 hover:text-red-500 active:scale-95"
                        title="Yêu thích"
                      >
                        <Heart
                          className={`h-4 w-4 ${isFav ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 stroke-slate-400 dark:fill-zinc-700 dark:stroke-zinc-500"}`}
                        />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommended Products (Right - 7 Cols) */}
          <div className="text-left lg:col-span-7">
            <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-700 uppercase dark:text-lime-400">
              HỆ SINH THÁI
            </span>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Gợi ý cho boss của bạn
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {mockRecommendations.map((prod) => {
                const isFav = favorites.some((f) => f.id === prod.id);
                return (
                  <Card
                    key={prod.id}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:bg-[#131B2E]/40"
                  >
                    <CardHeader className="p-4 pb-0">
                      <div className="mb-3 aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          width={300}
                          height={300}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 300px"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardTitle className="line-clamp-2 text-sm leading-snug font-bold text-slate-900 sm:min-h-12 sm:text-base dark:text-white">
                        {prod.name}
                      </CardTitle>
                      <CardDescription className="mt-1 line-clamp-1 text-xs text-slate-600 sm:text-sm dark:text-zinc-400">
                        {prod.desc}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-4 pt-2 pb-0">
                      <span className="block text-sm font-extrabold text-lime-700 sm:text-base dark:text-lime-400">
                        {prod.price.toLocaleString("vi-VN")}đ
                      </span>
                    </CardContent>
                    <CardFooter className="flex gap-2 p-4 pt-3">
                      <Button
                        onClick={() => addToCart({ ...prod, quantity: 1 })}
                        className="flex-1 rounded-lg bg-lime-400 text-center text-xs font-extrabold text-black transition-colors hover:bg-lime-500 sm:py-2.5 sm:text-sm"
                      >
                        Mua ngay
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Thêm vào danh sách yêu thích"
                        onClick={() => toggleFavorite(prod)}
                        className="h-9 w-9 hover:text-red-500"
                      >
                        <Heart
                          className={`h-3.5 w-3.5 ${isFav ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 stroke-slate-400 dark:fill-zinc-700 dark:stroke-zinc-500"}`}
                        />
                      </Button>
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
