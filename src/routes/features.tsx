import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta } from "@/components/site-chrome";
import { features } from "@/content/site";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Why Inyeon AI — AI Matching, Privacy & Free Psychology Tests" },
      {
        name: "description",
        content:
          "Mood-based AI matching, encrypted local chats, free Big Five and love language tests, incognito mode and full message control — all free on Inyeon AI.",
      },
      { property: "og:title", content: "Why Inyeon AI — Built Different, On Purpose" },
      {
        property: "og:description",
        content:
          "AI that reads intent, not swipes. Encrypted local chats, free psychology tests and total message control.",
      },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Why Inyeon AI"
        title="Built different."
        italic="On purpose."
        lead="Six choices that separate Inyeon AI from every swiping app you have already deleted."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="thread-rule w-10 opacity-70 transition-all group-hover:w-20" />
              <h2 className="mt-6 font-display text-2xl leading-snug">{f.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </SiteShell>
  );
}
