"use client";

import Image from "next/image";

import ClickableHeader from "./clickable-header";
import SquareProfilePicture from "../images/timmy-omahony-small.jpg";
import Button from "./button";
import { sendEmail } from "../utils/email";

const AboutMe = () => {
  const clickHandler = () => {
    sendEmail();
  };

  return (
    <section className="border-t border-black pt-12 md:pt-16 lg:pt-24">
      <header className="flex justify-between items-center">
        <h2 className="callout-1 text-black">
          <ClickableHeader id={"about"}>About Me</ClickableHeader>
        </h2>
        <Image
          className="rounded-full"
          src={SquareProfilePicture}
          alt="Timmy O'Mahony profile picture"
          placeholder="blur"
          quality={95}
          width={75}
          height={75}
          priority
        />
      </header>
      <div>
        <h3 className="heading-2 mt-12 lg:mt-24 xl:mt-32">
          The one-man tech-team for event & experiential marketing agencies.
        </h3>
        <p className="body-2 mt-4 lg:mt-6 xl:mt-8">
          I&apos;m a software developer helping tech-constrained creative teams
          pitch & deliver more ambitious brand activations and experiential
          marketing apps and experiences to their clients.
        </p>
        <p className="mt-6 lg:mt-8 xl:mt-12">
          <Button external={true} onClick={clickHandler}>
            send me an email
          </Button>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
