"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const { isDark, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 dark:border-slate-800/80 dark:bg-[#0A0D14]/80 backdrop-blur-md transition-colors duration-300"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => scrollTo("tong-quan")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]">
            <svg
              className="h-6 w-6"
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
            <div className="text-lg leading-none font-extrabold tracking-wider">
              HELICORP
            </div>
            <div className="text-xs font-semibold tracking-tight opacity-60">
              PETKIT Pura Max
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <button
            onClick={() => scrollTo("tong-quan")}
            className="cursor-pointer opacity-80 transition-all hover:text-lime-400 hover:opacity-100"
          >
            Tổng quan
          </button>
          <button
            onClick={() => scrollTo("xsecure")}
            className="cursor-pointer opacity-80 transition-all hover:text-lime-400 hover:opacity-100"
          >
            xSecure
          </button>
          <button
            onClick={() => scrollTo("thong-so")}
            className="cursor-pointer opacity-80 transition-all hover:text-lime-400 hover:opacity-100"
          >
            Thông số
          </button>
        </nav>

        {/* Controls & CTA */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <div
            className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900 p-1 transition-colors"
          >
            <button
              onClick={() => setTheme("light")}
              className={`flex cursor-pointer items-center gap-1 rounded-full px-2 py-1 sm:px-3 text-xs font-bold transition-all ${
                (!mounted ? false : !isDark)
                  ? "bg-white text-black shadow-sm"
                  : "text-white opacity-60"
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
              onClick={() => setTheme("dark")}
              className={`flex cursor-pointer items-center gap-1 rounded-full px-2 py-1 sm:px-3 text-xs font-bold transition-all ${
                (!mounted ? true : isDark)
                  ? "bg-lime-400 text-black shadow-sm"
                  : "text-slate-800 opacity-60"
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
            className="group flex cursor-pointer items-center gap-1.5 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(163,230,53,0.4)] active:translate-y-0"
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
  );
}
