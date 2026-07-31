import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { DOWNLOAD_URL } from "@/content/site";
import logoMark from "@/assets/logo-mark.png";

const nav = [
  { to: "/features", label: "Why" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/community", label: "Community" },
  { to: "/faq", label: "FAQ" },
  { to: "/support", label: "Support" },
] as const;

const legalNav = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/account", label: "Account & Data" },
  { to: "/support", label: "Support" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoMark} alt="Inyeon AI logo" className="h-7 w-7" width={28} height={28} />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-xl tracking-tight">Inyeon AI</span>
            <span className="font-korean text-xs text-thread">인연</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={DOWNLOAD_URL}
          className="rounded-full border border-thread/50 px-4 py-2 text-xs tracking-wide text-foreground transition-colors hover:bg-thread hover:text-primary-foreground"
        >
          Download
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-xs text-muted-foreground md:grid-cols-3">
        <div>
          <span className="flex items-center gap-2">
            <img src={logoMark} alt="Inyeon AI logo" className="h-5 w-5" width={20} height={20} />
            <span className="font-display text-base text-foreground">Inyeon AI</span>
          </span>
          <p className="mt-3 max-w-xs leading-relaxed">
            Destiny doesn&apos;t swipe, it discovers you.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <p className="eyebrow mb-1">Explore</p>
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="flex flex-col gap-2">
          <p className="eyebrow mb-1">Legal & help</p>
          {legalNav.map((item) => (
            <Link key={item.to} to={item.to} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <a href="mailto:support@inyeonai.com" className="transition-colors hover:text-foreground">
            support@inyeonai.com
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function LegalBody({
  lastUpdated,
  sections,
}: {
  lastUpdated?: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
}) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      {lastUpdated ? (
        <p className="eyebrow mb-12">Last updated: {lastUpdated}</p>
      ) : null}
      <div className="space-y-14">
        {sections.map((s) => (
          <article key={s.heading}>
            <div className="thread-rule w-10 opacity-70" />
            <h2 className="mt-5 font-display text-2xl leading-snug md:text-3xl">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {s.bullets ? (
              <ul className="mt-5 space-y-3">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-thread/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}


export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  lead,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 md:pb-24 md:pt-44">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] md:text-6xl">
          {title}
          {italic ? (
            <span className="block italic text-thread glow-text">{italic}</span>
          ) : null}
        </h1>
        {lead ? (
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <p className="font-korean text-sm tracking-[0.4em] text-thread">인연</p>
        <h2 className="mt-6 font-display text-4xl italic md:text-6xl">
          Your inyeon is waiting.
        </h2>
        <p className="mt-6 text-muted-foreground">
          Free. Private. Real. Download Inyeon AI on Android today.
        </p>
        <a
          href={DOWNLOAD_URL}
          className="mt-10 inline-block rounded-full bg-thread px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-thread)] transition-transform hover:-translate-y-0.5"
        >
          Download Free on Android
        </a>
        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          iOS coming soon
        </p>
      </div>
    </section>
  );
}
