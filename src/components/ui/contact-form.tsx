"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/ui/icons";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setStatus("error");
      return;
    }
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-[6px] border border-[var(--color-line)] bg-white p-8" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-signal)]"><CheckIcon /></span>
        <h2 className="mt-6 text-2xl font-semibold tracking-[-0.035em]">Message sent.</h2>
        <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]">Thanks for reaching out. Our team will follow up shortly.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold underline underline-offset-4">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[6px] border border-[var(--color-line)] bg-white p-6 md:p-8">
      <h2 className="text-2xl font-semibold tracking-[-0.035em]">Send a message</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
          <input id="contact-name" name="name" required autoComplete="name" className="mt-2 h-12 w-full rounded-[3px] border border-[var(--color-line)] bg-[var(--color-paper)] px-4 text-sm outline-none focus:border-[var(--color-ink)]" />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className="mt-2 h-12 w-full rounded-[3px] border border-[var(--color-line)] bg-[var(--color-paper)] px-4 text-sm outline-none focus:border-[var(--color-ink)]" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="contact-topic" className="text-sm font-medium">Topic</label>
        <select id="contact-topic" name="topic" className="mt-2 h-12 w-full rounded-[3px] border border-[var(--color-line)] bg-[var(--color-paper)] px-4 text-sm outline-none focus:border-[var(--color-ink)]">
          <option>Product question</option><option>Order support</option><option>Something else</option>
        </select>
      </div>
      <div className="mt-5">
        <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
        <textarea id="contact-message" name="message" required rows={5} className="mt-2 w-full rounded-[3px] border border-[var(--color-line)] bg-[var(--color-paper)] p-4 text-sm outline-none focus:border-[var(--color-ink)]" />
      </div>
      {status === "error" ? <p className="mt-4 text-sm text-[var(--color-signal)]">Complete the required fields and try again.</p> : null}
      <button type="submit" className="button-shape mt-6 h-12 w-full bg-[var(--color-signal)] text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--color-ink)]">Send message</button>
    </form>
  );
}
