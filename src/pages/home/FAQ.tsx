/* ============================================================
   WOLFOOD — FAQ accordion
   Cream band. Single-open accordion; answers animate open with a
   grid-rows trick (no height measuring). On-brand.
   ============================================================ */

import { useState } from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I place an order?",
    a: "Set your delivery address, browse the kitchens near you, add items to your cart and check out. You'll get a live estimate and can track your rider the whole way.",
  },
  {
    q: "How much does delivery cost?",
    a: "Delivery fees depend on how far you are from the kitchen, and the exact amount is always shown before you pay — no surprises at checkout.",
  },
  {
    q: "What payment methods can I use?",
    a: "Pay with debit card, bank transfer, USSD, or top up your Wolfood wallet for one-tap checkout. Cash on delivery is available in selected areas.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders arrive in under 30 minutes, depending on the kitchen's prep time and traffic. You'll always see a live estimate and can follow your rider on the map.",
  },
  {
    q: "How do I list my restaurant?",
    a: "Tap “Become a partner”, fill in a short form, and our team will get you set up — usually within 48 hours, with a simple dashboard for orders and payouts.",
  },
  {
    q: "What if something's wrong with my order?",
    a: "Reach our in-app support any time and we'll make it right — a refund, a replacement or wallet credit. Every order is covered from the kitchen to your door.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* heading */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Questions? <span className="text-wolf-orange">We&apos;ve got answers</span>
          </h2>
        </div>

        {/* accordion */}
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-wolf-green">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-wolf-cream text-wolf-green transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-wolf-orange text-wolf-green-dark" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-wolf-green/70">{f.a}</p>
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
