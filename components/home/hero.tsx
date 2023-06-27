import Image from "next/image";

import ProfilePic from "../../images/timmy-omahony.jpg";
import Button from "../../components/button";
import LinkedIcon from "../../icons/linkedin.svg";
import MastodonIcon from "../../icons/mastodon.svg";
import GithubIcon from "../../icons/github.svg";
import TwitterIcon from "../../icons/twitter.svg";

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
        {/* <ul className="mt-8 2xl:mt-12 flex gap-3 2xl:gap-4">
          <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
            <a
              href="https://www.linkedin.com/in/timmy-omahony/"
              title="Connect on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIcon className="text-white" aria-label="LinkedIn icon" />
            </a>
          </li>
          <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
            <a
              href="https://mastodon.social/@timmyomahony/"
              title="Follow me on Mastodon"
              target="_blank"
              rel="noreferrer"
            >
              <MastodonIcon aria-label="Mastodon icon" />
            </a>
          </li>
          <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
            <a
              href="https://twitter.com/timmyomahony/"
              title="Follow me on Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon aria-label="Twitter icon" />
            </a>
          </li>
          <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
            <a
              href="https://github.com/timmyomahony"
              title="Check out my Github profile"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon aria-label="Github icon" />
            </a>
          </li>
        </ul> */}
      </div>
      <div className="w-full md:w-7/12 pt-8 md:pt-12 lg:pt-0 pb-8 md:pb-0">
        <h1 className="heading-1">
          Are you a non-technical founder, unsure of how to get your app built?
        </h1>
        <p className="body-1 mt-5 xl:mt-4 2xl:mt-10">
          Put a crystal clear plan in place before wasting €1,000s on needless
          development. Book a workshop or roadmap and set the foundations for a
          cheaper and faster build-phase with trusted developers.
        </p>
        <div className="mt-5 xl:mt-6 2xl:mt-10">
          <Button href="/">Book a workshop or roadmap today</Button>
        </div>
        <p className="text-xs mt-5 xl:mt-5 2xl:mt-10">
          Don&apos;t worry, it&apos;s free to book.{" "}
        </p>
      </div>
    </header>
  );
}
