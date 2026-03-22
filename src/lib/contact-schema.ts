import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Vyplňte prosím jméno.")
    .max(80, "Jméno je příliš dlouhé."),
  email: z
    .string()
    .trim()
    .email("Zadejte prosím platný e-mail."),
  phone: z
    .string()
    .trim()
    .min(7, "Zadejte prosím telefon.")
    .max(30, "Telefon je příliš dlouhý."),
  message: z
    .string()
    .trim()
    .min(20, "Popište prosím stručně, co potřebujete.")
    .max(2000, "Zpráva je příliš dlouhá."),
  privacyConsent: z
    .boolean()
    .refine(
      (value) => value,
      "Pro odeslání je potřeba souhlasit se zpracováním osobních údajů.",
    ),
  honeypot: z.string().trim().max(0).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormResponse = {
  success: boolean;
  message: string;
};
