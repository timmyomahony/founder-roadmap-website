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
    question: "How does booking and payment work?",
    answer: (
      <div>
        <p>
          For <strong>workshops</strong> you can{" "}
          <a
            className="underline"
            href="https://savvycal.com/founderroadmap/workshop"
          >
            directly book a 2 hour timeslot
          </a>{" "}
          that suits your schedule. Once you&apos;re booked in, I&apos;ll send
          on a private Stripe link where you can make payment before the call.
        </p>
        <p>
          Because I have a limited availability for <strong>roadmaps</strong>,
          it&apos;s best to first{" "}
          <a
            className="underline"
            href="https://savvycal.com/founderroadmap/roadmap"
          >
            book a free intro call
          </a>{" "}
          to discuss timelines. If everything lines up, I&apos;ll send on a
          private Stripe link where you can make payment. We&apos;ll then
          arrange our first workshop to kick things off.
        </p>
      </div>
    ),
  },
  {
    question: "I'd rather not share the details of my business.",
    answer: (
      <div>
        <p>
          For any intro calls or other initial conversations, that&apos;s no
          problem, we can work around it. When it comes to a workshop or roadmap
          though we&apos;re going to need to get into the details.
        </p>
        <p>
          Rest assured that I&apos;ve worked with many other companies and
          individuals before in the strictest of confidence, so your secrets are
          safe with me.
        </p>
      </div>
    ),
  },
  {
    question: "Who does the actual development & coding?",
    answer: (
      <div>
        <p>
          Normally, actual development & coding will be done by a separate
          developer or development agency.
        </p>
        <p>
          One of the benefits of working together is that I can help suggest
          trusted developers that are the right for you.
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
    <section className="pt-12 lg:pt-16 2xl:pt-32 pb-8 md:pb-12 lg:pb-16 2xl:pb-24 ">
      <h2 className="text-xl md:text-2xl lg:text-4xl">Still have questions?</h2>
      <ul className="text-lg border-t-2 border-zinc-800 mt-6 md:mt-12">
        {faqs.map((faq, i) => {
          return (
            <li
              id={`faq-${i}`}
              key={i}
              className="sm:px-4 py-4 sm:py-6 md:py-8 border-b-2 border-zinc-800"
            >
              <h3
                className={`cursor-pointer flex sm:items-center text-sm md:text-lg ${
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
                className={`prose-sm lg:prose-lg mt-8 md:mt-10 lg:mt-12 sm:ml-10 type-2 relative w-full sm:w-2/3 ${
                  i === activeItem ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-start md:text-end text-xs mt-6">
        Have a question that&apos;s not covered here?{" "}
        <a
          href={`mailto:${getEmailAddress()}`}
          className="underline text-green-300"
        >
          Send me an email
        </a>
      </p>
    </section>
  );
};

export default FAQs;
