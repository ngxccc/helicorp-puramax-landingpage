"use client";

import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";

export function WaterDispenserCard() {
  const { isDark } = useTheme();

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 text-left transition-colors duration-300 lg:col-span-5 ${
        isDark
          ? "border-slate-800/80 bg-[#131B2E]/30"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <div>
        <span className="mb-4 inline-block rounded-md bg-lime-400/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-lime-400 uppercase">
          ĐÃ XEM GẦN ĐÂY
        </span>
        <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          PETKIT Eversweet
        </h3>
        <p
          className={`mb-6 text-sm leading-relaxed ${
            isDark ? "text-zinc-400" : "text-slate-600"
          }`}
        >
          Máy lọc nước thông minh cùng ngôn ngữ thiết kế tối giản, là phụ kiện
          hoàn hảo bổ trợ cho Pura Max, tạo góc sinh hoạt hiện đại cho bé.
        </p>
      </div>

      {/* Eversweet Water Dispenser SVG Vector Representation */}
      <div className="relative flex w-full justify-center py-6">
        <svg viewBox="0 0 200 200" className="h-48 w-48 drop-shadow-lg filter">
          <defs>
            <linearGradient
              id="dispenserGrad"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={isDark ? "#1E293B" : "#F1F5F9"} />
              <stop offset="100%" stopColor={isDark ? "#0F172A" : "#E2E8F0"} />
            </linearGradient>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Main Dispenser Cylinder Container */}
          <rect
            x="40"
            y="40"
            width="120"
            height="130"
            rx="30"
            fill="url(#dispenserGrad)"
            stroke={isDark ? "#334155" : "#CBD5E1"}
            strokeWidth="3"
          />

          {/* Translucent water window */}
          <rect
            x="55"
            y="80"
            width="90"
            height="50"
            rx="10"
            fill="url(#waterGrad)"
          />
          {/* Water line */}
          <line
            x1="55"
            y1="105"
            x2="145"
            y2="105"
            stroke="#0284c7"
            strokeWidth="2"
            strokeDasharray="5 3"
          />
          <circle
            cx="80"
            cy="95"
            r="3"
            fill="#ffffff"
            opacity="0.6"
            className="animate-bounce"
          />
          <circle
            cx="120"
            cy="115"
            r="4"
            fill="#ffffff"
            opacity="0.4"
            className="animate-ping"
          />

          {/* Top Drink Tray */}
          <ellipse
            cx="100"
            cy="40"
            rx="60"
            ry="12"
            fill={isDark ? "#334155" : "#CBD5E1"}
          />
          <ellipse
            cx="100"
            cy="40"
            rx="54"
            ry="8"
            fill={isDark ? "#0F172A" : "#FFFFFF"}
          />

          {/* Spring / Water flow top */}
          <path
            d="M100 40 Q 100 25 97 22 Q 100 20 103 22 Q 100 25 100 40"
            fill="#38bdf8"
            className="animate-pulse"
          />

          {/* Base Status Light */}
          <circle
            cx="100"
            cy="155"
            r="5"
            fill="#a3e635"
            className="animate-pulse"
          />
        </svg>
      </div>

      <button
        onClick={() =>
          toast.success(
            "Đã thêm máy lọc nước Eversweet vào giỏ hàng kèm ưu đãi!",
          )
        }
        className="mt-4 w-full cursor-pointer rounded-xl border border-slate-700 bg-slate-800 py-3 text-xs font-bold text-white transition-all hover:bg-slate-700"
      >
        Xem chi tiết máy lọc nước
      </button>
    </div>
  );
}
