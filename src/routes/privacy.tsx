import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta, LegalBody } from "@/components/site-chrome";
import { privacySections, LAST_UPDATED } from "@/content/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Privacy-First Dating App | Inyeon AI" },
      {
        name: "description",
        content:
          "The full Inyeon AI Privacy Policy: what we collect, why chats stay encrypted on your device, our privacy controls, your data rights and our zero-tolerance child safety policy.",
      },
      { property: "og:title", content: "Inyeon AI Privacy Policy" },
      {
        property: "og:description",
        content:
          "Local encrypted chats, incognito mode, full message control. Your matches, tests and conversations stay yours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const points = [
  {
    title: "Chats live on your device",
    body: "Your conversations are stored locally and encrypted — just like WhatsApp. We cannot read them. Back up to Google Drive whenever you want, or never at all.",
  },
  {
    title: "Nothing is sold",
    body: "Your data is never sold or traded. Inyeon AI is free because we refuse to monetise your most personal moments, not because we quietly price them elsewhere.",
  },
  {
    title: "Incognito mode",
    body: "Browse invisibly and control read receipts and typing indicators. Your presence on the app is entirely on your terms.",
  },
  {
    title: "Full message control",
    body: "Delete for everyone. Edit what you sent. No other dating app offers both together. Your words remain yours after you send them.",
  },
];

function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Privacy policy"
        title="Privacy is not a policy"
        italic="we follow."
        lead="At Inyeon AI it is the principle we were built on. This document explains exactly what data we collect, what we do with it, and — more importantly — what we will never do with it."
      />

      <section className="mx-auto max-w-6xl px-5 pb-4 pt-20 md:pt-24">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2">
          {points.map((p) => (
            <article
              key={p.title}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="thread-rule w-10 opacity-70 transition-all group-hover:w-20" />
              <h2 className="mt-6 font-display text-2xl leading-snug">{p.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <LegalBody lastUpdated={LAST_UPDATED} sections={privacySections} />

      <FinalCta />
    </SiteShell>
  );
}
