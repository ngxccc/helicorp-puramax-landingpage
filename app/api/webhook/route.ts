import { NextResponse } from "next/server";

interface WebhookRequestBody {
  name?: string;
  phone?: string;
  email?: string;
  cats?: string;
  selectedChips?: string[];
  type?: string;
  eventName?: string;
  metadata?: Record<string, unknown>;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WebhookRequestBody;
    const { name, phone, email, cats, selectedChips, type, eventName } = body;

    // If it's a user behavior tracking event, log it and return success
    if (type === "track") {
      console.log(
        `[Behavior Tracking Webhook]: Event "${eventName}" recorded at ${new Date().toISOString()}`,
        body.metadata ?? {},
      );
      return NextResponse.json({
        success: true,
        message: "Tracking event received",
      });
    }

    // Server-side validation for form inputs
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Họ tên phải có ít nhất 2 ký tự!" },
        { status: 400 },
      );
    }

    // Vietnamese phone number regex: starts with 0 or +84, followed by 9 digits
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    const cleanPhone = phone ? phone.replace(/\s/g, "") : "";
    if (!phone || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại Việt Nam (ví dụ: 0901234567).",
        },
        { status: 400 },
      );
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Email không hợp lệ!" },
          { status: 400 },
        );
      }
    }

    const numCats = parseInt(cats ?? "", 10);
    if (isNaN(numCats) || numCats < 1 || numCats > 10) {
      return NextResponse.json(
        { success: false, error: "Số mèo phải từ 1 đến 10 bé!" },
        { status: 400 },
      );
    }

    // Mock successful database/webhook forward logging
    console.log("Webhook Received Valid Form Registration:", {
      name,
      phone,
      email,
      cats,
      selectedChips,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công! Dữ liệu đã được lưu trữ hợp lệ.",
    });
  } catch (error) {
    console.error("Webhook route error:", error);
    return NextResponse.json(
      { success: false, error: "Lỗi xử lý máy chủ Webhook" },
      { status: 500 },
    );
  }
}
