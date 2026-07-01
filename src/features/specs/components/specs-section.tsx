interface SpecCard {
  id: string;
  category: string;
  value: string;
  description: string;
  colSpanClass: string;
}

// WHY: Asymmetric col-span pattern (7-5 and 5-7) creates an interlocking bento-grid layout to balance visual weight across screen widths.
const SPEC_DATA: SpecCard[] = [
  {
    id: "dimensions",
    category: "Kích thước máy",
    value: "620 × 538 × 552 mm",
    description:
      "Tỷ lệ thân máy gọn gàng lý tưởng cho chung cư và căn hộ nhỏ, nhưng vẫn tối ưu hóa không gian bên trong để mèo lớn xoay trở thoải mái.",
    colSpanClass: "lg:col-span-7",
  },
  {
    id: "capacity",
    category: "DUNG TÍCH LỒNG & KHAY RÁC",
    value: "76 L / 7 L",
    description:
      "Khoang xoay siêu rộng rãi 76L giúp mèo béo xoay đầu dễ dàng, kết hợp khay chứa rác 7L kín mùi đáp ứng nhu cầu dọn dẹp lên tới 15 ngày cho 1 chú mèo.",
    colSpanClass: "lg:col-span-5",
  },
  {
    id: "litter",
    category: "Loại cát phù hợp",
    value: "Khoáng · hỗn hợp",
    description:
      "Hoạt động hiệu quả với cát đất sét, cát đậu nành hạt nhuyễn dạng vón mịn, cát hỗn hợp đất sét - gỗ mà không kẹt lồng lọc.",
    colSpanClass: "lg:col-span-5",
  },
  {
    id: "connectivity",
    category: "Kết nối",
    value: "Wi-Fi 2.4GHz",
    description:
      "Đồng bộ nhanh chóng với app PETKIT trên điện thoại thông minh để xem báo cáo sức khỏe, lịch sử dọn vệ sinh và cảnh báo đầy rác.",
    colSpanClass: "lg:col-span-7",
  },
];

export function SpecsSection() {
  return (
    <section
      id="thong-so"
      className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
    >
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

      <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-12">
        {SPEC_DATA.map((card) => (
          <div
            key={card.id}
            className={`group ${card.colSpanClass} flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:border-lime-400/20 hover:bg-white/90 hover:shadow-md dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/20 dark:hover:bg-[#131B2E]/60`}
          >
            <div>
              <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:text-zinc-400">
                {card.category}
              </span>
              <span className="mb-3 block text-xl font-extrabold text-lime-400 transition-transform duration-300 sm:text-2xl">
                {card.value}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-loose dark:text-zinc-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
