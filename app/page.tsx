import Image from "next/image";

import BackgroundPicA from "../images/timmy-omahony-office-a.jpg";
import BackgroundPicB from "../images/timmy-omahony-office-b.jpg";

import Page from "../components/layouts/page";
import Container from "../components/container";

import Divider from "../components/Divider";

import Hero from "../components/home/Hero";
import Pain from "../components/home/Pain";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Bio from "../components/home/Bio";
import Contact from "../components/home/Contact";
import FAQs from "../components/home/FAQs";

export default function HomePage() {
  return (
    <Page showFooter={false}>
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
