import Hero from "./Hero";
import Body from "./Body";
import { useSeo } from "../../lib/seo";

export default function ContactPage() {
  useSeo({
    title: "Contact us",
    description:
      "Questions, partnerships or support? Reach the Konnect team on WhatsApp at +234 807 337 6943, email konnect@consukon.com, or send us a message — we usually reply within a few hours.",
    path: "/contact",
  });

  return (
    <>
      <Hero />
      <Body />
    </>
  );
}
