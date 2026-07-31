import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta, LegalBody } from "@/components/site-chrome";
import { termsSections, LAST_UPDATED } from "@/content/legal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Inyeon AI" },
      {
        name: "description",
        content:
          "Read the Inyeon AI Terms & Conditions: eligibility, account responsibilities, prohibited conduct, child safety, message control and limitation of liability.",
      },
      { property: "og:title", content: "Inyeon AI Terms & Conditions" },
      {
        property: "og:description",
        content:
          "The legally binding terms for using Inyeon AI — eligibility, conduct, safety and liability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Terms & conditions"
        title="The agreement"
        italic="between us."
        lead="Please read these terms carefully before using Inyeon AI. By downloading or using the app, you agree to be bound by these terms. If you do not agree, please do not use the service."
      />
      <LegalBody lastUpdated={LAST_UPDATED} sections={termsSections} />
      <FinalCta />
    </SiteShell>
  );
}
