/* ============================================================
   KONNECT — Legal pages (Privacy Policy & Terms of Service)
   Shared dark hero + readable prose body.
   ============================================================ */

import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Section = { heading: string; body: ReactNode };

function Lead({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-wolf-green/80">{children}</span>;
}

function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  sections: Section[];
}) {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-wolf-green pt-32 pb-16 text-center md:pt-40 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(55% 55% at 50% 0%, rgba(11,122,82,0.18), transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-wolf-cream/60">Last updated: {updated}</p>
        </div>
      </section>

      {/* body */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4 text-base leading-relaxed text-wolf-green/70">{intro}</div>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl tracking-tight text-wolf-green md:text-2xl">
                  <span className="text-wolf-orange">{String(i + 1).padStart(2, "0")}.</span> {s.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-wolf-green/60">{s.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-wolf-cream p-6 ring-1 ring-black/5">
            <p className="text-sm text-wolf-green/70">
              Questions about this {title.toLowerCase()}? Reach us at{" "}
              <a href="mailto:hello@konnectbd.com" className="font-semibold text-wolf-green underline-offset-2 hover:underline">
                hello@konnectbd.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

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
  return (
    <LegalPage
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

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      updated="June 2026"
      intro={
        <>
          <div className="rounded-2xl border-l-4 border-wolf-orange bg-wolf-cream p-5 text-sm font-semibold uppercase tracking-wide text-wolf-green/80">
            Please note that your use of and access to the Services (as defined below) are subject
            to the following terms; if you do not agree to all of these terms, you may not use or
            access the Services in any manner.
          </div>
          <p>
            These Terms of Use (these “Terms”) represent an agreement between you and Consukon
            Limited and contain the terms and conditions governing your use of and access to
            Konnect and all affiliated websites owned and operated by us (collectively, the
            “Website”) and our products, services, and applications (together with the Website, the
            “Services”). “You” and “your” mean the person who uses or accesses the Services. “We,”
            “us,” and “our” mean Konnect and its successors, affiliates, and assignees. As used in
            these Terms, “Konnect Account” means the accounts (wallet and Konnect balance) you have
            with us for the Services.
          </p>
        </>
      }
      sections={[
        {
          heading: "Your consent to electronic signatures & communications",
          body: (
            <>
              <p>
                <Lead>Your consent.</Lead> To the extent permitted by applicable law, you consent
                to use electronic signatures and to electronically receive all records, notices,
                statements, communications, and other items for all services provided to you under
                these Terms and in connection with your relationship with us (collectively,
                “Communications”) that we may otherwise be required to send or provide you in
                electronic form (e.g., by mail). By accepting and agreeing to these Terms
                electronically, you represent that: (1) you have read and understand this consent to
                use electronic signatures and to receive Communications electronically; (2) you
                satisfy the minimum hardware and software requirements; and (3) your consent will
                remain in effect until you close your account.
              </p>
              <p>
                You must keep your contact information current with us to ensure that we are able to
                provide Communications to you electronically. You must notify us of any change in
                your email address and your mobile device number or other text message address by
                updating your profile on the Website.
              </p>
              <p>
                <Lead>Changes.</Lead> We reserve the right, in our sole discretion, to communicate
                with you in electronic form, and to discontinue the provision of electronic
                Communications or to terminate or change the terms and conditions on which we
                provide them. Except as otherwise required by applicable law, we will notify you of
                any such termination or change by updating these Terms on the Website or delivering
                notice electronically.
              </p>
              <p>
                The information you provide us is subject to our{" "}
                <Link to="/privacy" className="font-semibold text-wolf-green underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How do I use the Services?",
          body: (
            <>
              <p>The purpose of the Services is to help you shop with ease and to help grow your cash.</p>
              <p>
                You can use funds in your Konnect accounts to make purchases, withdraw cash,
                transfer funds to third parties, or for any other purpose. You are solely
                responsible for determining whether the funds debited from your Konnect account are
                secure and acceptable to you. We are not responsible for any third-party fees that
                may be incurred because of using the Services, including, but not limited to,
                third-party fees incurred because of maintaining insufficient funds in your bank
                account.
              </p>
              <p>
                Konnect is not a financial tool, nor a get-rich-quick or investment app, and the
                Services are not intended to provide financial advice. We do not make any
                representations, warranties, or guarantees of any kind that the Services are
                appropriate for you. Before using the Services, you should consider obtaining
                additional information and advice from a financial adviser.
              </p>
            </>
          ),
        },
        {
          heading: "Third-party beneficiary, governing law, dispute resolution & miscellaneous",
          body: (
            <>
              <p>
                <Lead>Third-party beneficiary.</Lead> You agree that our third-party services
                providers are third-party beneficiaries of the applicable provisions of these Terms,
                with all rights to enforce such provisions as if such service providers were a party
                to these Terms.
              </p>
              <p>
                <Lead>Governing law.</Lead> These Terms are made under and will be governed by and
                construed in accordance with the laws of the Federal Republic of Nigeria, without
                giving effect to any principles that provide for the application of the law of
                another jurisdiction.
              </p>
              <p>
                <Lead>Dispute resolution by binding arbitration; jury-trial waiver; class-action
                waiver.</Lead> For any and all controversies, disputes, demands, claims, or causes of
                action between you and us (including the interpretation and scope of this section and
                the arbitrability of the dispute) relating to the Services or these Terms (as well as
                any related or prior agreement that you may have had with us), you and we agree to
                resolve any such matter exclusively through binding and confidential arbitration. As
                used in this section, “we” and “us” mean Consukon Limited and its subsidiaries,
                affiliates, predecessors, successors, and assigns, and all of their respective
                employees, officers, directors, agents, and representatives, as well as any third
                party providing any product, service, or benefit in connection with the Services if
                named as a co-party.
              </p>
              <p>
                Arbitration will be conducted by commercial arbitrators from the Nigeria Arbitration
                and Conciliation Act with substantial experience in resolving commercial contract
                disputes. As modified by these Terms, and unless otherwise agreed upon by the parties
                in writing, the arbitration will be governed by the Nigeria Arbitration and
                Conciliation Act’s Commercial Arbitration Rules and, if the arbitrator deems them
                applicable, the Supplementary Procedures for Consumer-Related Disputes (collectively,
                the “Rules and Procedures”).
              </p>
              <p>
                <Lead>Miscellaneous.</Lead> You will be responsible for paying, withholding, filing,
                and reporting all taxes, duties, and other governmental assessments associated with
                your activity in connection with the Services. The failure of either you or us to
                exercise, in any way, any right herein will not be deemed a waiver of any further
                rights hereunder. If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the minimum extent
                necessary, so that these Terms will otherwise remain in full force and effect. These
                Terms, together with our Privacy Policy, constitute the entire and sole agreement
                between you and us with respect to the Services and supersede all prior
                understandings, arrangements, or agreements, whether written or oral. You acknowledge
                and agree that you are not an employee, agent, partner, or joint venturer of Konnect,
                and you do not have any authority to bind us in any respect whatsoever.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
