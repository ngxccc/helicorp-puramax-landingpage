import { Shield, Wind, Cpu } from "lucide-react";
import { SensorGrid } from "./sensor-grid";

export function XSecureSection() {
  return (
    <section
      id="xsecure"
      className="dark:bg-background border-t border-slate-200 bg-slate-50 py-24 transition-colors duration-300 dark:border-slate-800/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header text */}
        <div className="mb-16 max-w-3xl text-left">
          <span className="mb-3 block text-xs font-bold tracking-widest text-lime-400 uppercase">
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
          {/* Sensor Grid Card (Left, 5 cols) */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-8 text-left shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md lg:col-span-5 lg:row-span-2 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20">
            <div>
              <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-400 uppercase">
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

            {/* 2x2 Grid (Client Component) */}
            <SensorGrid />
          </div>

          {/* Card 1: Không kẹp chân (Right, 7 cols) */}
          <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/20 hover:shadow-md lg:col-span-7 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:-translate-y-0.5">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="mb-1 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Không kẹp chân
              </h4>
              <p className="text-sm leading-relaxed text-slate-600 sm:leading-loose dark:text-zinc-400">
                Chu trình sàng cát tự động dừng lập tức khi phát hiện bé mèo áp
                sát cửa máy dưới 30cm, hạn chế tuyệt đối rủi ro mắc kẹt ngay cả
                khi bé có tính tò mò cao.
              </p>
            </div>
          </div>

          {/* Card 2: Xịt khử mùi (Right bottom-left, 3 cols) */}
          <div className="group flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/20 hover:shadow-md lg:col-span-3 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:-translate-y-0.5">
              <Wind className="h-6 w-6" />
            </div>
            <div>
              <h4 className="mb-1 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Xịt khử mùi
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 sm:leading-loose dark:text-zinc-400">
                Vòi xịt khử mùi Smart Spray tự kích hoạt sau mỗi lần dọn phân,
                ức chế nấm mốc.
              </p>
            </div>
          </div>

          {/* Card 3: Cảm biến xSecure (Right bottom-right, 4 cols) */}
          <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/20 hover:shadow-md lg:col-span-4 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:-translate-y-0.5">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h4 className="mb-1 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Cảm biến xSecure
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 sm:leading-loose dark:text-zinc-400">
                Tích hợp cảm biến nhiệt sinh học, hồng ngoại, 4 cảm biến trọng
                lượng ở chân máy hỗ trợ mèo từ 1.5kg đến 10kg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
