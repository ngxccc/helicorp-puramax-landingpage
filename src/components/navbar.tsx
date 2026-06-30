"use client";
import { useIsClient } from "@/hooks/useIsClient";
import { useTheme } from "./theme-provider";
import { useEcom } from "./ecom-context";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Heart, ShoppingCart, Sun, Moon, ArrowUpRight, Box, X, Minus, Plus } from "lucide-react";
import Image from "next/image";
export function Navbar() {
  const { isDark, setTheme } = useTheme();
  const isClient = useIsClient();
  const { cart, favorites, updateQuantity, removeFromCart, toggleFavorite } =
    useEcom();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-4 z-40 mx-auto w-[calc(100%-2rem)] max-w-7xl">
      <header className="dark:bg-background/80 w-full rounded-full border border-slate-200/80 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md transition-all duration-300 dark:border-slate-800/80 dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
        <div className="flex h-16 items-center justify-between px-6">
          <div
            className="flex cursor-pointer items-center gap-3 transition-all duration-200 active:translate-y-px active:scale-[0.98]"
            onClick={() => scrollTo("tong-quan")}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]">
              <Box className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base leading-none font-extrabold tracking-wider">
                HELICORP
              </div>
              <div className="text-[10px] font-semibold tracking-tight opacity-60">
                PETKIT Pura Max
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <Button
              variant="ghost"
              onClick={() => scrollTo("tong-quan")}
              className="cursor-pointer opacity-80 transition-all duration-200 hover:text-lime-400 hover:opacity-100 active:translate-y-px active:scale-[0.98]"
            >
              Tổng quan
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("xsecure")}
              className="cursor-pointer opacity-80 transition-all duration-200 hover:text-lime-400 hover:opacity-100 active:translate-y-px active:scale-[0.98]"
            >
              xSecure
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("thong-so")}
              className="cursor-pointer opacity-80 transition-all duration-200 hover:text-lime-400 hover:opacity-100 active:translate-y-px active:scale-[0.98]"
            >
              Thông số
            </Button>
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Yêu thích (Favorites) Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Sản phẩm yêu thích"
                  className="relative h-8.5 w-8.5"
                >
                  <Heart
                    className={`h-4.5 w-4.5 ${isClient && favorites.length > 0 ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 stroke-slate-400 dark:fill-zinc-700 dark:stroke-zinc-500"}`}
                  />
                  {isClient && favorites.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {favorites.length}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="end"
                sideOffset={8}
                className="w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-[#131B2E]"
              >
                <h4 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
                  Sản phẩm yêu thích ({isClient ? favorites.length : 0})
                </h4>
                {!isClient || favorites.length === 0 ? (
                  <p className="py-4 text-center text-xs text-slate-500 dark:text-zinc-400">
                    Chưa có sản phẩm yêu thích nào.
                  </p>
                ) : (
                  <div className="flex max-h-60 scrollbar-none flex-col gap-3 overflow-y-auto">
                    {favorites.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 border-b border-slate-100 pb-2 dark:border-slate-800/40"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-lg bg-slate-50 object-cover dark:bg-slate-950"
                        />
                        <div className="flex-1 text-left">
                          <h5 className="line-clamp-1 text-xs font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </h5>
                          <span className="text-[11px] font-semibold text-lime-600 dark:text-lime-400">
                            {item.price.toLocaleString("vi-VN")}đ
                          </span>
                        </div>
                        <div className="flex gap-1.5">
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Xóa khỏi yêu thích"
                            onClick={() => toggleFavorite(item)}
                            className="h-7 w-7 text-slate-500 hover:text-red-500 dark:text-zinc-500"
                            title="Xóa"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </PopoverContent>
            </Popover>

            {/* Giỏ hàng (Cart) Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Giỏ hàng"
                  className="relative h-8.5 w-8.5"
                >
                  <ShoppingCart className="h-4.5 w-4.5" />
                  {isClient && cart.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
                      {cart.reduce(
                        (sum, item) => sum + (item.quantity ?? 1),
                        0,
                      )}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="end"
                sideOffset={8}
                className="w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-[#131B2E]"
              >
                <h4 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
                  Giỏ hàng (
                  {isClient
                    ? cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0)
                    : 0}
                  )
                </h4>
                {!isClient || cart.length === 0 ? (
                  <p className="py-4 text-center text-xs text-slate-500 dark:text-zinc-400">
                    Giỏ hàng trống.
                  </p>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="flex max-h-48 scrollbar-none flex-col gap-3 overflow-y-auto">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 border-b border-slate-100 pb-2 dark:border-slate-800/40"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-lg bg-slate-50 object-cover dark:bg-slate-950"
                          />
                          <div className="flex-1 text-left">
                            <h5 className="line-clamp-1 text-xs font-bold text-slate-900 dark:text-white">
                              {item.name}
                            </h5>
                            <span className="text-[11px] font-semibold text-lime-600 dark:text-lime-400">
                              {(
                                item.price * (item.quantity ?? 1)
                              ).toLocaleString("vi-VN")}
                              đ
                            </span>
                            {/* Quantity Controls */}
                            <div className="mt-1 flex items-center gap-2">
                              <Button
                                variant="secondary"
                                size="icon"
                                aria-label="Giảm số lượng"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-5 w-5"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-xs font-semibold">
                                {item.quantity}
                              </span>
                              <Button
                                variant="secondary"
                                size="icon"
                                aria-label="Tăng số lượng"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-5 w-5"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Xóa khỏi giỏ hàng"
                            onClick={() => removeFromCart(item.id)}
                            className="h-5 w-5 text-slate-400 hover:text-red-500 dark:text-zinc-500"
                            title="Xóa khỏi giỏ"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Total & Checkout */}
                    <div className="mt-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                      <div className="mb-3 flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-600 dark:text-zinc-400">
                          Tổng tiền:
                        </span>
                        <span className="text-sm text-lime-600 dark:text-lime-400">
                          {cart
                            .reduce(
                              (sum, item) =>
                                sum + item.price * (item.quantity ?? 1),
                              0,
                            )
                            .toLocaleString("vi-VN")}
                          đ
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          scrollTo("dung-thu");
                        }}
                        className="w-full cursor-pointer rounded-xl bg-lime-400 py-2.5 text-center text-xs font-extrabold text-black shadow-sm transition-all hover:bg-lime-500"
                      >
                        Đăng Ký & Mua Ngay
                      </button>
                    </div>
                  </div>
                )}
              </PopoverContent>
            </Popover>

            {/* Theme Toggle Button */}
            {/* Theme Toggle Button (Single Toggle) */}
            <Button
              variant="outline"
              size="icon"
              aria-label="Đổi giao diện"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="relative h-8.5 w-8.5"
            >
              {isClient && isDark ? (
                <Sun className="h-4.5 w-4.5" />
              ) : (
                <Moon className="h-4.5 w-4.5" />
              )}
            </Button>

            {/* CTA Button */}
            <Button
              onClick={() => scrollTo("dung-thu")}
              className="group hidden items-center gap-1.5 rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(163,230,53,0.4)] active:translate-y-px active:scale-[0.98] sm:flex sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Dùng thử
              <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
