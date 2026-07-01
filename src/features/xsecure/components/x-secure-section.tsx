import type * as React from "react";
import { Shield, Wind, Cpu } from "lucide-react";
import { SensorGrid } from "./sensor-grid";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colSpanClass: string;
  layout: "horizontal" | "vertical";
  textSizeClass: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "anti-pinch-feet",
    title: "Không kẹp chân",
    description:
      "Chu trình sàng cát tự động dừng lập tức khi phát hiện bé mèo áp sát cửa máy dưới 30cm, hạn chế tuyệt đối rủi ro mắc kẹt ngay cả khi bé có tính tò mò cao.",
    icon: Shield,
    colSpanClass: "lg:col-span-7",
    layout: "horizontal",
    textSizeClass: "text-sm",
  },
  {
    id: "odor-spray",
    title: "Xịt khử mùi",
    description:
      "Vòi xịt khử mùi Smart Spray tự kích hoạt sau mỗi lần dọn phân, ức chế nấm mốc.",
    icon: Wind,
    colSpanClass: "lg:col-span-3",
    layout: "vertical",
    textSizeClass: "text-xs",
  },
  {
    id: "xsecure-sensors",
    title: "Cảm biến xSecure",
    description:
      "Tích hợp cảm biến nhiệt sinh học, hồng ngoại, 4 cảm biến trọng lượng ở chân máy hỗ trợ mèo từ 1.5kg đến 10kg.",
    icon: Cpu,
    colSpanClass: "lg:col-span-4",
    layout: "horizontal",
    textSizeClass: "text-xs",
  },
];

export function XSecureSection() {
  return (
    <section
      id="xsecure"
      className="dark:bg-background border-t border-slate-200 bg-slate-50 py-24 transition-colors duration-300 dark:border-slate-800/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl text-left">
          <span className="mb-3 block text-xs font-bold tracking-widest text-lime-700 uppercase">
            HỆ THỐNG AN TOÀN XSECURE
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-balance text-slate-900 sm:text-4xl dark:text-white">
            Đa tầng an tâm
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-loose dark:text-zinc-400/90">
            xSecure không chỉ dừng ở việc phát hiện mèo. Hệ cảm biến chồng lớp
            đa điểm sẽ tự động dừng chu trình quay sàng cát, chốt chặt động cơ
            truyền động và gửi thông báo nhắc nhở người dùng ngay lập tức nếu
            phát hiện bất kỳ dấu hiệu rủi ro bất thường nào.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-8 text-left shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md lg:col-span-5 lg:row-span-2 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20">
            <div>
              <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-700 uppercase">
                MÔ PHỎNG AN TOÀN
              </span>
              <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Cảm biến liên hợp
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-600 sm:leading-loose dark:text-zinc-400">
                4 nhóm cảm biến then chốt đặt chéo góc tạo thành màng bảo vệ 3D
                không góc chết quanh thiết bị.
              </p>
            </div>

            <SensorGrid />
          </div>

          {FEATURE_CARDS.map((card) => {
            const IconComponent = card.icon;
            const isHorizontal = card.layout === "horizontal";

            return (
              <div
                key={card.id}
                className={`group ${card.colSpanClass} flex ${
                  isHorizontal ? "items-start" : "flex-col justify-between"
                } gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-lime-400/20 hover:shadow-md dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {card.title}
                  </h4>
                  <p
                    className={`${card.textSizeClass} leading-relaxed text-slate-600 sm:leading-loose dark:text-zinc-400`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
