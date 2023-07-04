"use client";

import { ReactElement } from "react";

import TickIcon from "../../icons/tick.svg";
import CrossIcon from "../../icons/cross.svg";

interface ServiceProps {
  disabled?: boolean;
  title: string | ReactElement;
  price: string | ReactElement;
  headline: string | ReactElement;
  description: string | ReactElement;
  benefits: Array<string>;
  linkText: string;
  linkOnClick?: () => void;
  className?: string;
}

const Service = ({
  disabled = false,
  title,
  price,
  headline,
  description,
  benefits,
  linkText,
  linkOnClick,
  className = "",
}: ServiceProps) => {
  return (
    <div
      className={`bg-zinc-800 px-6 py-8 flex flex-col justify-between gap-6 md:gap-16 ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      } ${className}`}
    >
      <header>
        <h3 className="text-base md:text-lg font-medium">{title}</h3>
        <h4 className="text-3xl md:text-4xl font-medium mt-3 md:mt-6">
          {price}
        </h4>
      </header>
      <div>
        <div className="text-base font-medium flex flex-col gap-4">
          {headline}
        </div>
        <div className="mt-6 text-sm flex flex-col gap-4">{description}</div>
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
          } w-full mt-6  text-zinc-900 font-medium py-2 px-3 lg:px-6 text-base`}
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
    <section
      className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
      id="services"
    >
      <Service
        title={"Workshop"}
        price={<span>€395</span>}
        headline={
          <>
            Get instant clarification on the big-picture questions keeping you
            up at night.
          </>
        }
        description={
          <>
            <p>
              You&apos;ll leave our workshop armed with the information you need
              to confidently kick-off the development phase.
            </p>
            <p>
              In this workshop we&apos;ll meet on Zoom for a 1.5 to 2 hour
              recorded video call to dig deeper into your industry & business
              and answer your questions. Afterwards I&apos;ll deliver a short
              appraisal Loom video that you can share with other stakeholders to
              make a fully informed decision about the best next steps.
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
          window.location.href = "https://savvycal.com/founderroadmap/workshop";
        }}
      />
      <Service
        title={"Roadmap"}
        price={"€2,995"}
        headline={
          <>
            Take all the uncertainty out of app development with a detailed
            plan-of-action roadmap document.
          </>
        }
        description={
          <>
            <p>
              Walk away with a 25+ page PDF document that includes everything
              you need for a painless development phase.
            </p>
            <p>
              Creating a roadmap usually takes between 2 to 4 weeks. We&apos;ll
              have a kick-off workshop to cover the basics followed by a second
              workshop after 7 - 10 days to answer my follow-up questions.
              I&apos;ll then write everything up and deliver it on a final 1
              hour handover call.
            </p>
          </>
        }
        benefits={[
          "Get approx. cost & timelines",
          "Uncover hidden risks, challenges and unknowns",
          "Nail down wireframes & architecture",
          "Get introduced to quality developers",
        ]}
        linkText={"Apply Now"}
        linkOnClick={() => {
          window.location.href = "https://savvycal.com/founderroadmap/roadmap";
        }}
      />
      <Service
        disabled={true}
        title={"Coding & Development"}
        price={"€??,???"}
        headline={<></>}
        description={
          <p>
            Trying to start development without fully understanding your
            technical requirements is a recipe for disaster. Start with a
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
