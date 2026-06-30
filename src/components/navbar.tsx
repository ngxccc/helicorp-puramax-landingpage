"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";
import { useEcom } from "./ecom-context";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function Navbar() {
  const { isDark, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { cart, favorites, updateQuantity, removeFromCart, toggleFavorite } = useEcom();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
          {/* Logo */}
          <div
            className="flex cursor-pointer items-center gap-3 transition-all duration-200 active:translate-y-px active:scale-[0.98]"
            onClick={() => scrollTo("tong-quan")}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
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
            <button
              onClick={() => scrollTo("tong-quan")}
              className="cursor-pointer opacity-80 transition-all duration-200 hover:text-lime-400 hover:opacity-100 active:translate-y-px active:scale-[0.98]"
            >
              Tổng quan
            </button>
            <button
              onClick={() => scrollTo("xsecure")}
              className="cursor-pointer opacity-80 transition-all duration-200 hover:text-lime-400 hover:opacity-100 active:translate-y-px active:scale-[0.98]"
            >
              xSecure
            </button>
            <button
              onClick={() => scrollTo("thong-so")}
              className="cursor-pointer opacity-80 transition-all duration-200 hover:text-lime-400 hover:opacity-100 active:translate-y-px active:scale-[0.98]"
            >
              Thông số
            </button>
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Yêu thích (Favorites) Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  aria-label="Sản phẩm yêu thích"
                  className="relative flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-800 dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-zinc-400 dark:hover:bg-slate-950 dark:hover:text-white"
                >
                  <svg
                    className={`h-4.5 w-4.5 ${mounted && favorites.length > 0 ? "fill-red-500 stroke-red-500 text-red-500" : "fill-slate-300 dark:fill-zinc-700 stroke-slate-400 dark:stroke-zinc-500"}`}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  {mounted && favorites.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="end"
                sideOffset={8}
                className="w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-[#131B2E]"
              >
                <h4 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
                  Sản phẩm yêu thích ({mounted ? favorites.length : 0})
                </h4>
                {!mounted || favorites.length === 0 ? (
                  <p className="py-4 text-center text-xs text-slate-500 dark:text-zinc-400">
                    Chưa có sản phẩm yêu thích nào.
                  </p>
                ) : (
                  <div className="flex flex-col gap-3 max-h-60 overflow-y-auto scrollbar-none">
                    {favorites.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 border-b border-slate-100 pb-2 dark:border-slate-800/40">
                        <img src={item.image} alt={item.name} className="h-12 w-12 rounded-lg object-cover bg-slate-50 dark:bg-slate-950" />
                        <div className="flex-1 text-left">
                          <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</h5>
                          <span className="text-[11px] font-semibold text-lime-600 dark:text-lime-400">{item.price.toLocaleString('vi-VN')}đ</span>
                        </div>
                        <div className="flex gap-1.5">
                          <button
                            aria-label="Xóa khỏi yêu thích"
                            onClick={() => toggleFavorite(item)}
                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-red-500 dark:border-slate-800 dark:text-zinc-500 dark:hover:bg-slate-950"
                            title="Xóa"
                          >
                            ✕
                          </button>
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
                <button
                  aria-label="Giỏ hàng"
                  className="relative flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-800 dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-zinc-400 dark:hover:bg-slate-950 dark:hover:text-white"
                >
                  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  {mounted && cart.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
                      {cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0)}
                    </span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="end"
                sideOffset={8}
                className="w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-[#131B2E]"
              >
                <h4 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
                  Giỏ hàng ({mounted ? cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0) : 0})
                </h4>
                {!mounted || cart.length === 0 ? (
                  <p className="py-4 text-center text-xs text-slate-500 dark:text-zinc-400">
                    Giỏ hàng trống.
                  </p>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 max-h-48 overflow-y-auto scrollbar-none">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 border-b border-slate-100 pb-2 dark:border-slate-800/40">
                          <img src={item.image} alt={item.name} className="h-12 w-12 rounded-lg object-cover bg-slate-50 dark:bg-slate-950" />
                          <div className="flex-1 text-left">
                            <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</h5>
                            <span className="text-[11px] font-semibold text-lime-600 dark:text-lime-400">
                              {(item.price * (item.quantity ?? 1)).toLocaleString('vi-VN')}đ
                            </span>
                            {/* Quantity Controls */}
                            <div className="mt-1 flex items-center gap-2">
                              <button
                                aria-label="Giảm số lượng"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-zinc-300 dark:hover:bg-slate-700"
                              >
                                -
                              </button>
                              <span className="text-xs font-semibold">{item.quantity}</span>
                              <button
                                aria-label="Tăng số lượng"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-zinc-300 dark:hover:bg-slate-700"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            aria-label="Xóa khỏi giỏ hàng"
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-slate-400 hover:text-red-500 dark:text-zinc-500 cursor-pointer"
                            title="Xóa khỏi giỏ"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Total & Checkout */}
                    <div className="mt-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                      <div className="flex items-center justify-between text-xs font-bold mb-3">
                        <span className="text-slate-600 dark:text-zinc-400">Tổng tiền:</span>
                        <span className="text-sm text-lime-600 dark:text-lime-400">
                          {cart.reduce((sum, item) => sum + (item.price * (item.quantity ?? 1)), 0).toLocaleString('vi-VN')}đ
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
            <button
              aria-label="Đổi giao diện"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="relative flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-800 dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-zinc-400 dark:hover:bg-slate-950 dark:hover:text-white"
            >
              {mounted && isDark ? (
                // Sun Icon (when in dark mode, toggle to light)
                <svg
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                // Moon Icon (when in light mode, toggle to dark)
                <svg
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollTo("dung-thu")}
              className="group hidden sm:flex cursor-pointer items-center gap-1.5 rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(163,230,53,0.4)] active:translate-y-px active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Dùng thử
              <svg
                className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
