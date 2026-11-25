"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/ui/icons";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "submitting" | "success">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const encoded = new URLSearchParams({
        "form-name": "newsletter",
        email: trimmed,
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });
    } catch {
      // Static local preview fallback
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-[3px] border border-white/20 bg-white/5 p-4" role="status">
        <CheckIcon className="mt-0.5 shrink-0 text-white" />
        <div>
          <p className="text-sm font-medium text-white">You are on the list.</p>
          <p className="mt-1 text-xs leading-5 text-white/70">Thanks for subscribing.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      noValidate
      className={compact ? "" : "mt-6"}
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor={compact ? "footer-email-compact" : "footer-email"} className="sr-only">
        Email address
      </label>
      <div className="flex border-b border-white/35 pb-2 focus-within:border-white">
        <input
          id={compact ? "footer-email-compact" : "footer-email"}
          name="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Email address"
          autoComplete="email"
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
          className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-2 text-sm font-semibold text-white hover:text-[var(--color-silver)] disabled:opacity-60"
        >
          {status === "submitting" ? "…" : "Join"}
        </button>
      </div>
      {status === "error" ? (
        <p id="newsletter-error" className="mt-2 text-xs text-white">
          Enter a valid email address.
        </p>
      ) : (
        <p className="mt-3 text-[11px] leading-5 text-white/65">
          Product notes and offers. Unsubscribe any time.
        </p>
      )}
    </form>
  );
}
