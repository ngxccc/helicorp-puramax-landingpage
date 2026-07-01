import { TrialForm } from "./trial-form";

interface Commitment {
  id: string;
  category: string;
  value: string;
}

const STATIC_COMMITMENTS: Commitment[] = [
  {
    id: "consultation",
    category: "Cam kết",
    value: "Tư vấn trong ngày",
  },
  {
    id: "accessories",
    category: "Kèm phụ kiện",
    value: "Túi rác và refill",
  },
];

export function TrialSection() {
  return (
    <section
      id="dung-thu"
      className="dark:bg-background border-t border-slate-200 bg-slate-50 py-24 transition-colors duration-300 dark:border-slate-800/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col text-left lg:col-span-5">
            <span className="mb-3 block text-xs font-bold tracking-widest text-lime-400 uppercase">
              ĐĂNG KÝ TRẢI NGHIỆM MIỄN PHÍ
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Dùng thử
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-zinc-400">
              Đăng ký trải nghiệm dùng thử sản phẩm tại nhà hoàn toàn miễn phí
              trong vòng 7 ngày để trực tiếp cảm nhận độ êm ái vận hành, hiệu
              quả khử mùi tuyệt đối và khả năng làm quen nhanh chóng của bé mèo
              trong bối cảnh thực tế.
            </p>

            <div className="flex flex-col gap-4">
              {STATIC_COMMITMENTS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-black/5 p-1.5 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10"
                >
                  <div className="flex items-center justify-between rounded-[0.625rem] border border-slate-200/50 bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:border-white/10 dark:bg-[#131B2E]/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div>
                      <span className="mb-1 block text-[10px] font-bold text-slate-900 uppercase opacity-60 dark:text-white">
                        {item.category}
                      </span>
                      <span className="block text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                        {item.value}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-lime-400">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TrialForm />
        </div>
      </div>
    </section>
  );
}
