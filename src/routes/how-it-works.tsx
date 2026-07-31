import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta } from "@/components/site-chrome";
import { steps } from "@/content/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Inyeon AI Works — Mood, Intent & 7-Day Matches" },
      {
        name: "description",
        content:
          "Take free personality tests, set your mood and intent, meet a match that stays active for seven days, and chat freely in encrypted local chats.",
      },
      { property: "og:title", content: "How Inyeon AI Works" },
      {
        property: "og:description",
        content:
          "Know yourself, set your mood, meet a seven-day match, chat privately. Four steps, no pressure.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How it works"
        title="Simple. Intentional."
        italic="Yours."
        lead="Four steps from knowing yourself to a conversation that actually belongs to you."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <ol className="space-y-px">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="grid gap-4 border-t border-border/60 py-8 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline md:gap-10"
            >
              <span className="font-display text-3xl text-thread">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl">{s.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <FinalCta />
    </SiteShell>
  );
}
