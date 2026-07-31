import { createFileRoute, Link } from "@tanstack/react-router";
import heroThread from "@/assets/red-thread-hero.jpg";
import { SiteShell, FinalCta } from "@/components/site-chrome";
import { features, steps, faqs, DOWNLOAD_URL } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inyeon AI — Free AI Dating App & Community" },
      {
        name: "description",
        content:
          "Destiny doesn't swipe. Inyeon AI matches you through mood, intent and personality — free psychology tests, encrypted local chats, 7-day matches. Android now.",
      },
      { property: "og:title", content: "Inyeon AI — Free AI Dating App & Community" },
      {
        property: "og:description",
        content:
          "A free AI dating app inspired by the Korean philosophy of inyeon. Match through mood, intent and personality. Your data stays yours.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroThread}
          alt="Two hands reaching toward each other, linked by a glowing red thread"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-40 md:pb-40 md:pt-56">
          <p className="eyebrow">Free · Private · Real</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Destiny doesn&apos;t swipe,
            <span className="block italic text-thread glow-text">it discovers you</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Inyeon AI is a free AI dating app inspired by the Korean philosophy of
            inyeon — the invisible thread connecting two people before they ever meet.
            Match through mood, intent, and personality. Your data stays yours. Your
            connection is real.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={DOWNLOAD_URL}
              className="rounded-full bg-thread px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-thread)] transition-transform hover:-translate-y-0.5"
            >
              Download Free on Android
            </a>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Available on Android · iOS coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Meaning */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[auto_1fr] md:items-center md:gap-20 md:py-28">
          <p className="font-korean text-7xl leading-none text-thread md:text-8xl">인연</p>
          <div>
            <p className="font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">
              In Korean philosophy, inyeon is the belief that every meaningful connection
              carries a bond shaped long before the moment you meet. It is not
              coincidence. It is not an algorithm. It is something deeper — and it is
              what this app is built to honour.
            </p>
            <Link
              to="/community"
              className="mt-8 inline-block text-sm text-thread underline-offset-4 hover:underline"
            >
              Meet the community →
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <p className="eyebrow">Why Inyeon AI</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          Built different.{" "}
          <span className="italic text-muted-foreground">On purpose.</span>
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 3).map((f) => (
            <article
              key={f.title}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="thread-rule w-10 opacity-70 transition-all group-hover:w-20" />
              <h3 className="mt-6 font-display text-2xl leading-snug">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
        <Link
          to="/features"
          className="mt-10 inline-block text-sm text-thread underline-offset-4 hover:underline"
        >
          See everything that makes it different →
        </Link>
      </section>

      {/* How */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Simple. Intentional. <span className="italic text-thread">Yours.</span>
          </h2>
          <ol className="mt-14 space-y-px">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="grid gap-4 border-t border-border/60 py-8 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline md:gap-10"
              >
                <span className="font-display text-3xl text-thread">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
          <Link
            to="/how-it-works"
            className="mt-10 inline-block text-sm text-thread underline-offset-4 hover:underline"
          >
            Read the full walkthrough →
          </Link>
        </div>
      </section>

      {/* Privacy */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          The Privacy-First Dating App
        </h2>
        <div className="thread-rule mx-auto mt-8 w-24" />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          We built Inyeon AI for people who are tired of giving their most personal
          moments to platforms that profit from them. Your chats live on your device.
          Your data is never sold. Your matches, your tests, your conversations — yours
          completely. This is what a free dating app in 2026 should look like.
        </p>
        <Link
          to="/privacy"
          className="mt-8 inline-block text-sm text-thread underline-offset-4 hover:underline"
        >
          How your privacy works →
        </Link>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-5 py-24 md:py-32">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Quick answers —{" "}
            <span className="italic text-muted-foreground">no fine print.</span>
          </h2>
          <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {faqs.slice(0, 4).map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl text-foreground marker:hidden">
                  {f.q}
                  <span className="mt-1 shrink-0 text-thread transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <Link
            to="/faq"
            className="mt-10 inline-block text-sm text-thread underline-offset-4 hover:underline"
          >
            View all FAQs →
          </Link>
        </div>
      </section>

      <FinalCta />
    </SiteShell>
  );
}
