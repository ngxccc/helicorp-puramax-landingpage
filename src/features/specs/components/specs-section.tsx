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
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-balance text-slate-900 sm:text-4xl dark:text-white">
          Thông số kỹ thuật
        </h2>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-loose dark:text-zinc-400/90">
          Khối thông số của Pura Max được sắp xếp theo phong cách showroom trực
          quan: gọn gàng, bố cục mạch lạc giúp bạn nhanh chóng quét thông tin và
          ra quyết định chính xác nhất.
        </p>
      </div>

      {/* 4 Bento Details Cards (Interlocking Asymmetric Grid on Desktop) */}
      <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-12">
        {/* Card 1: Kích thước máy (7 cols) */}
        <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/20 hover:bg-white/90 hover:shadow-md lg:col-span-7 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20 dark:hover:bg-[#131B2E]/60">
          <div>
            <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:text-zinc-400">
              Kích thước máy
            </span>
            <span className="mb-3 block text-xl font-extrabold text-lime-400 transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
              620 × 538 × 552 mm
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-loose dark:text-zinc-400">
            Tỷ lệ thân máy gọn gàng lý tưởng cho chung cư và căn hộ nhỏ, nhưng
            vẫn tối ưu hóa không gian bên trong để mèo lớn xoay trở thoải mái.
          </p>
        </div>

        {/* Card 2: Dung tích trong (5 cols) */}
        <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/20 hover:bg-white/90 hover:shadow-md lg:col-span-5 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20 dark:hover:bg-[#131B2E]/60">
          <div>
            <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:text-zinc-400">
              DUNG TÍCH LỒNG & KHAY RÁC
            </span>
            <span className="mb-3 block text-xl font-extrabold text-lime-400 transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
              76 L / 7 L
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-loose dark:text-zinc-400">
            Khoang xoay siêu rộng rãi 76L giúp mèo béo xoay đầu dễ dàng, kết hợp
            khay chứa rác 7L kín mùi đáp ứng nhu cầu dọn dẹp lên tới 15 ngày cho
            1 chú mèo.
          </p>
        </div>

        {/* Card 3: Loại cát phù hợp (5 cols) */}
        <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/20 hover:bg-white/90 hover:shadow-md lg:col-span-5 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20 dark:hover:bg-[#131B2E]/60">
          <div>
            <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:text-zinc-400">
              Loại cát phù hợp
            </span>
            <span className="mb-3 block text-xl font-extrabold text-lime-400 transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
              Khoáng · hỗn hợp
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-loose dark:text-zinc-400">
            Hoạt động hiệu quả với cát đất sét, cát đậu nành hạt nhuyễn dạng vón
            mịn, cát hỗn hợp đất sét - gỗ mà không kẹt lồng lọc.
          </p>
        </div>

        {/* Card 4: Kết nối (7 cols) */}
        <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-lime-400/20 hover:bg-white/90 hover:shadow-md lg:col-span-7 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20 dark:hover:bg-[#131B2E]/60">
          <div>
            <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:text-zinc-400">
              Kết nối
            </span>
            <span className="mb-3 block text-xl font-extrabold text-lime-400 transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
              Wi-Fi 2.4GHz
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-loose dark:text-zinc-400">
            Đồng bộ nhanh chóng với app PETKIT trên điện thoại thông minh để xem
            báo cáo sức khỏe, lịch sử dọn vệ sinh và cảnh báo đầy rác.
          </p>
        </div>
      </div>
    </section>
  );
}
