import Image from "next/image";

import BackgroundPicA from "../images/timmy-omahony-office-a.jpg";
import BackgroundPicB from "../images/timmy-omahony-office-b.jpg";

import Page from "../components/layouts/Page";
import Container from "../components/Container";
import Divider from "../components/Divider";
import Hero from "../components/home/Hero";
import Pain from "../components/home/Pain";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Bio from "../components/home/Bio";
import Contact from "../components/home/Contact";
import FAQs from "../components/home/FAQs";

import { defaultMetadata } from "../utils/metadata";

export default function HomePage() {
  return (
    <Page>
      <Container>
        <Hero />
        <Pain />
        <Services />
        <section className="pt-12 lg:pt-16 xl:pt-24 2xl:pt-32">
          <Image
            src={BackgroundPicB}
            alt="Timmy O'Mahony"
            placeholder="blur"
            quality={95}
            priority
          />
        </section>
        <div className="py-8">
          <Divider text={"Testimonials"} />
        </div>
        <Testimonials />
        <Bio />
        <section className="pt-12 lg:pt-16 xl:pt-24 2xl:pt-32">
          <Image
            src={BackgroundPicA}
            alt="Timmy O'Mahony"
            placeholder="blur"
            quality={95}
            priority
          />
        </section>
        <FAQs />
        <Contact />
      </Container>
    </Page>
  );
}

const generateMetadata = async () => {
  return defaultMetadata({
    title:
      "Founder Roadmap | Helping non-technical founders avoid development disasters",
    description:
      "I help non-technical founders put together a bulletproof plan for turning their ideas into apps, before a line of code is written.",
  });
};

export { generateMetadata };
