import Hero from "./Hero";
import Stats from "./Stats";
import Benefits from "./Benefits";
import Steps from "./Steps";
import Testimonial from "./Testimonial";
import Signup from "./Signup";
import { useSeo } from "../../lib/seo";

export default function BusinessPage() {
  useSeo({
    title: "Konnect for Business — grow your restaurant",
    description:
      "Partner with Konnect to reach thousands of hungry customers, manage orders from one simple dashboard and get instant payouts. No setup fees — live in 48 hours.",
    path: "/business",
  });
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <Steps />
      <Testimonial />
      <Signup />
    </>
  );
}
