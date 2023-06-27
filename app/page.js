import Image from "next/image";

import BackgroundPicA from "../images/timmy-omahony-office-a.jpg";
import BackgroundPicB from "../images/timmy-omahony-office-b.jpg";

import Page from "../components/layouts/page";
import Container from "../components/container";

import Brands from "../components/home/brands";
import Hero from "../components/home/hero";
import Why from "../components/home/why";
import Offers from "../components/home/offers";
import Testimonials from "../components/home/testimonials";
import Bio from "../components/home/bio";
import Contact from "../components/home/contact";

export default function HomePage() {
  return (
    <Page showFooter={false}>
      <Container>
        <Hero />
        <Why />
        <Offers />
        <section className="pt-12 lg:pt-16 xl:pt-24 2xl:pt-32">
          <Image
            src={BackgroundPicB}
            alt="Timmy O'Mahony"
            placeholder="blur"
            quality={95}
            priority
          />
        </section>
        <Brands />
        <Testimonials />
        <section className="pt-12 lg:pt-16 xl:pt-24 2xl:pt-32">
          <Image
            src={BackgroundPicA}
            alt="Timmy O'Mahony"
            placeholder="blur"
            quality={95}
            priority
          />
        </section>
        <Bio />
        <Contact />
      </Container>
    </Page>
  );
}
