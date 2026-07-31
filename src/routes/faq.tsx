import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta } from "@/components/site-chrome";
import { faqs } from "@/content/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Inyeon AI FAQ — Is It Free? How Does the AI Match You?" },
      {
        name: "description",
        content:
          "Answers about Inyeon AI: what inyeon means, why the app is completely free, how the AI matches on mood and personality, free psychology tests and 7-day matches.",
      },
      { property: "og:title", content: "Inyeon AI FAQ" },
      {
        property: "og:description",
        content:
          "Quick answers about pricing, AI matching, free psychology tests, private chat and seven-day matches.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Quick answers —"
        italic="no fine print."
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f) => (
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
      </section>
      <FinalCta />
    </SiteShell>
  );
}
