import { Link } from "react-router-dom";
import { useSeo } from "../../lib/seo";
import LegalLayout, { Lead } from "./LegalLayout";

export function TermsPage() {
  useSeo({
    title: "Terms of Service",
    description:
      "The terms governing your use of Konnect's services, operated by Consukon Limited — including electronic communications, acceptable use, governing law and dispute resolution.",
    path: "/terms",
  });
  return (
    <LegalLayout
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
