"use client";

import Image from "next/image";

import { getEmailAddress } from "../../utils/email";
import ProfilePic from "../../images/timmy-omahony.jpg";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 lg:py-16 2xl:py-24">
      <div className="w-full flex flex-col items-end md:items-start md:w-4/12 md:pb-1 2xl:pb-2">
        <div className="relative">
          <Image
            src={ProfilePic}
            alt="Timmy O'Mahony profile picture"
            placeholder="blur"
            quality={95}
            priority
          />
          <p className="mt-2 text-sm font-mono">Hi, I&apos;m Timmy 👋</p>
        </div>
      </div>
      <div className="w-full md:w-7/12 pt-8 md:pt-12 lg:pt-0 pb-8 md:pb-0">
        <h1 className="text-3xl xl:text-4xl 2xl:text-5xl">
          Are you a non-technical founder, unsure of how to get your app built?
        </h1>
        <p className="text-base md:text-lg xl:text-xl mt-5 xl:mt-4 2xl:mt-10">
          Put a crystal clear plan in place instead of wasting €1,000s on
          needless development. Book a roadmaping workshop and set the
          foundations for a cheaper and faster build-phase with trusted
          developers.
        </p>
        <div className="mt-5 xl:mt-6 2xl:mt-10">
          <Button href="/">Book a roadmapping workshop today</Button>
        </div>
        <p className="text-xs mt-5 xl:mt-5 2xl:mt-10">
          Don&apos;t worry, it&apos;s free to book. Have questions?{" "}
          <a
            className="text-green-300 underline"
            href={`mailto:${getEmailAddress()}`}
          >
            Send me an email
          </a>
        </p>
      </div>
    </header>
  );
}