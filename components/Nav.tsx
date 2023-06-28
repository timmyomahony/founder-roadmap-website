"use client";

import { sendEmail, getEmailAddress } from "../utils/email";

import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import LinkedIcon from "../icons/linkedin.svg";
import TwitterIcon from "../icons/twitter.svg";

import Container from "./Container";

export default function Nav() {
  return (
    <Container>
      <nav className="w-full flex justify-between items-center py-10 lg:py-12 border-b-2 border-zinc-800">
        <p className="text-lg lg:text-xl 2xl:text-2xl">
          <Link href="/" className="hover:underline">
            Founder Roadmap
          </Link>
        </p>
        <ul className="flex gap-3 text-zinc-600">
          <li className="w-4 h-4 lg:w-5 lg:h-5">
            <a
              href="https://www.linkedin.com/company/founder-roadmap/"
              title="Connect on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIcon aria-label="LinkedIn icon" />
            </a>
          </li>
          <li className="w-4 h-4 lg:w-5 lg:h-5">
            <a
              href="https://twitter.com/founderroadmap/"
              title="Follow me on Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon aria-label="Twitter icon" />
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
