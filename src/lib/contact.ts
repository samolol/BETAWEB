import type { ContactFormData } from "@/lib/contact-schema";

export async function submitContactInquiry(data: ContactFormData) {
  const inquiry = {
    ...data,
    createdAt: new Date().toISOString(),
  };

  console.log("New inquiry received from webnamiru.online", inquiry);
}
