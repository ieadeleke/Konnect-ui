import { FaQuoteLeft } from "react-icons/fa6";

export default function Testimonial() {
  return (
    <section className="bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FaQuoteLeft className="mx-auto h-12 w-12 text-wolf-orange md:h-14 md:w-14" aria-hidden="true" />
        <blockquote className="mt-4 font-display text-2xl leading-snug tracking-tight text-wolf-green md:text-3xl">
          Since joining Konnect, our weekend orders have nearly doubled. The dashboard is
          dead simple and payouts always land on time — it just works.
        </blockquote>
        <div className="mt-6">
          <div className="font-semibold text-wolf-green">Amaka Obi</div>
          <div className="text-sm text-wolf-green/60">Owner, Mama&apos;s Kitchen · Lagos</div>
        </div>
      </div>
    </section>
  );
}
