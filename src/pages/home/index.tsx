
import Hero from "./Hero";
import Bento from "./Bento";
import TopPicks from "./TopPicks";
import HowItWorks from "./HowItWorks";
import Partners from "./Partners";
import FAQ from "./FAQ";
import DownloadApp from "./DownloadApp";
import { useSeo } from "../../lib/seo";

export default function HomePage() {
  useSeo({
    title: "Fresh, delicious food delivered to your door",
    description:
      "Order from your favourite local kitchens with live tracking, fast delivery and secure payments. Download the Konnect app and get up to 70% off your first order.",
    path: "/",
  });
  return (
    <>
      <Hero />
      <Bento />
      <TopPicks />
      <HowItWorks />
      <Partners />
      <FAQ />
      <DownloadApp />
    </>
  );
}
