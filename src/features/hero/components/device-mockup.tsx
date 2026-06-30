"use client";

import Image from "next/image";

export function DeviceMockup() {
  return (
    <div className="relative flex min-h-125 w-full flex-col items-center justify-center lg:col-span-6">
      {/* Interactive Mockup Ring & Diagram */}
      <div className="relative flex aspect-square w-full max-w-105 items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-lime-400 opacity-20 blur-3xl transition-all duration-700 dark:bg-lime-500" />

        {/* Main Product Image Wrapper Card - Rounded & Bordered */}
        <div className="relative flex h-80 w-[320px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200/50 bg-slate-50 shadow-xl sm:h-95 sm:w-95 lg:h-105 lg:w-105 dark:border-slate-800/50 dark:bg-slate-900">
          <Image
            src="/phienbancaitien.webp"
            alt="PETKIT Pura Max 2 Phiên Bản Cải Tiến"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
            className="rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Overlapping Inset Card 1 (Bảo vệ 3D) - Absolute placed, visible on all viewports */}
      <div className="absolute top-[10%] left-[-4%] z-30 flex max-w-52.5 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-1 text-slate-800 shadow-xl transition-all duration-300 xl:left-[-6%] 2xl:left-[-12%] dark:border-slate-800 dark:bg-[#131B2E]/95 dark:text-white">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
          <Image
            src="/12cambien.webp"
            alt="Bảo Vệ 3D PETKIT Pura Max"
            fill
            sizes="40px"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold text-lime-400">BẢO VỆ 3D</span>
          <span className="mt-0.5 text-[9px] leading-snug opacity-75">
            Cảm biến nhiệt & hồng ngoại phát hiện mèo từ xa.
          </span>
        </div>
      </div>

      {/* Overlapping Inset Card 2 (Kết nối App) - Absolute placed, visible on all viewports */}
      <div className="absolute top-[18%] right-[-4%] z-30 flex max-w-52.5 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-1 text-slate-800 shadow-xl transition-all duration-300 xl:right-[-6%] 2xl:right-[-12%] dark:border-slate-800 dark:bg-[#131B2E]/95 dark:text-white">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
          <Image
            src="/nhatkymeo.webp"
            alt="Nhật Ký Mèo Đi Vệ Sinh"
            fill
            sizes="40px"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold text-lime-400">
            KẾT NỐI APP
          </span>
          <span className="mt-0.5 text-[9px] leading-snug opacity-75">
            Nhật ký mèo đi vệ sinh và lịch sử cân nặng chi tiết.
          </span>
        </div>
      </div>
    </div>
  );
}
