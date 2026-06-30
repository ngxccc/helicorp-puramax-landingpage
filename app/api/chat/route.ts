import { NextResponse } from "next/server";

const DEFAULT_PROMPT = `Bạn là HeLiBot - Trợ lý AI tư vấn sản phẩm Máy dọn phân mèo tự động PETKIT Pura Max chính hãng phân phối bởi HeLiCorp tại Việt Nam.
Hãy trả lời ngắn gọn (dưới 3 câu), thân thiện, tư vấn chính xác dựa trên các thông tin sau:
- Thích hợp cho mèo từ 1.5kg đến 10kg, khoang chứa rộng 76L.
- Tương thích hầu hết các loại cát vón (cát đất sét/khoáng, đậu phụ mịn, cát hỗn hợp).
- Hệ thống khử mùi thông minh Smart Spray tự động phun tinh dầu thiên nhiên loại bỏ mùi hôi tức thì.
- An toàn tuyệt đối với hệ thống xSecure: 4 nhóm cảm biến chồng lớp đa điểm (trọng lượng, hồng ngoại, cảm biến kẹp).
- Giá bán ưu đãi chính hãng tốt nhất tại HeLiCorp, tặng kèm bộ phụ kiện trị giá 500k khi đăng ký dùng thử.
- Bảo hành 12 tháng tại nhà, 1 đổi 1 trong 30 ngày. Giao hàng nhanh toàn quốc, miễn phí lắp đặt trong 2 giờ tại Hà Nội & TP.HCM.
Nếu câu hỏi không liên quan đến sản phẩm, hãy hướng dẫn khéo léo để khách hàng đăng ký dùng thử hoặc hỏi về PETKIT Pura Max.`;

// Local rule-based fallback responses when Gemini is not configured
function getFallbackReply(userMessage: string): string {
  const query = userMessage.toLowerCase();

  if (query.includes("mèo") || query.includes("cân nặng") || query.includes("nặng") || query.includes("kg")) {
    return "Pura Max cực kỳ thích hợp cho mèo từ 1.5kg đến 10kg với khoang chứa rộng 76L thoải mái xoay đầu và hệ cảm biến đo trọng lượng thông minh.";
  }
  if (query.includes("giá") || query.includes("bao nhiêu") || query.includes("tiền")) {
    return "PETKIT Pura Max chính hãng đang có giá ưu đãi đặc biệt tại HeLiCorp. Hãy nhập thông tin đăng ký ở form bên dưới để nhận ngay báo giá kèm ưu đãi phụ kiện 500k!";
  }
  if (query.includes("cát") || query.includes("loại cát")) {
    return "Máy tương thích hoàn hảo với hầu hết các loại cát vón trên thị trường: cát đất sét (khoáng), cát đậu nành/đậu phụ dạng hạt mịn, và cát hỗn hợp.";
  }
  if (query.includes("khử mùi") || query.includes("hôi") || query.includes("mùi")) {
    return "Pura Max tích hợp bộ xịt khử mùi Smart Spray tự động phun tinh dầu hương tự nhiên sau mỗi chu kỳ đi vệ sinh của mèo, loại bỏ mùi hôi tức thì.";
  }
  if (query.includes("bảo hành") || query.includes("chính hãng") || query.includes("sửa")) {
    return "Sản phẩm phân phối chính hãng bởi HeLiCorp được bảo hành 12 tháng tại nhà, cam kết 1 đổi 1 trong 30 ngày đầu tiên nếu có lỗi kỹ thuật.";
  }
  if (query.includes("ship") || query.includes("giao hàng") || query.includes("lắp đặt") || query.includes("giao")) {
    return "HeLiCorp giao hàng nhanh toàn quốc. Khách hàng tại Hà Nội và TP.HCM sẽ được hỗ trợ giao và lắp đặt miễn phí tại nhà trong vòng 2 giờ.";
  }

  return "Cảm ơn bạn đã quan tâm! Bạn có thể để lại thông tin ở phần Đăng ký dùng thử để nhận tư vấn trực tiếp từ HeLiCorp nhé.";
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Tin nhắn không hợp lệ" }, { status: 400 });
    }

    const apiKey = process.env["GEMINI_API_KEY"];

    if (apiKey) {
      try {
        console.log("[HeLiBot Chat API]: Calling Gemini API...");
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${DEFAULT_PROMPT}\n\nCâu hỏi của khách hàng: ${message}`
                  }
                ]
              }
            ]
          })
        });

        if (response.ok) {
          const resData = await response.json();
          const botReply = resData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (botReply) {
            console.log("[HeLiBot Chat API]: Gemini responded successfully.");
            return NextResponse.json({ reply: botReply.trim(), source: "gemini" });
          }
        }
        console.warn("[HeLiBot Chat API]: Gemini API returned error, falling back to local rules.");
      } catch (err) {
        console.error("[HeLiBot Chat API]: Gemini connection failed, falling back.", err);
      }
    }

    // Fallback to local rule-based response
    console.log("[HeLiBot Chat API]: Using server-side local rule-based response.");
    const fallbackReply = getFallbackReply(message);
    return NextResponse.json({ reply: fallbackReply, source: "fallback" });
  } catch (error) {
    console.error("[HeLiBot Chat API] handler error:", error);
    return NextResponse.json({ error: "Lỗi hệ thống chatbot" }, { status: 500 });
  }
}
