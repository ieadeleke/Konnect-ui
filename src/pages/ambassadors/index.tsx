import Hero from "./Hero";
import Benefits from "./Benefits";
import WhoJoins from "./WhoJoins";
import Steps from "./Steps";
import Tiers from "./Tiers";
import Faq from "./Faq";
import Apply from "./Apply";
import { useSeo } from "../../lib/seo";

export default function AmbassadorsPage() {
  useSeo({
    title: "Become a Konnect Ambassador — grow the pack, get rewarded",
    description:
      "Share Konnect with your campus, followers and friends and earn for every foodie, rider and restaurant you bring on board. Free to join, with weekly payouts and real perks.",
    path: "/ambassadors",
  });
  return (
    <>
      <Hero />
      <Benefits />
      <Tiers />
      <Steps />
      <WhoJoins />
      <Faq />
      <Apply />
    </>
  );
}
