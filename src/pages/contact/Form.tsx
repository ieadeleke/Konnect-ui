import { useState } from "react";
import { FiCheck } from "react-icons/fi";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl bg-wolf-cream px-4 py-3.5 text-sm text-wolf-green outline-none ring-1 ring-black/5 placeholder:text-wolf-green/35 focus:ring-2 focus:ring-wolf-orange";
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-wolf-green/70">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={4} placeholder={placeholder} className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={base} />
      )}
    </label>
  );
}

export default function Form() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
      {sent ? (
        <div className="py-12 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-wolf-orange/15 text-wolf-orange">
            <FiCheck className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-display text-2xl text-wolf-green">Message sent!</h3>
          <p className="mt-2 text-sm text-wolf-green/60">
            Thanks for reaching out — we&apos;ll reply to your email shortly.
          </p>
        </div>
      ) : (
        <>
          <h3 className="font-display text-2xl tracking-tight text-wolf-green">Send us a message</h3>
          <p className="mt-1 text-sm text-wolf-green/60">We&apos;ll get back to you as soon as we can.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-6 space-y-3"
          >
            <Field label="Your name" name="name" placeholder="e.g. Ada Okeke" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <Field label="Message" name="message" placeholder="Tell us a bit more…" textarea />
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-wolf-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </>
      )}
    </div>
  );
}
