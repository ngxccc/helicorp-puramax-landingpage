"use client";

import type * as React from "react";
import { toast } from "sonner";
import { Thermometer, Scan, Scale, Shield } from "lucide-react";

interface SensorItem {
  id: string;
  name: string;
  description: string;
  toastMessage: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Click handler triggers toast notifications to simulate/demonstrate device telemetry response during mock/prototype evaluation.
const SENSOR_DATA: SensorItem[] = [
  {
    id: "temp",
    name: "Nhiệt",
    description: "Nhiệt sinh học",
    toastMessage:
      "Cảm biến nhiệt hoạt động: Nhận diện bức xạ nhiệt sinh học từ cơ thể mèo trong khoảng cách gần để tạm dừng máy.",
    icon: Thermometer,
  },
  {
    id: "infrared",
    name: "Hồng ngoại",
    description: "Quét cửa vào",
    toastMessage:
      "Cảm biến hồng ngoại hoạt động: Phát hiện mèo đi qua hoặc tiến gần cửa máy để đảm bảo an toàn.",
    icon: Scan,
  },
  {
    id: "weight",
    name: "Trọng lượng",
    description: "Mèo 1.5 - 10 kg",
    toastMessage:
      "Cảm biến trọng lượng hoạt động: 4 cảm biến ở chân đế đo tải trọng chính xác từ 500g, hỗ trợ mèo từ 1.5kg đến 10kg.",
    icon: Scale,
  },
  {
    id: "anti-pinch",
    name: "Chống kẹp",
    description: "Phản hồi lực cản",
    toastMessage:
      "Cảm biến chống kẹp cơ học hoạt động: Phát hiện lực cản vật lý bất ngờ trên lồng quay để dừng lập tức và xoay ngược chiều giải phóng vật cản.",
    icon: Shield,
  },
];

export function SensorGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SENSOR_DATA.map((sensor) => {
        const IconComponent = sensor.icon;
        return (
          <div
            key={sensor.id}
            className="relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] backdrop-blur-md transition-all duration-300 ease-out hover:border-lime-400/40 hover:bg-slate-50/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] active:scale-[0.98] dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-lime-400/30 dark:hover:bg-[#131B2E]/60 dark:hover:shadow-[0_8px_30px_rgba(163,230,53,0.06)]"
            onClick={() => toast.info(sensor.toastMessage)}
          >
            <div className="mb-2 text-lime-400 transition-all duration-300">
              <IconComponent className="h-5 w-5" />
            </div>
            <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:text-zinc-400">
              {sensor.name}
            </span>
            <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">
              {sensor.description}
            </span>
          </div>
        );
      })}
    </div>
  );
}
