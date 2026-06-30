"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const { isDark, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <div className="flex items-center gap-1 rounded-full border border-slate-200/60 bg-slate-100/80 p-0.5 transition-colors dark:border-slate-800/80 dark:bg-slate-950/80">
              <button
                aria-label="Giao diện sáng"
                onClick={() => setTheme("light")}
                className={`flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 active:translate-y-px active:scale-[0.98] sm:px-3 ${
                  (!mounted ? false : !isDark)
                    ? "border border-slate-200/50 bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                <span className="hidden sm:inline">Sáng</span>
              </button>
              <button
                aria-label="Giao diện tối"
                onClick={() => setTheme("dark")}
                className={`flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 active:translate-y-px active:scale-[0.98] sm:px-3 ${
                  (!mounted ? true : isDark)
                    ? "bg-lime-400 text-black shadow-[0_2px_8px_rgba(163,230,53,0.2)]"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                <span className="hidden sm:inline">Tối</span>
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollTo("dung-thu")}
              className="group flex cursor-pointer items-center gap-1.5 rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(163,230,53,0.4)] active:translate-y-px active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
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
