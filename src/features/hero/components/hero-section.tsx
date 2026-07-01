import { HeroActions } from "./hero-actions";

const HERO_STATS = [
  {
    label: "Chu trình sàng",
    value: "180°",
    description: "Lồng xoay mượt để gom chất thải và giữ cát sạch lâu hơn.",
  },
  {
    label: "Khử mùi",
    value: "Smart Spray",
    description: "Xịt khử mùi sau mỗi chu kỳ, hạn chế mùi lan trong nhà.",
  },
  {
    label: "An toàn",
    value: "xSecure",
    description: "Nhiệt, hồng ngoại, cân nặng và chống kẹp cùng canh chừng.",
  },
] as const;

export function HeroSection() {
  return (
    <div className="z-10 flex flex-col items-start text-left lg:col-span-6">
      {/* Overline Badges */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["PETKIT AI CARE", "7L THÙNG RÁC", "WI-FI 2.4GHZ"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-lime-700 uppercase shadow-sm dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-lime-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Heading */}
      <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-[56px] dark:text-white">
        Chăm mèo nhàn tênh <br className="hidden sm:inline" />
        <span className="text-lime-700 dark:text-lime-400">
          thời đại công nghệ
        </span>
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400">
        PETKIT Pura Max mang trải nghiệm vệ sinh sang ngôn ngữ của thiết bị gia
        dụng cao cấp: tự sáng cát, khử mùi chủ động, theo dõi an toàn đa cảm
        biến và đủ tinh gọn để hợp với phòng khách hiện đại.
      </p>

      {/* 3-Column Stats Card */}
      <div className="mb-8 w-full rounded-3xl bg-slate-100/80 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] ring-1 ring-slate-200/50 dark:bg-white/5 dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:ring-white/10">
        <div className="grid grid-cols-3 gap-4 rounded-[1.125rem] border border-slate-200/30 bg-white p-5 dark:border-slate-800/40 dark:bg-[#131B2E]/40">
          {HERO_STATS.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col ${index < 2 ? "border-r border-slate-200/60 pr-2 dark:border-slate-800/40" : "pl-2"} ${index === 1 ? "px-2" : ""}`}
            >
              <span className="mb-1 block text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase dark:text-slate-400">
                {stat.label}
              </span>
              <span className="mb-1 text-lg font-extrabold tracking-tight text-lime-700 sm:text-2xl dark:text-lime-400">
                {stat.value}
              </span>
              <span className="line-clamp-3 text-[11px] leading-relaxed text-slate-600 dark:text-zinc-400">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <HeroActions />
    </div>
  );
}
