import { NextResponse } from "next/server";

import { submitContactInquiry } from "@/lib/contact";
import {
  type ContactFormResponse,
  contactFormSchema,
} from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const response: ContactFormResponse = {
        success: false,
        message: "Formulář obsahuje neplatná nebo chybějící data.",
      };

      return NextResponse.json(response, { status: 400 });
    }

    if (parsed.data.honeypot) {
      const response: ContactFormResponse = {
        success: true,
        message: "Děkuji za zprávu. Ozvu se co nejdříve.",
      };

      return NextResponse.json(response);
    }

    await submitContactInquiry(parsed.data);

    const response: ContactFormResponse = {
      success: true,
      message: "Děkuji, zpráva dorazila. Ozvu se co nejdříve.",
    };

    return NextResponse.json(response);
  } catch {
    const response: ContactFormResponse = {
      success: false,
      message: "Došlo k chybě při odeslání. Zkuste to prosím znovu.",
    };

    return NextResponse.json(response, { status: 500 });
  }
}
