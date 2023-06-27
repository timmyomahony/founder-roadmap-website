import Image from "next/image";

import Link from "next/link";
import GithubIcon from "../../icons/github.svg";
import LinkedIcon from "../../icons/linkedin.svg";
import MastodonIcon from "../../icons/mastodon.svg";
import TwitterIcon from "../../icons/twitter.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <section className="flex flex-col border-t border-t-black mb-16">
      <div className="w-full pt-8 md:pt-12 lg:pt-16">
        <h1 className="heading-1">Let&apos;s Chat</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-32 mt-5 md:mt-12 2xl:mt-10">
        <div className="w-full md:w-1/2">
          <p className="body-1">
            Have you got a deadline looming?{" "}
            <Link
              className="underline"
              href="https://savvycal.com/timmyomahony/13fde46a"
            >
              Schedule a call
            </Link>{" "}
            with me to discuss in more detail. Alternatively connect with me
            elsewhere on the web.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="grid grid-cols-2 gap-y-6 gap-x-12">
            <li>
              <a
                className="group flex items-center"
                href="https://www.linkedin.com/in/timmy-omahony/"
                title="Connect on LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIcon className="w-5 h-5" aria-label="LinkedIn icon" />{" "}
                <span className="group-hover:underline ml-4 body-1">
                  LinkedIn
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center"
                href="https://mastodon.social/@timmyomahony/"
                title="Follow me on Mastodon"
                target="_blank"
                rel="noreferrer"
              >
                <MastodonIcon className="w-5 h-5" aria-label="Mastodon icon" />{" "}
                <span className="group-hover:underline ml-4 body-1">
                  Mastodon
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center"
                href="https://twitter.com/timmyomahony/"
                title="Follow me on Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon className="w-5 h-5" aria-label="Twitter icon" />{" "}
                <span className="group-hover:underline ml-4 body-1">
                  Twitter
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center"
                href="https://github.com/timmyomahony"
                title="Check out my Github profile"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="w-5 h-5" aria-label="Github icon" />{" "}
                <span className="group-hover:underline ml-4 body-1">
                  Github
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center"
                href="https://github.com/timmyomahony"
                title="Check out my Github profile"
                target="_blank"
                rel="noreferrer"
              >
                <EnvelopeIcon className="w-5 h-5" aria-label="Github icon" />{" "}
                <span className="group-hover:underline ml-4 body-1">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
