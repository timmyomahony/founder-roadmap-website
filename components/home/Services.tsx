"use client";

import { ReactElement } from "react";
import TickIcon from "../../icons/tick.svg";
import CrossIcon from "../../icons/cross.svg";

interface ServiceProps {
  disabled?: boolean;
  title: string | ReactElement;
  price: string | ReactElement;
  description: string | ReactElement;
  benefits: Array<string>;
  linkText: string;
  linkOnClick?: () => void;
}

const Service = ({
  disabled = false,
  title,
  price,
  description,
  benefits,
  linkText,
  linkOnClick,
}: ServiceProps) => {
  return (
    <div
      className={`bg-zinc-800 px-6 py-8 flex flex-col justify-between gap-16 ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      }`}
    >
      <header>
        <h3 className="text-lg font-medium">{title}</h3>
        <h4 className="mt-6 text-4xl font-medium">{price}</h4>
      </header>
      <div>
        <div className="text-sm flex flex-col gap-4">{description}</div>
        <ul className="mt-6 text-sm flex flex-col gap-2">
          {benefits.map((benefit, i) => {
            return (
              <li key={i} className="flex items-center gap-4">
                {disabled ? (
                  <CrossIcon className="w-3" />
                ) : (
                  <TickIcon className="w-3" />
                )}
                <span>{benefit}</span>
              </li>
            );
          })}
        </ul>
        <button
          onClick={linkOnClick}
          className={`${
            disabled ? "bg-zinc-600" : "bg-green-300 cursor-pointer"
          } w-full mt-6  text-zinc-900 font-medium py-1 lg:py-2 px-3 lg:px-6 text-base`}
          disabled={disabled}
        >
          {linkText}
        </button>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="grid grid-cols-3 gap-12">
      <Service
        title={"Starter Workshop"}
        price={
          <span>
            <s>€299</s> €149
          </span>
        }
        description={
          <>
            <p>
              If you&apos;re not quite ready for a full roadmap yet, try a
              workshop instead. We&apos;ll have a 1.5 hour video call with a
              follow-up appraisal video for you to keep.
            </p>
            <p>
              We&apos;ll dig into your business and uncover the high-level
              challenges alongside some development options and the high-level
              costs and timelines involved.
            </p>
          </>
        }
        benefits={[
          "Answer the most pressing questions.",
          "Identify the primary challenges.",
          "Talk through potential tech solutions.",
          "Set the next steps in stone.",
        ]}
        linkText={"Book Now"}
        linkOnClick={() => {
          console.log("Test");
        }}
      />
      <Service
        title={"Full Roadmap"}
        price={"€3,995"}
        description={
          <p>
            We&apos;ll dig into the nitty-gritty details of your startup or
            business. I&apos;ll put together a detailed requirement document and
            appraisal video with everything you need to start development.
          </p>
        }
        benefits={[
          "10+ page requirements document",
          "Detailed breakdown of app",
          "Wireframes & architecture diagrams",
          "Ready for development",
        ]}
        linkText={"Apply Now"}
        linkOnClick={() => {
          console.log("Test");
        }}
      />
      <Service
        disabled={true}
        title={"Coding & Development"}
        price={"€??,???"}
        description={
          <p>
            Trying to start coding & development without fully understanding
            your technical requirements is a recipe for disaster. Start with a
            workshop or roadmap to remove the risk up-front.
          </p>
        }
        benefits={[
          "Unknown requirements",
          "Unknown costs",
          "Unknown timelines & milestones",
          "Untested developers",
        ]}
        linkText={"Don't Book Now"}
        linkOnClick={() => {
          console.log("Test");
        }}
      />
    </section>
  );
}
