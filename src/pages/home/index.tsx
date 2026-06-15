
import DisplayLayout from "../../layout/DisplayLayout";
import Hero from "./Hero";
import Bento from "./Bento";
import TopPicks from "./TopPicks";
import HowItWorks from "./HowItWorks";
import Partners from "./Partners";
import FAQ from "./FAQ";
import DownloadApp from "./DownloadApp";

export default function HomePage() {
  return (
    <DisplayLayout>
      <Hero />
      <Bento />
      <TopPicks />
      <HowItWorks />
      <Partners />
      <FAQ />
      <DownloadApp />
    </DisplayLayout>
  );
}
