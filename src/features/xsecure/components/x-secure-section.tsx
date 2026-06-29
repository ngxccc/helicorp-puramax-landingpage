import { SensorGrid } from "./sensor-grid";

export function XSecureSection() {
  return (
    <section
      id="xsecure"
      className="border-t border-slate-200 bg-slate-50 py-24 transition-colors duration-300 dark:border-slate-800/40 dark:bg-[#0E1322]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header text */}
        <div className="mb-16 max-w-3xl text-left">
          <span className="mb-3 block text-xs font-bold tracking-widest text-lime-400 uppercase">
            HỆ THỐNG AN TOÀN XSECURE
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Đa tầng an tâm
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400">
            xSecure không chỉ dừng ở việc phát hiện mèo. Hệ cảm biến chồng lớp
            đa điểm sẽ tự động dừng chu trình quay sàng cát, chốt chặt động cơ
            truyền động và gửi thông báo nhắc nhở người dùng ngay lập tức nếu
            phát hiện bất kỳ dấu hiệu rủi ro bất thường nào.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Sensor Grid Card (Left, 5 cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm lg:col-span-5 dark:border-slate-800/80 dark:bg-[#131B2E]/30">
            <div>
              <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-400 uppercase">
                MÔ PHỎNG AN TOÀN
              </span>
              <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                Cảm biến liên hợp
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                4 nhóm cảm biến then chốt đặt chéo góc tạo thành màng bảo vệ 3D
                không góc chết quanh thiết bị.
              </p>
            </div>

            {/* 2x2 Grid (Client Component) */}
            <SensorGrid />
          </div>

          {/* 3 Vertical Feature Cards (Right, 7 cols) */}
          <div className="flex flex-col gap-6 text-left lg:col-span-7">
            {/* Card 1: Không kẹp chân */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.01] dark:border-slate-800 dark:bg-[#131B2E]/30">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                  Không kẹp chân
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  Chu trình sàng cát tự động dừng lập tức khi phát hiện bé mèo
                  áp sát cửa máy dưới 30cm, hạn chế tuyệt đối rủi ro mắc kẹt
                  ngay cả khi bé có tính tò mò cao.
                </p>
              </div>
            </div>

            {/* Card 2: Xịt khử mùi */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.01] dark:border-slate-800 dark:bg-[#131B2E]/30">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                  Xịt khử mùi
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  Vòi xịt khử mùi Smart Spray tự kích hoạt phun sương hương hoa
                  tự nhiên sau mỗi lần dọn phân, ức chế nấm mốc và giữ không
                  gian sống luôn thơm mát gọn gàng.
                </p>
              </div>
            </div>

            {/* Card 3: Cảm biến xSecure */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.01] dark:border-slate-800 dark:bg-[#131B2E]/30">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                  Cảm biến xSecure
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  Hệ thống tích hợp cảm biến nhiệt sinh học, cảm biến hồng ngoại, 4 cảm biến trọng lượng ở chân máy hỗ trợ mèo từ 1.5kg đến 10kg (nhận diện từ 500g) và cơ chế chống kẹp cơ học phản hồi lực dừng quay lập tức.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
