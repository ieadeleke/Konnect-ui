import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import Steps from "./Steps";
import Reviews from "./Reviews";
import Signup from "./Signup";
import { useSeo } from "../../lib/seo";

export default function RidePage() {
  useSeo({
    title: "Ride with Konnect — earn on your own terms",
    description:
      "Deliver with Konnect and ride when it suits you. Flexible hours, instant payouts and bonuses when demand is high. Join 5,000+ riders earning daily across Nigeria.",
    path: "/ride",
  });
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Steps />
      <Reviews />
      <Signup />
    </>
  );
}
