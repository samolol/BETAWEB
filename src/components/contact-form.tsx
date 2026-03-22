"use client";

import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { siteContent } from "@/content/site";
import { type ContactFormData, contactFormSchema } from "@/lib/contact-schema";

type SubmissionState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

type FormspreeErrorResponse = {
  errors?: Array<{
    message?: string;
  }>;
};

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();
const SUCCESS_MESSAGE = "Děkuji, zpráva dorazila. Ozvu se co nejdříve.";
const GENERIC_ERROR_MESSAGE = "Odeslání se nepodařilo. Zkuste to prosím znovu.";
const MISSING_ENDPOINT_MESSAGE =
  "Kontaktní formulář zatím není nastavený. Zkuste to prosím později nebo mě kontaktujte e-mailem.";
const RATE_LIMIT_MESSAGE =
  "Formulář byl odeslán příliš často. Počkejte prosím chvíli a zkuste to znovu.";
const VALIDATION_ERROR_MESSAGE =
  "Odeslání se nepodařilo. Zkontrolujte prosím formulář a zkuste to znovu.";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-[#b42318]">{message}</p>;
}

export function ContactForm() {
  const privacy = siteContent.legal.privacy;
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacyConsent: false,
      honeypot: "",
    },
  });

  async function onSubmit(values: ContactFormData) {
    setSubmissionState({ type: "idle", message: "" });

    if (!FORMSPREE_ENDPOINT) {
      setSubmissionState({
        type: "error",
        message: MISSING_ENDPOINT_MESSAGE,
      });
      return;
    }

    if (values.honeypot) {
      reset();
      setSubmissionState({
        type: "success",
        message: SUCCESS_MESSAGE,
      });
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          privacyConsent: values.privacyConsent,
        }),
      });

      if (!response.ok) {
        let message = GENERIC_ERROR_MESSAGE;

        if (response.status === 429) {
          message = RATE_LIMIT_MESSAGE;
        } else if (response.status >= 400 && response.status < 500) {
          message = VALIDATION_ERROR_MESSAGE;
        }

        try {
          const result = (await response.json()) as FormspreeErrorResponse;
          const hasApiErrors = Boolean(
            result.errors?.some((error) => error.message?.trim()),
          );

          if (hasApiErrors && response.status >= 400 && response.status < 500) {
            message = VALIDATION_ERROR_MESSAGE;
          }
        } catch {
          // Keep the Czech fallback message if Formspree returns an empty body.
        }

        setSubmissionState({
          type: "error",
          message,
        });
        return;
      }

      reset();
      setSubmissionState({
        type: "success",
        message: SUCCESS_MESSAGE,
      });
    } catch {
      setSubmissionState({
        type: "error",
        message: GENERIC_ERROR_MESSAGE,
      });
    }
  }

  return (
    <form
      className="rounded-[2.2rem] border border-[var(--color-line)] bg-white/84 p-6 shadow-[var(--shadow-float)] backdrop-blur sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className="block text-sm font-semibold text-[var(--color-text)]"
            htmlFor="name"
          >
            Jméno
          </label>
          <input
            id="name"
            className="mt-2 w-full rounded-[1.35rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[rgba(31,123,112,0.34)] focus:bg-white focus:ring-4 focus:ring-[rgba(31,123,112,0.1)]"
            placeholder={siteContent.contact.placeholders.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <label
            className="block text-sm font-semibold text-[var(--color-text)]"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 w-full rounded-[1.35rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[rgba(31,123,112,0.34)] focus:bg-white focus:ring-4 focus:ring-[rgba(31,123,112,0.1)]"
            placeholder={siteContent.contact.placeholders.email}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="mt-5">
        <label
          className="block text-sm font-semibold text-[var(--color-text)]"
          htmlFor="phone"
        >
          Telefon
        </label>
        <input
          id="phone"
          className="mt-2 w-full rounded-[1.35rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[rgba(31,123,112,0.34)] focus:bg-white focus:ring-4 focus:ring-[rgba(31,123,112,0.1)]"
          placeholder={siteContent.contact.placeholders.phone}
          {...register("phone")}
        />
        <FieldError message={errors.phone?.message} />
      </div>

      <div className="mt-5">
        <label
          className="block text-sm font-semibold text-[var(--color-text)]"
          htmlFor="message"
        >
          Zpráva
        </label>
        <textarea
          id="message"
          rows={6}
          className="mt-2 w-full rounded-[1.6rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[rgba(31,123,112,0.34)] focus:bg-white focus:ring-4 focus:ring-[rgba(31,123,112,0.1)]"
          placeholder={siteContent.contact.placeholders.message}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div className="mt-5">
        <div className="rounded-[1.35rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.72)] px-4 py-3">
          <div className="flex items-start gap-3">
            <input
              id="privacyConsent"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-[var(--color-line-strong)] accent-[var(--color-accent)]"
              {...register("privacyConsent")}
            />
            <span className="text-sm leading-6 text-[var(--color-muted)]">
              <label className="cursor-pointer" htmlFor="privacyConsent">
                {privacy.checkboxLabelPrefix}{" "}
              </label>
              <Link
                className="font-medium text-[var(--color-text)] underline decoration-[rgba(31,123,112,0.35)] underline-offset-4 transition hover:text-[var(--color-accent)]"
                href={privacy.href}
                target="_blank"
                rel="noreferrer"
              >
                {privacy.checkboxLinkLabel}
              </Link>
              .
            </span>
          </div>
        </div>
        <FieldError message={errors.privacyConsent?.message} />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Společnost</label>
        <input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,var(--color-accent),#328b80)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(31,123,112,0.24)] ring-1 ring-white/12 transition hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(31,123,112,0.28)] hover:brightness-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Odesílám..." : siteContent.contact.cta}
      </button>

      <p className="mt-3 text-center text-sm text-[var(--color-muted)]">
        {siteContent.contact.responseNote}
      </p>

      <div aria-live="polite" className="mt-4 min-h-6 text-sm">
        {submissionState.type === "success" ? (
          <p className="rounded-[1.4rem] bg-[rgba(31,123,112,0.1)] px-4 py-3 text-[var(--color-accent-strong)]">
            {submissionState.message}
          </p>
        ) : null}

        {submissionState.type === "error" ? (
          <p className="rounded-[1.4rem] bg-[rgba(180,35,24,0.08)] px-4 py-3 text-[#b42318]">
            {submissionState.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
