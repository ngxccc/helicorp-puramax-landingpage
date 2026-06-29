"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";

export function DeviceMockup() {
  const { isDark, toggleTheme } = useTheme();
  const [activeMockupFeature, setActiveMockupFeature] = useState<string | null>(
    null,
  );

  return (
    <div className="relative flex min-h-125 w-full flex-col items-center justify-center lg:col-span-6">
      {/* Interactive Mockup Ring & Diagram */}
      <div className="relative flex aspect-square w-full max-w-105 items-center justify-center">
        {/* Ambient Glow */}
        <div
          className={`absolute h-72 w-72 rounded-full opacity-25 mix-blend-screen blur-3xl transition-all ${
            activeMockupFeature === "sensor"
              ? "scale-125 bg-red-500"
              : activeMockupFeature === "dark-mode"
                ? "bg-indigo-600"
                : "bg-lime-400"
          }`}
        />

        {/* Main SVG Graphic of Pura Max */}
        <svg
          viewBox="0 0 400 400"
          className="relative z-10 h-full w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)] filter"
        >
          {/* SVG Filters */}
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a3e635" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer housing (Body frame) */}
          <rect
            x="60"
            y="80"
            width="280"
            height="250"
            rx="40"
            fill={isDark ? "#1A2238" : "#E2E8F0"}
            stroke={isDark ? "#2A3655" : "#CBD5E1"}
            strokeWidth="4"
          />

          {/* Status OLED Display on side */}
          <rect
            x="275"
            y="140"
            width="36"
            height="50"
            rx="6"
            fill="#020617"
            stroke="#334155"
            strokeWidth="2"
          />
          {/* Screen lights */}
          <line
            x1="283"
            y1="155"
            x2="303"
            y2="155"
            stroke="#a3e635"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <line
            x1="283"
            y1="165"
            x2="295"
            y2="165"
            stroke="#a3e635"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Control Panel Buttons */}
          <circle
            cx="293"
            cy="205"
            r="4"
            fill="#a3e635"
            className="cursor-pointer"
            onClick={() => toast.info("Bấm nút điều khiển")}
          />
          <circle cx="293" cy="218" r="4" fill="#64748b" />

          {/* Inner Rotating Drum container */}
          <circle
            cx="170"
            cy="200"
            r="95"
            fill={isDark ? "#0F172A" : "#FFFFFF"}
            stroke={isDark ? "#1E293B" : "#E2E8F0"}
            strokeWidth="4"
          />

          {/* Rotating drum inner detail lines */}
          <circle
            cx="170"
            cy="200"
            r="80"
            fill="none"
            stroke={isDark ? "#1E293B" : "#F1F5F9"}
            strokeWidth="1"
            strokeDasharray="10 5"
          />

          {/* Lồng xoay / Cylinder Entry Opening */}
          <ellipse
            cx="170"
            cy="200"
            rx="55"
            ry="60"
            fill={isDark ? "#020617" : "#F1F5F9"}
            stroke={isDark ? "#334155" : "#CBD5E1"}
            strokeWidth="3"
          />

          {/* Rubber Liner / Lưới lọc dẻo detail inside */}
          <path
            d="M 120 220 Q 170 250 220 220"
            fill="none"
            stroke="#64748b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />
          <path
            d="M 125 185 Q 170 155 215 185"
            fill="none"
            stroke="#475569"
            strokeWidth="2"
          />

          {/* Night Mode glowing interior (Dynamic visualization) */}
          {isDark && (
            <circle
              cx="170"
              cy="200"
              r="50"
              fill="url(#glow)"
              className="pointer-events-none animate-pulse"
            />
          )}

          {/* Active Sensor Wave overlay (Dynamic visualization) */}
          {activeMockupFeature === "sensor" && (
            <g className="animate-pulse">
              <circle cx="170" cy="140" r="10" fill="url(#sensorGlow)" />
              <path
                d="M 130 130 A 60 60 0 0 1 210 130"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="5 5"
              />
              <path
                d="M 140 120 A 80 80 0 0 1 200 120"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          )}

          {/* Custom glowing rings for hotspots when active */}
          {activeMockupFeature === "dark-mode" && (
            <circle
              cx="170"
              cy="200"
              r="88"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
              className="animate-ping"
            />
          )}
          {activeMockupFeature === "sieve" && (
            <path
              d="M 120 220 Q 170 250 220 220"
              fill="none"
              stroke="#a3e635"
              strokeWidth="8"
              strokeLinecap="round"
              className="animate-pulse"
            />
          )}
          {activeMockupFeature === "bin" && (
            <rect
              x="250"
              y="270"
              width="80"
              height="50"
              rx="10"
              fill="none"
              stroke="#a3e635"
              strokeWidth="3"
              className="animate-pulse"
            />
          )}
          {activeMockupFeature === "deodorant" && (
            <circle
              cx="225"
              cy="155"
              r="8"
              fill="#a3e635"
              className="animate-ping"
            />
          )}

          {/* Litter box Base / Legs */}
          <rect x="90" y="325" width="40" height="15" rx="5" fill="#334155" />
          <rect x="210" y="325" width="40" height="15" rx="5" fill="#334155" />
        </svg>

        {/* Hotspot Floating Label 1: CHẾ ĐỘ TỐI (Top Left) */}
        <button
          onMouseEnter={() => setActiveMockupFeature("dark-mode")}
          onMouseLeave={() => setActiveMockupFeature(null)}
          onClick={() => {
            toggleTheme();
            toast.info(
              `Đã chuyển sang chế độ ${isDark ? "Sáng" : "Tối"}!`,
            );
          }}
          className={`absolute -top-4 -left-6 z-20 flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold shadow-lg transition-all hover:scale-105 ${
            isDark
              ? "border-indigo-500/40 bg-[#131B2E]/90 text-white"
              : "border-slate-200 bg-white text-slate-800"
          }`}
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500" />
          CHẾ ĐỘ TỐI
        </button>

        {/* Hotspot Floating Label 2: CẢM BIẾN SẴN (Top Right) */}
        <button
          onMouseEnter={() => setActiveMockupFeature("sensor")}
          onMouseLeave={() => setActiveMockupFeature(null)}
          onClick={() =>
            toast.success(
              "Hệ cảm biến xSecure đã kích hoạt sẵn sàng quét radar chống kẹp.",
            )
          }
          className={`absolute -top-4 -right-6 z-20 flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold shadow-lg transition-all hover:scale-105 ${
            isDark
              ? "border-lime-500/40 bg-[#131B2E]/90 text-white"
              : "border-slate-200 bg-white text-slate-800"
          }`}
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-lime-400" />
          ⚡ CẢM BIẾN SẴN
        </button>

        {/* Hotspot Floating Label 3: Lưới lọc dẻo (Middle Left) */}
        <button
          onMouseEnter={() => setActiveMockupFeature("sieve")}
          onMouseLeave={() => setActiveMockupFeature(null)}
          onClick={() =>
            toast.info(
              "Lưới lọc dẻo bằng cao su cao cấp chịu lực, dễ tháo rời vệ sinh.",
            )
          }
          className={`absolute top-1/2 -left-12 z-20 flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-1.5 text-xs font-semibold shadow-lg transition-all hover:scale-105 ${
            isDark
              ? "border-slate-800 bg-[#131B2E]/80 text-zinc-300"
              : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          Lưới lọc dẻo
        </button>

        {/* Hotspot Floating Label 4: Thùng 7L (Middle Right) */}
        <button
          onMouseEnter={() => setActiveMockupFeature("bin")}
          onMouseLeave={() => setActiveMockupFeature(null)}
          onClick={() =>
            toast.info(
              "Thùng chứa rác dung tích lớn 7L, chứa rác mèo lên tới 15 ngày.",
            )
          }
          className={`absolute top-2/3 -right-12 z-20 flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-1.5 text-xs font-semibold shadow-lg transition-all hover:scale-105 ${
            isDark
              ? "border-slate-800 bg-[#131B2E]/80 text-zinc-300"
              : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          Thùng 7L
        </button>

        {/* Hotspot Floating Label 5: Khử mùi tự động (Bottom Center) */}
        <button
          onMouseEnter={() => setActiveMockupFeature("deodorant")}
          onMouseLeave={() => setActiveMockupFeature(null)}
          onClick={() =>
            toast.success(
              "Chế độ phun khử mùi Smart Spray tự động phun sau mỗi chu trình đi vệ sinh.",
            )
          }
          className={`absolute -bottom-6 left-1/4 z-20 flex cursor-pointer items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold shadow-lg transition-all hover:scale-105 ${
            isDark
              ? "border-slate-800 bg-[#131B2E]/90 text-zinc-300"
              : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          Khử mùi tự động
        </button>
      </div>

      {/* Overlapping Inset Card 1 (Cat stepping out) - Absolute placed */}
      <div
        className={`absolute top-[15%] left-[-2%] xl:left-[-6%] 2xl:left-[-10%] z-30 hidden max-w-37.5 flex-col rounded-xl border p-3 shadow-2xl transition-colors xl:flex ${
          isDark
            ? "border-slate-800 bg-[#131B2E]/95 text-white"
            : "border-slate-200 bg-white/95 text-slate-800"
        }`}
      >
        <div className="mb-1 text-[10px] font-bold text-lime-400">TẦM NHÌN</div>
        {/* Simplified vector cat silhouette */}
        <div className="mb-2 flex h-16 w-full items-center justify-center overflow-hidden rounded bg-slate-800/40 dark:bg-slate-900/60">
          <svg
            className="h-12 w-12 text-zinc-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <span className="text-[10px] leading-normal opacity-70">
          Hồng ngoại phát hiện mèo tiến lại gần từ xa.
        </span>
      </div>

      {/* Overlapping Inset Card 2 (Favorites & purchase stream) - Absolute placed */}
      <div
        className={`absolute top-[20%] right-[-2%] xl:right-[-6%] 2xl:right-[-12%] z-30 hidden max-w-45 flex-col rounded-xl border p-4 shadow-2xl transition-colors xl:flex ${
          isDark
            ? "border-slate-800 bg-[#131B2E]/95 text-white"
            : "border-slate-200 bg-white/95 text-slate-800"
        }`}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-bold text-lime-400">YÊU THÍCH</span>
          <svg
            className="h-3.5 w-3.5 fill-current text-red-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <p className="text-[10px] leading-normal opacity-80">
          Lưu máy, phụ kiện refill và túi rác trong cùng một luồng mua hàng tiện
          lợi.
        </p>
      </div>
    </div>
  );
}
