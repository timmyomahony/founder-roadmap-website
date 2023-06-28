"use client";

import React, { ReactElement } from "react";
import { useState, useEffect } from "react";

import { getEmailAddress } from "../../utils/email";

interface FAQ {
  question: string;
  answer: ReactElement | string;
}

const faqs = [
  {
    question: "I've already got an app, can you help with _________?",
    answer: (
      <div>
        <p>
          Yes absolutely. Whether you&apos;ve got a new feature or integration,
          or just need some advice on what to do next, I can help you out.
        </p>
        <p>
          Yes absolutely. If you&apos;ve got an existing app that needs some TLC
          I can help you unscramble it.
        </p>
      </div>
    ),
  },
  {
    question: "I've already got an app, can you help with _________?",
    answer: (
      <div>
        <p>
          Yes absolutely. Whether you&apos;ve got a new feature or integration,
          or just need some advice on what to do next, I can help you out.
        </p>
        <p>
          Yes absolutely. If you&apos;ve got an existing app that needs some TLC
          I can help you unscramble it.
        </p>
      </div>
    ),
  },
  {
    question: "I've already got an app, can you help with _________?",
    answer: (
      <div>
        <p>
          Yes absolutely. Whether you&apos;ve got a new feature or integration,
          or just need some advice on what to do next, I can help you out.
        </p>
        <p>
          Yes absolutely. If you&apos;ve got an existing app that needs some TLC
          I can help you unscramble it.
        </p>
      </div>
    ),
  },
  {
    question: "I've already got an app, can you help with _________?",
    answer: (
      <div>
        <p>
          Yes absolutely. Whether you&apos;ve got a new feature or integration,
          or just need some advice on what to do next, I can help you out.
        </p>
        <p>
          Yes absolutely. If you&apos;ve got an existing app that needs some TLC
          I can help you unscramble it.
        </p>
      </div>
    ),
  },
];

const FAQs = () => {
  const [activeItem, setActiveItem] = useState<number>();

  const faqClicked = (i) => {
    if (i === activeItem) {
      setActiveItem(undefined);
    } else {
      setActiveItem(i);
    }
  };

  useEffect(() => {
    let fragment = "";
    if (typeof window !== "undefined") {
      fragment = window.location.hash;

      if (fragment.length > 0) {
        let matchingFaq = faqs.find((faq, i) => {
          return fragment === `#faq-${i}`;
        });
        if (matchingFaq) {
          setActiveItem(faqs.indexOf(matchingFaq));
        }
      }
    }
  }, []);

  return (
    <section className="pt-8 md:pt-12 lg:pt-16 2xl:pt-32 pb-8 md:pb-12 lg:pb-16 2xl:pb-24 ">
      <h2 className="text-2xl lg:text-4xl">Still have questions?</h2>
      <ul className="text-lg border-t-2 border-zinc-800 mt-12">
        {faqs.map((faq, i) => {
          return (
            <li
              id={`faq-${i}`}
              key={i}
              className="sm:px-4 py-4 sm:py-6 md:py-8 border-b-2 border-zinc-800"
            >
              <h3
                className={`cursor-pointer type-2 md:type-2ish lg:type-3 flex sm:items-center ${
                  i === activeItem ? "font-medium" : ""
                }`}
              >
                <svg
                  className={`hidden sm:block w-6 h-auto mr-4 transition-all duration-500 ease-in-out text-white ${
                    i === activeItem ? "rotate-0" : "-rotate-90"
                  }`}
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m396.6 160 19.4 20.7-160 171.3-160-171.3 19.3-20.7 140.7 150.5z"
                    fill="currentColor"
                  />
                </svg>
                <span onClick={() => faqClicked(i)}>{faq.question}</span>
                {i === activeItem && (
                  <a
                    className="hidden sm:inline ml-2 cursor-pointer text-zinc-600 font-medium"
                    href={`#faq-${i}`}
                    title="Click for a permalink to this FAQ"
                  >
                    #
                  </a>
                )}
              </h3>
              <div
                className={`prose-lg mt-8 md:mt-10 lg:mt-12 sm:ml-10 type-2 relative w-full sm:w-2/3 ${
                  i === activeItem ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-end text-xs mt-6">
        Have a question that&apos;s not covered here?{" "}
        <a
          href={`mailto:${getEmailAddress()}`}
          className="underline text-green-300"
        >
          Send me an email
        </a>{" "}
        and I&apos;ll get back to you with an answer.
      </p>
    </section>
  );
};

export default FAQs;
