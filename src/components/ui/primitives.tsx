import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1425px] px-4 md:px-5 ${className}`}>{children}</div>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">) {
  const variants = {
    primary:
      "bg-[var(--color-signal)] text-white hover:bg-[var(--color-ink)]",
    secondary:
      "bg-white text-[var(--color-ink)] hover:bg-[var(--color-silver)]",
    outline:
      "border border-[var(--color-ink)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white",
    light:
      "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-[var(--color-ink)]",
  };

  return (
    <Link
      href={href}
      className={`button-shape inline-flex min-h-12 items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-[background-color,color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-px ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`font-mono text-xs font-medium tracking-[0.16em] ${
        light ? "text-white/60" : "text-[var(--color-graphite)]"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`${eyebrow ? "mt-4 " : ""}text-balance text-4xl font-bold leading-[1.05] tracking-[-0.045em] md:text-5xl ${
          light ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-6 max-w-2xl text-pretty text-base leading-7 ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-[var(--color-graphite)]"}`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export function Badge({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "signal";
}) {
  const tones = {
    light: "border-[var(--color-line)] bg-white/70 text-[var(--color-ink)]",
    dark: "border-white/20 bg-white/10 text-white",
    signal: "border-transparent bg-[var(--color-signal)] text-white",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
