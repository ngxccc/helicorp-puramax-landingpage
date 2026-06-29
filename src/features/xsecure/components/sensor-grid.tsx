"use client";

import { toast } from "sonner";

export function SensorGrid() {


  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Cell 1: Nhiệt */}
      <div
        className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#0A0D14] p-4"
        onClick={() =>
          toast.info(
            "Cảm biến nhiệt hoạt động: Nhận diện bức xạ nhiệt sinh học từ cơ thể mèo trong khoảng cách gần để tạm dừng máy.",
          )
        }
      >
        <div className="mb-2 text-lime-400">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase opacity-60">
          Nhiệt
        </span>
        <span className="block text-sm font-bold">Nhiệt sinh học</span>
      </div>
      {/* Cell 2: Hồng ngoại */}
      <div
        className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#0A0D14] p-4"
        onClick={() =>
          toast.info(
            "Cảm biến hồng ngoại hoạt động: Phát hiện mèo đi qua hoặc tiến gần cửa máy để đảm bảo an toàn.",
          )
        }
      >
        <div className="mb-2 text-lime-400">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
          </svg>
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase opacity-60">
          Hồng ngoại
        </span>
        <span className="block text-sm font-bold">Quét cửa vào</span>
      </div>
      {/* Cell 3: Trọng lượng */}
      <div
        className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#0A0D14] p-4"
        onClick={() =>
          toast.info(
            "Cảm biến trọng lượng hoạt động: 4 cảm biến ở chân đế đo tải trọng chính xác từ 500g, hỗ trợ mèo từ 1.5kg đến 10kg.",
          )
        }
      >
        <div className="mb-2 text-lime-400">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase opacity-60">
          Trọng lượng
        </span>
        <span className="block text-sm font-bold">Mèo 1.5 - 10 kg</span>
      </div>
      {/* Cell 4: Chống kẹp */}
      <div
        className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#0A0D14] p-4"
        onClick={() =>
          toast.info(
            "Cảm biến chống kẹp cơ học hoạt động: Phát hiện lực cản vật lý bất ngờ trên lồng quay để dừng lập tức và xoay ngược chiều giải phóng vật cản.",
          )
        }
      >
        <div className="mb-2 text-lime-400">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <span className="mb-1 block text-[10px] font-bold uppercase opacity-60">
          Chống kẹp
        </span>
        <span className="block text-sm font-bold">Phản hồi lực cản</span>
      </div>
    </div>
  );
}
