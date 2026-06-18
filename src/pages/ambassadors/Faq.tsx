import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FAQS: { q: string; a: string }[] = [
  { q: "How and when do I get paid?", a: "Ambassadors are paid weekly, straight to your bank account or Konnect wallet, for every verified referral." },
  { q: "Do I have to be a student?", a: "Not at all. Students, creators, graduates, NYSC members — anyone with a network can apply." },
  { q: "Is there a fee to join?", a: "No. Joining the ambassador programme is completely free, and always will be." },
  { q: "How much can I earn?", a: "There's no cap. Your earnings grow with every referral and climb as you level up the tiers." },
  { q: "Can I do this alongside school or NYSC?", a: "Yes — it's fully flexible. Share whenever it suits you, with no minimum hours or quotas." },
  { q: "Does it help my career?", a: "Top ambassadors unlock internships, leadership roles and references that look great on any CV." },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>(FAQS[0].q);
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">FAQ</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Questions? <span className="text-wolf-orange">We&apos;ve got answers</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f) => {
            const isOpen = open === f.q;
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
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                >
                  <span className="font-semibold text-wolf-green">{f.q}</span>
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
                    <p className="px-5 pb-5 leading-relaxed text-wolf-green/70 md:px-6 md:pb-6">{f.a}</p>
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
