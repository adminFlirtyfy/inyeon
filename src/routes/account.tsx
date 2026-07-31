import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FinalCta, LegalBody } from "@/components/site-chrome";
import { accountSections, LAST_UPDATED } from "@/content/legal";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account & Data Management | Inyeon AI" },
      {
        name: "description",
        content:
          "Update your profile, manage your encrypted chat backups, deactivate or permanently delete your Inyeon AI account — all from inside the app, no support ticket needed.",
      },
      { property: "og:title", content: "Inyeon AI Account Management" },
      {
        property: "og:description",
        content:
          "Your account, your data, your decisions — update, deactivate or delete at any time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Account management"
        title="Your account,"
        italic="your decisions."
        lead="Inyeon AI is built around one principle — you are in control. Here is everything you need to know about managing your presence on Inyeon AI."
      />
      <LegalBody lastUpdated={LAST_UPDATED} sections={accountSections} />
      <FinalCta />
    </SiteShell>
  );
}
