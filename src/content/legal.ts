export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const LAST_UPDATED = "April 7, 2026";
export const SUPPORT_EMAIL = "support@inyeonai.com";

export const privacySections: LegalSection[] = [
  {
    heading: "1. Who We Are",
    paragraphs: [
      'Inyeon AI ("we," "our," or "us") operates a privacy-first AI dating and connection platform available at inyeonai.com and on Android. We are built around the Korean philosophical concept of inyeon — the belief that meaningful connections are deeper than an algorithm. Your data reflects that same belief: your personal life is yours, not ours to monetise.',
    ],
  },
  {
    heading: "2. Information We Collect",
    paragraphs: ["We collect only what is necessary to make Inyeon AI work for you. This includes:"],
    bullets: [
      "Account Information: Your name, email address, phone number, age, and gender when you register",
      "Profile Information: Photos, biographical details, dating preferences, and any information you choose to share on your profile",
      "Psychology Assessment Results: Your responses to personality tests such as the Big Five, love languages, and attachment style — used solely to improve your matches",
      "Mood & Intent Data: Your mood selections and intent settings at the time of matching — used by the AI to find compatible connections",
      "Location Data: Your approximate location, only if you grant permission, used only for proximity-based matching",
      "Device Information: Basic device type and operating system version for technical support and app optimisation",
      "Usage Data: How you interact with the app — features used, time spent — to improve the product. This data is anonymised and never tied to your identity for advertising purposes",
    ],
  },
  {
    heading: "3. Your Messages — Stored on Your Device, Not Ours",
    paragraphs: [
      "This is the most important section of this policy. Your chat messages are stored locally on your device, fully encrypted — the same way WhatsApp stores your conversations. Your messages never pass through or live on Inyeon AI servers. We cannot read them. We do not have access to them. No employee of Inyeon AI can ever view your private conversations.",
      "You can securely back up your chats to Google Drive at any time and restore them on a new device. Your backup is encrypted with your account credentials — only you can access it. If you delete the app or clear your data without a backup, your messages are gone permanently. We recommend backing up regularly if your conversations matter to you.",
    ],
  },
  {
    heading: "4. How We Use Your Information",
    paragraphs: ["We use your data for one purpose: to make Inyeon AI work better for you. Specifically:"],
    bullets: [
      "To create and manage your profile and account",
      "To power the AI matching system — matching you based on personality, mood, and intent",
      "To personalise your experience and improve match quality over time",
      "To send you important app notifications and updates",
      "To detect and prevent fraud, abuse, and safety violations",
      "To comply with legal obligations where required",
    ],
  },
  {
    heading: "5. When We Share Your Information",
    paragraphs: [
      "We do not use your data to serve you advertisements. We do not build advertising profiles. We do not sell, rent, or trade your personal data. We share information only in the following limited circumstances:",
    ],
    bullets: [
      "With other users: Only the profile information you choose to make visible — your name, photos, bio, and preferences",
      "Service providers: Trusted third-party providers who help us operate the app (such as cloud infrastructure and analytics), bound by strict confidentiality agreements",
      "Legal requirements: When required by law, court order, or to protect the safety of our users or the public",
      "Child safety reports: Incidents involving CSAE are reported to NCMEC and relevant law enforcement without exception",
    ],
  },
  {
    heading: "6. How We Protect Your Data",
    bullets: [
      "All messages are end-to-end encrypted and stored locally on your device",
      "Account data in transit is protected using industry-standard TLS encryption",
      "Sensitive data at rest is encrypted using AES-256",
      "We conduct regular security audits and vulnerability assessments",
      "Access to user data within our systems is strictly limited and logged",
      "Google Drive backups are encrypted with your personal credentials",
    ],
  },
  {
    heading: "7. Privacy Modes & Controls",
    paragraphs: [
      "Inyeon AI gives you active control over your privacy — not just passive promises. These controls are available to every user at no cost:",
    ],
    bullets: [
      "Incognito Mode: Your profile is hidden from users you have not matched with",
      "Read Receipts: You can disable read receipts so others do not know when you have read their messages",
      "Typing Indicators: You can turn off typing indicators at any time",
      "Delete for Everyone: Delete any message from both sides of a conversation instantly",
      "Edit Messages: Edit any message you have sent at any time",
      "Account Deletion: Permanently delete your account and all associated data from within app settings",
    ],
  },
  {
    heading: "8. Your Rights Over Your Data",
    paragraphs: ["You have full rights over your personal data at all times:"],
    bullets: [
      "Access: Request a copy of the data we hold about you",
      "Correction: Update or correct your personal information at any time within the app",
      "Deletion: Delete your account and all associated data permanently through app settings",
      "Portability: Export your data in a readable format upon request",
      "Objection: Object to how we use your data by contacting us at support@inyeonai.com",
    ],
  },
  {
    heading: "9. Data Retention",
    paragraphs: [
      "We retain your account data only for as long as your account is active. When you delete your account, your profile, photos, preferences, and personality test results are permanently deleted within 30 days. Your messages are stored on your device and are deleted immediately when you remove the app or clear app data — we hold no copies. Some anonymised, non-identifiable usage data may be retained for product improvement purposes.",
    ],
  },
  {
    heading: "10. Children's Privacy",
    paragraphs: [
      "Inyeon AI is strictly for users aged 18 and above. We do not knowingly collect data from anyone under 18. If we discover that a minor has created an account, it is immediately deleted. If you believe a minor is using the app, please report it to support@inyeonai.com immediately.",
    ],
  },
  {
    heading: "11. Child Safety & Zero Tolerance Policy",
    paragraphs: [
      "Inyeon AI maintains an absolute zero-tolerance policy toward Child Sexual Abuse and Exploitation (CSAE) in any form.",
    ],
    bullets: [
      "Strict Prohibition: Any CSAE content or behaviour results in immediate permanent ban",
      "Immediate Removal: All offending content is removed without delay",
      "Reported to Authorities: All incidents are reported to NCMEC and relevant law enforcement",
      "Dedicated Reporting: Report safety concerns directly to support@inyeonai.com",
    ],
  },
  {
    heading: "12. Governing Law",
    paragraphs: [
      "This Privacy Policy is governed by the laws of India. By using Inyeon AI, you consent to the collection and use of your information as described in this policy under Indian jurisdiction.",
    ],
  },
  {
    heading: "13. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app or by email. The "Last Updated" date at the top of this page reflects the most recent revision. Continued use of Inyeon AI after changes are posted constitutes your acceptance of the updated policy.',
    ],
  },
  {
    heading: "14. Contact Us",
    paragraphs: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us at support@inyeonai.com. We take every inquiry seriously and will respond within 48 hours.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "1. Agreement to Terms",
    paragraphs: [
      "By accessing or using Inyeon AI — including the mobile application, website at inyeonai.com, and any related services — you confirm that you have read, understood, and agree to these Terms & Conditions. These terms form a legally binding agreement between you and Inyeon AI. We may update these terms from time to time and will notify you of significant changes through the app or website.",
    ],
  },
  {
    heading: "2. Eligibility",
    paragraphs: [
      "You must be at least 18 years of age to create an account or use Inyeon AI. By using the app, you confirm that you are 18 or older and that all information you provide during registration is accurate, honest, and your own. Inyeon AI reserves the right to suspend or permanently ban any account found to belong to a minor.",
    ],
  },
  {
    heading: "3. Your Account",
    paragraphs: [
      "You are responsible for maintaining the security of your account and for all activity that occurs under it. Do not share your login credentials with anyone. Use a strong, unique password. If you suspect unauthorised access to your account, contact us immediately at support@inyeonai.com. Inyeon AI is not liable for any loss or damage arising from your failure to protect your account credentials.",
    ],
  },
  {
    heading: "4. How Inyeon AI Works",
    paragraphs: [
      "Inyeon AI is an AI-powered dating and connection platform. We use personality assessments, mood-based inputs, and behavioural signals to suggest compatible matches. Matches remain active for seven days. We do not guarantee that any match will result in a relationship, and we are not responsible for the actions or behaviour of other users. The AI is a tool to help you find connection — the rest is up to you.",
    ],
  },
  {
    heading: "5. Privacy & Your Data",
    paragraphs: [
      "Your privacy is not a feature — it is the foundation. Your chats are stored locally on your device and encrypted. Inyeon AI does not store your messages on our servers. You can back up your chats securely to Google Drive and restore them at any time. You own your data. We do not sell it, share it with advertisers, or use it for purposes beyond improving your experience on the platform. For full details, please read our Privacy Policy.",
    ],
  },
  {
    heading: "6. Prohibited Conduct",
    paragraphs: ["To protect all users, the following are strictly prohibited on Inyeon AI:"],
    bullets: [
      "Harassment, abuse, threats, or intimidation of any user",
      "Sharing explicit, sexual, or graphic content without consent",
      "Impersonating another person or creating a fake profile",
      "Soliciting money, gifts, or financial information from other users",
      "Using the app to promote commercial services, spam, or advertising",
      "Attempting to access another user's account or private data",
      "Any conduct that violates applicable laws or regulations",
      "Sharing another user's private information without their consent",
    ],
  },
  {
    heading: "7. Child Safety — Zero Tolerance",
    paragraphs: [
      "Inyeon AI has an absolute zero-tolerance policy toward any content or behaviour involving the sexual exploitation or abuse of minors (CSAE). Any such content is immediately removed. The responsible account is permanently banned. All incidents are reported to NCMEC and relevant law enforcement without exception. If you encounter any such content, report it immediately to support@inyeonai.com.",
      "Violations of these terms will result in immediate account suspension or permanent ban. Serious violations will be reported to relevant authorities.",
    ],
  },
  {
    heading: "8. Message Control & Deletion",
    paragraphs: [
      "Inyeon AI gives you full control over your conversations. You may delete any message for everyone in a conversation at any time. You may also edit messages you have already sent. Because messages are stored locally on each user's device, deletion requests are processed immediately within the app. Inyeon AI is not responsible for any copies of messages that a recipient may have saved outside the app before deletion.",
    ],
  },
  {
    heading: "9. Psychology Tests & AI Features",
    paragraphs: [
      "The personality assessments available in Inyeon AI — including the Big Five model, love languages, and attachment style tests — are provided for informational and matching purposes only. They are not clinical diagnostic tools and should not be treated as professional psychological advice. The AI matching system uses your results to improve compatibility suggestions, but does not guarantee any outcome. Always use your own judgment when meeting new people.",
    ],
  },
  {
    heading: "10. Account Suspension & Termination",
    paragraphs: [
      "We reserve the right to suspend or permanently terminate any account that violates these terms, engages in harmful behaviour, or poses a risk to other users or the platform. You may delete your own account at any time through the app settings. Upon deletion, your profile, photos, and personal data are permanently removed. Some data may be retained for up to 30 days for legal or security reasons before being fully purged.",
    ],
  },
  {
    heading: "11. Disclaimers & Limitation of Liability",
    paragraphs: [
      'Inyeon AI is provided on an "as is" basis. We do not guarantee uninterrupted availability of the service. We are not responsible for the accuracy of user-provided information, the behaviour of other users, or any outcome resulting from connections made through the app. To the maximum extent permitted by law, Inyeon AI\'s liability for any claim arising from use of the service is limited to the amount you paid to use the service in the three months prior to the claim — which for most users is zero, as the app is free.',
    ],
  },
  {
    heading: "12. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India. Any disputes arising from or relating to these Terms or your use of Inyeon AI shall be subject to the exclusive jurisdiction of the courts located in India. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
    ],
  },
  {
    heading: "13. Contact Us",
    paragraphs: [
      "If you have any questions about these Terms & Conditions, contact us at support@inyeonai.com. We respond within 48 hours.",
    ],
  },
];

export const accountSections: LegalSection[] = [
  {
    heading: "1. Managing Your Account",
    paragraphs: [
      "You have full control over your account and personal data at all times. Every setting, every preference, every piece of information you shared — you can update or remove it whenever you choose, directly from within the app. No need to contact support for routine changes.",
    ],
  },
  {
    heading: "2. Update Your Profile & Preferences",
    paragraphs: ["You can update any of the following at any time from the app settings:"],
    bullets: [
      "Your name, age, and bio",
      "Profile photos and display picture",
      "Dating preferences and relationship intent",
      "Personality test results — retake any assessment whenever you feel you have grown",
      "Privacy settings including incognito mode, read receipts, and typing indicators",
      "Notification preferences",
      "Google Drive backup settings for your encrypted chat history",
    ],
  },
  {
    heading: "3. Your Data — Stored on Your Device",
    paragraphs: [
      "Unlike most apps, Inyeon AI stores your chat messages locally on your device, fully encrypted. We do not hold copies of your conversations on our servers. You own them completely. You can back up your chats securely to Google Drive at any time and restore them on a new device. Your backup is encrypted with your credentials — only you can access it.",
    ],
  },
  {
    heading: "4. Message Control",
    paragraphs: ["Inyeon AI gives you full control over every conversation you have:"],
    bullets: [
      "Delete for Everyone: Remove any message from both sides of a conversation instantly — a feature no other dating app currently offers",
      "Edit Messages: Correct or update any message you have already sent at any time",
      "Clear Chat: Clear an entire conversation locally from your device at any time",
    ],
  },
  {
    heading: "5. Delete Your Account",
    paragraphs: [
      "You may permanently delete your account at any time. No waiting period, no retention tactics, no dark patterns. Open the Inyeon AI app, go to Settings, select Account, tap Delete Account, and confirm your choice.",
      "Account deletion is permanent and cannot be undone. If you think you may return, consider deactivating your profile instead — this hides you from the app without deleting your data.",
    ],
    bullets: [
      "Your profile, photos, bio, and personal information are permanently removed",
      "All your matches and conversations are deleted",
      "Your personality test results and AI preference data are erased",
      "You will no longer appear in anyone's matches or search results",
      "Some anonymised data may be retained for up to 30 days for legal or security reasons before being fully purged",
    ],
  },
  {
    heading: "6. Deactivate Instead of Delete",
    paragraphs: [
      "If you need a break from Inyeon AI but are not ready to leave permanently, you can deactivate your account. While deactivated your profile is hidden from all users, you will not appear in any matches, and no one can contact you. Your data is preserved. You can reactivate at any time simply by logging back in.",
    ],
  },
  {
    heading: "7. Need Help?",
    paragraphs: [
      "If you experience any issues managing or deleting your account, our support team is here to help. We respond within 48 hours. Email: support@inyeonai.com",
    ],
  },
  {
    heading: "8. Open Source Attributions",
    paragraphs: [
      "Inyeon AI is built on the shoulders of the open source community. We are grateful for the libraries and tools that make this app possible. The full list of open source libraries and data attributions used in the Android build is available on request.",
    ],
  },
];

export const supportTopics = [
  "Account & Profile",
  "Matching & AI",
  "Chat & Messages",
  "Privacy & Data",
  "Bug Report",
  "Safety & Trust",
  "Other",
];
