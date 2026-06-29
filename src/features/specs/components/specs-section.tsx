import { WaterDispenserCard } from "./water-dispenser-card";

export function SpecsSection() {
  return (
    <section
      id="thong-so"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="mb-16 max-w-3xl text-left">
        <span className="mb-3 block text-xs font-bold tracking-widest text-lime-400 uppercase">
          THÔNG SỐ KỸ THUẬT CHI TIẾT
        </span>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Thông số
        </h2>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400">
          Khối thông số của Pura Max được sắp xếp theo phong cách showroom trực
          quan: gọn gàng, bố cục mạch lạc giúp bạn nhanh chóng quét thông tin và
          ra quyết định chính xác nhất.
        </p>
      </div>

      {/* Specs Layout Grid (Dispenser Left, 4 Specs Cards Right) */}
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        {/* Eversweet water dispenser Card (Left, Client Component) */}
        <WaterDispenserCard />

        {/* 4 Details Cards (Right, 7 cols) */}
        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:col-span-7">
          {/* Card 1: Kích thước máy */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] dark:border-slate-800 dark:bg-[#131B2E]/30">
            <div>
              <span className="mb-1 block text-[10px] font-bold text-slate-900 uppercase opacity-60 dark:text-white">
                Kích thước máy
              </span>
              <span className="mb-2 block text-xl font-extrabold text-lime-400 sm:text-2xl">
                620 × 538 × 552 mm
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
              Tỷ lệ thân máy gọn gàng lý tưởng cho chung cư và căn hộ nhỏ, nhưng
              vẫn tối ưu hóa không gian bên trong để mèo lớn xoay trở thoải mái.
            </p>
          </div>

          {/* Card 2: Dung tích trong */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] dark:border-slate-800 dark:bg-[#131B2E]/30">
            <div>
              <span className="mb-1 block text-[10px] font-bold text-slate-900 uppercase opacity-60 dark:text-white">
                DUNG TÍCH LỒNG & KHAY RÁC
              </span>
              <span className="mb-2 block text-xl font-extrabold text-lime-400 sm:text-2xl">
                76 L / 7 L
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
              Khoang xoay siêu rộng rãi 76L giúp mèo béo xoay đầu dễ dàng, kết
              hợp khay chứa rác 7L kín mùi đáp ứng nhu cầu dọn dẹp lên tới 15 ngày cho 1 chú mèo.
            </p>
          </div>

          {/* Card 3: Loại cát phù hợp */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] dark:border-slate-800 dark:bg-[#131B2E]/30">
            <div>
              <span className="mb-1 block text-[10px] font-bold text-slate-900 uppercase opacity-60 dark:text-white">
                Loại cát phù hợp
              </span>
              <span className="mb-2 block text-xl font-extrabold text-lime-400 sm:text-2xl">
                Khoáng · hỗn hợp
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
              Hoạt động hiệu quả với cát đất sét, cát đậu nành hạt nhuyễn dạng
              vón mịn, cát hỗn hợp đất sét - gỗ mà không kẹt lồng lọc.
            </p>
          </div>

          {/* Card 4: Kết nối */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] dark:border-slate-800 dark:bg-[#131B2E]/30">
            <div>
              <span className="mb-1 block text-[10px] font-bold text-slate-900 uppercase opacity-60 dark:text-white">
                Kết nối
              </span>
              <span className="mb-2 block text-xl font-extrabold text-lime-400 sm:text-2xl">
                Wi-Fi 2.4GHz
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
              Đồng bộ nhanh chóng với app PETKIT trên điện thoại thông minh để
              xem báo cáo sức khỏe, lịch sử dọn vệ sinh và cảnh báo đầy rác.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
