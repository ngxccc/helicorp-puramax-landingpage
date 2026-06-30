"use client";

import { toast } from "sonner";
import { Thermometer, Scan, Scale, Shield } from "lucide-react";

export function SensorGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Cell 1: Nhiệt */}
      <div
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/40 hover:bg-slate-50/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] active:scale-[0.98] dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-lime-400/30 dark:hover:bg-[#131B2E]/60 dark:hover:shadow-[0_8px_30px_rgba(163,230,53,0.06)]"
        onClick={() =>
          toast.info(
            "Cảm biến nhiệt hoạt động: Nhận diện bức xạ nhiệt sinh học từ cơ thể mèo trong khoảng cách gần để tạm dừng máy.",
          )
        }
      >
        <div className="mb-2 text-lime-400 transition-all duration-300 group-hover:-translate-y-0.5">
          <Thermometer className="h-5 w-5" />
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
          Nhiệt
        </span>
        <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Nhiệt sinh học</span>
      </div>
      {/* Cell 2: Hồng ngoại */}
      <div
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/40 hover:bg-slate-50/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] active:scale-[0.98] dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-lime-400/30 dark:hover:bg-[#131B2E]/60 dark:hover:shadow-[0_8px_30px_rgba(163,230,53,0.06)]"
        onClick={() =>
          toast.info(
            "Cảm biến hồng ngoại hoạt động: Phát hiện mèo đi qua hoặc tiến gần cửa máy để đảm bảo an toàn.",
          )
        }
      >
        <div className="mb-2 text-lime-400 transition-all duration-300 group-hover:-translate-y-0.5">
          <Scan className="h-5 w-5" />
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
          Hồng ngoại
        </span>
        <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Quét cửa vào</span>
      </div>
      {/* Cell 3: Trọng lượng */}
      <div
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/40 hover:bg-slate-50/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] active:scale-[0.98] dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-lime-400/30 dark:hover:bg-[#131B2E]/60 dark:hover:shadow-[0_8px_30px_rgba(163,230,53,0.06)]"
        onClick={() =>
          toast.info(
            "Cảm biến trọng lượng hoạt động: 4 cảm biến ở chân đế đo tải trọng chính xác từ 500g, hỗ trợ mèo từ 1.5kg đến 10kg.",
          )
        }
      >
        <div className="mb-2 text-lime-400 transition-all duration-300 group-hover:-translate-y-0.5">
          <Scale className="h-5 w-5" />
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
          Trọng lượng
        </span>
        <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Mèo 1.5 - 10 kg</span>
      </div>
      {/* Cell 4: Chống kẹp */}
      <div
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/40 hover:bg-slate-50/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] active:scale-[0.98] dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-lime-400/30 dark:hover:bg-[#131B2E]/60 dark:hover:shadow-[0_8px_30px_rgba(163,230,53,0.06)]"
        onClick={() =>
          toast.info(
            "Cảm biến chống kẹp cơ học hoạt động: Phát hiện lực cản vật lý bất ngờ trên lồng quay để dừng lập tức và xoay ngược chiều giải phóng vật cản.",
          )
        }
      >
        <div className="mb-2 text-lime-400 transition-all duration-300 group-hover:-translate-y-0.5">
          <Shield className="h-5 w-5" />
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
          Chống kẹp
        </span>
        <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Phản hồi lực cản</span>
      </div>
    </div>
  );
}
