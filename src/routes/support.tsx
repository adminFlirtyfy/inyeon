import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta } from "@/components/site-chrome";
import { supportTopics, SUPPORT_EMAIL } from "@/content/legal";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support & Safety Reports | Inyeon AI" },
      {
        name: "description",
        content:
          "Questions, bugs or safety concerns? Every message to Inyeon AI is read by a real person and answered within 48 hours. Email support@inyeonai.com.",
      },
      { property: "og:title", content: "Inyeon AI Support" },
      {
        property: "og:description",
        content:
          "Real people, 48-hour replies. Account help, bug reports and safety reports — anonymously if you prefer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportPage,
});

const shortcuts = [
  {
    to: "/faq" as const,
    title: "FAQ",
    body: "Quick answers to the most common questions about Inyeon AI.",
    cta: "Browse FAQ",
  },
  {
    to: "/account" as const,
    title: "Account Help",
    body: "Update your profile, manage your data, or delete your account.",
    cta: "Manage account",
  },
  {
    to: "/privacy" as const,
    title: "Privacy",
    body: "Learn how your data is protected and what rights you have.",
    cta: "Read privacy policy",
  },
];

function SupportPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="We typically respond within 48 hours"
        title="Every message is read"
        italic="by a real person."
        lead="Have a question, found a bug, or need help with your account? We are here. Reach out directly — no bots, no ticket mazes."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-3">
          {shortcuts.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="thread-rule w-10 opacity-70 transition-all group-hover:w-20" />
              <h2 className="mt-6 font-display text-2xl leading-snug">{s.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-thread">
                {s.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Contact directly</p>
            <h2 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
              Write to us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="italic text-thread glow-text">
                {SUPPORT_EMAIL}
              </a>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Prefer to email us directly? We are always reachable. For urgent safety or child
              protection concerns, please mark your subject line as <strong>URGENT</strong> — these
              are prioritised immediately.
            </p>
            <div className="thread-rule mt-10 w-24" />
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              Describe your issue in as much detail as possible — this helps us resolve it faster.
              Useful topics to mention in your subject line:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {supportTopics.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l border-border/60 pl-8 md:pl-12">
            <p className="eyebrow">Report a safety concern</p>
            <h2 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
              Your safety is our
              <span className="block italic text-thread">highest priority.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              If you have encountered harassment, abuse, impersonation, or any content that made you
              feel unsafe — please report it. Every safety report is reviewed by a real person, not
              an automated system. Reports can be made anonymously.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=SAFETY%20REPORT`}
              className="mt-8 inline-block rounded-full bg-thread px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-thread)] transition-transform hover:-translate-y-0.5"
            >
              Email a safety report
            </a>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Subject line: SAFETY REPORT
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </SiteShell>
  );
}
