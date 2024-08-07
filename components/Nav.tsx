"use client";

import Link from "next/link";
import Image from "next/image";
import LinkedIcon from "../icons/linkedin.svg";
import TwitterIcon from "../icons/twitter.svg";
import LogoLight from "../images/logo-light.png";

import Container from "./Container";

export default function Nav() {
  return (
    <Container>
      <nav className="w-full flex justify-between items-center py-10 lg:py-12 border-b-2 border-zinc-800">
        <p className="text-lg lg:text-xl 2xl:text-2xl">
          <Link href="/" className="hover:underline flex items-center gap-4">
            <span>Timmy O&apos;Mahony</span>
          </Link>
        </p>
        <ul className="flex gap-3 ">
          <li className="w-4 h-4 lg:w-5 lg:h-5">
            <a
              className="text-zinc-400 hover:text-white transition-all duration-300 ease-linear"
              href="https://www.linkedin.com/in/timmy-omahony/"
              title="Connect on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIcon aria-label="LinkedIn icon" />
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
