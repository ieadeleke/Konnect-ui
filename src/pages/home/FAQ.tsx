/* ============================================================
   KONNECT — FAQ accordion
   Cream band. Category pill tabs filter the questions; the answers
   live in a single divided white panel (one row per question), with
   the open row gently tinted. Answers animate open with a grid-rows
   trick (no height measuring).
   ============================================================ */

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

type Category = "Ordering" | "Delivery" | "Payments" | "Partners";

const FAQS: { q: string; a: string; cat: Category }[] = [
  {
    q: "How do I place an order?",
    a: "Set your delivery address, browse the kitchens near you, add items to your cart and check out. You'll get a live estimate and can track your rider the whole way.",
    cat: "Ordering",
  },
  {
    q: "Can I schedule an order for later?",
    a: "Yes — at checkout, pick a time that suits you and we'll have your order prepared and dispatched so it lands right when you want it.",
    cat: "Ordering",
  },
  {
    q: "What if something's wrong with my order?",
    a: "Reach our in-app support any time and we'll make it right — a refund, a replacement or wallet credit. Every order is covered from the kitchen to your door.",
    cat: "Ordering",
  },
  {
    q: "How much does delivery cost?",
    a: "Delivery fees depend on how far you are from the kitchen, and the exact amount is always shown before you pay — no surprises at checkout.",
    cat: "Delivery",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders arrive in under 30 minutes, depending on the kitchen's prep time and traffic. You'll always see a live estimate and can follow your rider on the map.",
    cat: "Delivery",
  },
  {
    q: "Can I track my rider in real time?",
    a: "Once a rider picks up your order, a live map shows exactly where they are, so you know precisely when to expect your food at the door.",
    cat: "Delivery",
  },
  {
    q: "What payment methods can I use?",
    a: "Pay with debit card, bank transfer, USSD, or top up your Konnect wallet for one-tap checkout. Cash on delivery is available in selected areas.",
    cat: "Payments",
  },
  {
    q: "Is paying on Konnect secure?",
    a: "Every payment is encrypted and processed by trusted, PCI-compliant providers. We never store your full card details on our servers.",
    cat: "Payments",
  },
  {
    q: "Can I pay with my Konnect wallet?",
    a: "Yes. Top up your wallet once and check out in a single tap. Refunds and credits land back in your wallet instantly, ready for your next order.",
    cat: "Payments",
  },
  {
    q: "How do I list my restaurant?",
    a: "Tap “Become a partner”, fill in a short form, and our team will get you set up — usually within 48 hours, with a simple dashboard for orders and payouts.",
    cat: "Partners",
  },
  {
    q: "How do I sign up as a rider?",
    a: "Hit “Start riding”, share a few details and your documents, and once you're verified you can hit the road and start earning on your own schedule.",
    cat: "Partners",
  },
  {
    q: "When and how do partners get paid?",
    a: "Restaurants and riders are paid out weekly, straight to your bank account, with every transaction itemised clearly in your dashboard.",
    cat: "Partners",
  },
];

const TABS = ["Ordering", "Delivery", "Payments", "Partners"] as const;
type Tab = (typeof TABS)[number];

export default function FAQ() {
  const [tab, setTab] = useState<Tab>("Ordering");
  const [open, setOpen] = useState<string | null>(FAQS[0].q);

  const visible = FAQS.filter((f) => f.cat === tab);

  const handleTab = (t: Tab) => {
    setTab(t);
    const first = FAQS.find((f) => f.cat === t);
    setOpen(first ? first.q : null);
  };

  return (
    <section className="bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* heading */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Questions? <span className="text-wolf-orange">We&apos;ve got answers</span>
          </h2>
        </div>

        {/* category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => handleTab(t)}
                aria-pressed={active}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-wolf-green text-wolf-cream"
                    : "bg-white text-wolf-green/70 ring-1 ring-black/5 hover:text-wolf-green"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* accordion — spaced cards, each with an index number */}
        <div className="mt-8 space-y-3">
          {visible.map((f, i) => {
            const isOpen = open === f.q;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl bg-white ring-1 transition-colors duration-300 ${
                  isOpen ? "ring-wolf-orange/30" : "ring-black/5 hover:ring-wolf-green/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                >
                  <span className="w-6 shrink-0 font-display text-sm font-bold tabular-nums text-wolf-orange">
                    {num}
                  </span>
                  <span className="flex-1 text-[1.02rem] font-semibold text-wolf-green">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-wolf-cream text-wolf-green transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-wolf-orange text-white" : ""
                    }`}
                  >
                    <FiPlus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pl-[3.75rem] pr-5 leading-relaxed text-wolf-green/70 md:pb-6 md:pl-16 md:pr-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
