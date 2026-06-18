import { useSeo } from "../../lib/seo";
import LegalLayout, { Lead } from "./LegalLayout";

const COOKIES: { type: string; usage: string }[] = [
  {
    type: "Authentication",
    usage:
      "If you are signed in to Konnect, cookies help us show you the right information and personalise your experience.",
  },
  {
    type: "Security",
    usage:
      "We use cookies to enable and support our security features, and to help us detect malicious activity and violations of our User Agreement.",
  },
  {
    type: "Preferences & features",
    usage:
      "Cookies tell us which language you prefer and what your communication preferences are, help you fill out forms more easily, and power features, insights and customised content.",
  },
  {
    type: "Advertising",
    usage:
      "We may use cookies to show you relevant advertising on and off Konnect. Our partners may use cookies to measure whether and how an ad performed.",
  },
  {
    type: "Performance & analytics",
    usage:
      "Cookies help us learn how well our site and plugins perform in different locations, and help us understand, improve and research our products, features and services across your devices.",
  },
];

export function PrivacyPage() {
  useSeo({
    title: "Privacy Policy",
    description:
      "How Konnect (Consukon Limited) collects, uses and protects your personal information, including your privacy rights and our use of cookies.",
    path: "/privacy",
  });
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="June 2026"
      intro={
        <>
          <p>
            This Privacy Policy describes your privacy rights regarding how and when we collect,
            use, store, share and protect your information across our website, APIs, applications,
            email notifications and tools — regardless of how you use or access them. Notwithstanding
            which country you live in, when using any of our services you consent to the collection,
            transfer, storage, disclosure, and use of your information in Nigeria and any other
            country we operate in, as described in this policy. This includes any information you
            choose to provide that is deemed sensitive under applicable law.
          </p>
          <p>
            We respect the privacy of our online visitors and registered users, and we take
            reasonable steps to protect your information. It is our policy to respect your privacy
            regarding any information we may collect while operating our website. Accordingly, we
            have developed this policy for you to understand how we collect, use, communicate,
            disclose, and otherwise make use of personal information.
          </p>
        </>
      }
      sections={[
        {
          heading: "Personal information",
          body: (
            <>
              <p>
                Upon registration, we collect personal information which you voluntarily provide by
                lawful means. We collect and use personal information solely for fulfilling the
                purposes specified by us and for other ancillary purposes.
              </p>
              <p>
                This refers to the personal information you submit when you register (e.g., email
                address, company name, password, bank account number, etc.). It may also include
                anonymous information that is linked to you, for example your IP address. It should
                be relevant to the purposes for which it is to be used and, to the extent necessary,
                should be accurate, complete, and up to date.
              </p>
              <p>The following lists what we use your personal information for. These may be updated from time to time:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Provide you with access to our service</li>
                <li>Verify the information provided</li>
                <li>Prevent, detect and manage any illegal and fraudulent activity</li>
                <li>Improve our services to you</li>
                <li>Address any inappropriate use of our services</li>
                <li>Update our website layout, database, and content</li>
                <li>Target advertisements, newsletters, and service updates</li>
                <li>Resolve disputes that may occur</li>
              </ul>
              <p>
                Additional personal information may be obtained from third-party applications and
                other identification/verification services — for example, from your financial
                institution. Once you begin to use our services, we keep records of your
                transactions, and we will not share or disclose your personal information with a
                third party without your consent.
              </p>
            </>
          ),
        },
        {
          heading: "Protecting your information",
          body: (
            <p>
              We protect your personal information using global security safeguards against loss or
              theft, as well as against any unauthorised access, risk of loss, disclosure, copying,
              misuse, or modification. Other security measures include, but are not limited to,
              firewalls, data encryption, and granting access only to employees who need it to fulfil
              their job responsibilities.
            </p>
          ),
        },
        {
          heading: "How we use cookies",
          body: (
            <>
              <p>
                We use cookies and similar technologies to help us recognise you, improve your
                experience, increase security, and measure the use and effectiveness of our
                services. You can control cookies through your browser settings, but limiting
                cookies may affect your experience.
              </p>
              <div className="divide-y divide-black/[0.06] overflow-hidden rounded-2xl bg-wolf-cream ring-1 ring-black/5">
                {COOKIES.map((c) => (
                  <div key={c.type} className="grid gap-1 p-4 sm:grid-cols-[180px_1fr] sm:gap-4">
                    <div className="font-semibold text-wolf-green/80">{c.type}</div>
                    <div>{c.usage}</div>
                  </div>
                ))}
              </div>
              <p>
                <Lead>Controlling cookies.</Lead> Most browsers allow you to control cookies through
                their settings. However, if you limit the ability of websites to set cookies, you may
                worsen your overall experience, since it will no longer be personalised to you. It
                may also stop you from saving customised settings like login information.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
