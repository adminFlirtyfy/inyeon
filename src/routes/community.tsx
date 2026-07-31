import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta } from "@/components/site-chrome";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "The Inyeon AI Community — Connection Before Coincidence" },
      {
        name: "description",
        content:
          "Meet the people behind the thread: an AI dating community built on mood, intent and personality, where conversations are private and connection is never rushed.",
      },
      { property: "og:title", content: "The Inyeon AI Community" },
      {
        property: "og:description",
        content:
          "A community that values intention over impressions — mood-matched, privacy-first, and completely free.",
      },
    ],
  }),
  component: CommunityPage,
});

const values = [
  {
    title: "Intention over impressions",
    body: "People here tell the app how they are feeling and what they are looking for. Matches begin from a shared headspace, not a photo grid.",
  },
  {
    title: "Self-knowledge first",
    body: "Big Five, love languages and attachment style tests are free and built in. The community starts from people who understand themselves.",
  },
  {
    title: "Conversations that stay private",
    body: "Chats are encrypted on your device. Nothing here is harvested, resold, or read by us — the conversation belongs to the two of you.",
  },
  {
    title: "Seven days, no pressure",
    body: "Every match lasts seven days. Long enough to be real, short enough that nobody is left waiting in a forgotten inbox.",
  },
];

function CommunityPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Community"
        title="A thread, not"
        italic="a feed."
        lead="Inyeon AI is a community of people who would rather meet one person who fits than scroll past a thousand who do not."
      />

      <section className="border-b border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[auto_1fr] md:items-center md:gap-20 md:py-28">
          <p className="font-korean text-7xl leading-none text-thread md:text-8xl">인연</p>
          <p className="font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">
            In Korean philosophy, inyeon is the belief that every meaningful connection
            carries a bond shaped long before the moment you meet. Our community is
            built to honour that depth — not to replace it with a swipe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow">What we hold to</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          Four shared <span className="italic text-muted-foreground">agreements.</span>
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2">
          {values.map((v) => (
            <article
              key={v.title}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="thread-rule w-10 opacity-70 transition-all group-hover:w-20" />
              <h3 className="mt-6 font-display text-2xl leading-snug">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteShell>
  );
}
