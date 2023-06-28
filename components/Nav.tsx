"use client";

import { sendEmail, getEmailAddress } from "../utils/email";

import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import Container from "./container";

export default function Nav() {
  return (
    <Container>
      <nav className="w-full flex justify-between items-center py-10 lg:py-12 border-b-2 border-zinc-800">
        <p className="text-lg lg:text-xl 2xl:text-2xl">
          <Link href="/" className="hover:underline">
            Founder Roadmap
          </Link>
        </p>
        {/* <p className="text-base 2xl:text-xl">
          <button onClick={sendEmail}>
            <span className="hidden md:block hover:underline">
              {getEmailAddress()}
            </span>
            <EnvelopeIcon className="h-6 md:hidden" />
          </button>
        </p> */}
      </nav>
    </Container>
  );
}
