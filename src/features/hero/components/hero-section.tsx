import { HeroActions } from "./hero-actions";

export function HeroSection() {
  return (
    <div className="z-10 flex flex-col items-start text-left lg:col-span-6">
      {/* Overline Badges */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["PETKIT AI CARE", "7L THÙNG RÁC", "WI-FI 2.4GHZ"].map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold tracking-widest text-lime-600 shadow-sm sm:text-xs dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-lime-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Heading */}
      <h1 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] dark:text-white">
        Chăm mèo nhàn tênh <br className="hidden sm:inline" />
        <span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.15)]">
          thời đại công nghệ
        </span>
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400">
        PETKIT Pura Max mang trải nghiệm vệ sinh sang ngôn ngữ của thiết bị gia
        dụng cao cấp: tự sáng cát, khử mùi chủ động, theo dõi an toàn đa cảm
        biến và đủ tinh gọn để hợp với phòng khách hiện đại.
      </p>

      {/* 3-Column Stats Card */}
      <div className="mb-8 grid w-full grid-cols-3 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-[#131B2E]/30">
        {/* Stat 1 */}
        <div className="flex flex-col border-r border-slate-200/60 pr-2 dark:border-slate-800/40">
          <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-900 uppercase opacity-60 dark:text-white">
            Chu trình sàng
          </span>
          <span className="mb-1 text-lg font-extrabold text-lime-400 sm:text-2xl">
            180°
          </span>
          <span className="line-clamp-3 text-[11px] leading-relaxed text-slate-900 opacity-70 dark:text-white">
            Lồng xoay mượt để gom chất thải và giữ cát sạch lâu hơn.
          </span>
        </div>
        {/* Stat 2 */}
        <div className="flex flex-col border-r border-slate-200/60 px-2 dark:border-slate-800/40">
          <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-900 uppercase opacity-60 dark:text-white">
            Khử mùi
          </span>
          <span className="mb-1 text-lg font-extrabold text-lime-400 sm:text-2xl">
            Smart Spray
          </span>
          <span className="line-clamp-3 text-[11px] leading-relaxed text-slate-900 opacity-70 dark:text-white">
            Xịt khử mùi sau mỗi chu kỳ, hạn chế mùi lan trong nhà.
          </span>
        </div>
        {/* Stat 3 */}
        <div className="flex flex-col pl-2">
          <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-900 uppercase opacity-60 dark:text-white">
            An toàn
          </span>
          <span className="mb-1 text-lg font-extrabold text-lime-400 sm:text-2xl">
            xSecure
          </span>
          <span className="line-clamp-3 text-[11px] leading-relaxed text-slate-900 opacity-70 dark:text-white">
            Nhiệt, hồng ngoại, cân nặng và chống kẹp cùng canh chừng.
          </span>
        </div>
      </div>

      {/* CTA buttons */}
      <HeroActions />
    </div>
  );
}
