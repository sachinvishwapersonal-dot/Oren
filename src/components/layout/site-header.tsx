"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { navigation, siteConfig } from "@/data/site";
import { useCart } from "@/components/cart/cart-provider";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/primitives";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchDialogRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close overlays after client navigation
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (searchOpen) {
          setSearchOpen(false);
          searchButtonRef.current?.focus();
        } else if (menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
        return;
      }
      if (event.key === "Tab" && searchOpen && searchDialogRef.current) {
        const focusable = searchDialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const query = new FormData(form).get("q");
    if (typeof query === "string" && query.trim()) {
      setSearchOpen(false);
    }
  }

  function isNavItemActive(href: string) {
    if (href.startsWith("/#")) return false;
    if (href.startsWith("/collections")) {
      return pathname.startsWith("/collections") || pathname.startsWith("/products");
    }
    return pathname === href;
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[90]">
        <Container>
          <div className="mt-3 flex h-16 items-center justify-between rounded-[6px] border border-white/25 bg-[var(--color-ink)]/85 px-4 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl md:mt-4 md:h-[72px] md:px-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-[0.16em] md:text-3xl"
              aria-label={`${siteConfig.name} home`}
            >
              OREN
            </Link>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
              {navigation.header.map((item) => {
                const active = isNavItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300 ${
                      active
                        ? "text-white after:w-full"
                        : "text-white/75 after:w-0 hover:text-white hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1 md:gap-3">
              <button
                ref={searchButtonRef}
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
                aria-label="Search products"
              >
                <SearchIcon />
              </button>
              <button
                type="button"
                onClick={openCart}
                className="relative flex h-11 items-center gap-2 rounded-full px-2 transition-colors hover:bg-white/10 md:px-3"
                aria-label={`Open cart with ${count} items`}
              >
                <BagIcon />
                <span className="hidden text-sm font-medium sm:inline">Cart</span>
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-1 text-[10px] font-semibold text-[var(--color-ink)]">
                  {count}
                </span>
              </button>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[80] flex flex-col bg-[var(--color-ink)] px-6 pb-8 pt-28 text-white md:hidden"
        >
          <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile navigation">
            {navigation.header.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-link border-b border-white/10 py-5 text-4xl font-medium tracking-[-0.05em]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between border-t border-white/15 pt-6 text-sm text-white/70">
            <span>{siteConfig.market}</span>
            <span>{siteConfig.currency}</span>
          </div>
        </div>
      ) : null}

      {searchOpen ? (
        <div
          className="fixed inset-0 z-[110] flex items-start justify-center bg-[var(--color-ink)]/70 px-4 pt-24 backdrop-blur-md"
          role="presentation"
          onMouseDown={() => {
            setSearchOpen(false);
            searchButtonRef.current?.focus();
          }}
        >
          <div
            ref={searchDialogRef}
            className="w-full max-w-xl rounded-[6px] bg-[var(--color-paper)] p-5 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <h2
                id="search-title"
                className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
              >
                Search the system
              </h2>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  searchButtonRef.current?.focus();
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[var(--color-mist)]"
                aria-label="Close search"
              >
                <CloseIcon />
              </button>
            </div>
            <form action="/search" method="get" onSubmit={submitSearch} className="mt-6">
              <label htmlFor="site-search" className="sr-only">
                Search products
              </label>
              <div className="flex items-center gap-3 border-b border-[var(--color-ink)] pb-3">
                <SearchIcon className="text-[var(--color-graphite)]" />
                <input
                  ref={searchRef}
                  id="site-search"
                  name="q"
                  type="search"
                  placeholder="Try electrolytes or creatine"
                  className="min-w-0 flex-1 bg-transparent text-base text-[var(--color-ink)] outline-none placeholder:text-[var(--color-graphite)]"
                />
                <button type="submit" className="text-sm font-semibold text-[var(--color-ink)]">
                  Search
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs text-[var(--color-graphite)]">Press Escape to close.</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
