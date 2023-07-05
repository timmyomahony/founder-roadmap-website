import { ReactElement } from "react";
import Image from "next/image";

import Portrait from "../../images/timmy-omahony-small.jpg";

interface Testimonial {
  portrait?: any;
  text: string | ReactElement;
  person: string;
  personUrl?: string;
  company: string;
  companyUrl?: string;
}

const testimonials: Array<Testimonial> = [
  {
    // portrait: Portrait,
    text: (
      <>
        &ldquo;It was very important for us to have someone that could quickly
        gain an understanding of our niche and complex market to build the
        product we needed. The service we received balanced Timmy&apos;s great
        development skills alongside an ability to understand what would be the
        most appropriate solution within our marketplace.&rdquo;
      </>
    ),
    person: "Daniel",
    companyUrl: "https://vetzone.ie",
    company: "Vetzone Ltd.",
  },
];

const LargeTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <figure className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center text-center">
      {testimonial.portrait && (
        <Image
          src={testimonial.portrait}
          className="rounded-full w-16 md:w-24 h-16 md:h-24 mb-4 md:mb-8"
          alt={`${testimonial.portrait} portrait image`}
        />
      )}
      <blockquote className="text-lg md:text-2xl" cite="">
        {testimonial.text}
      </blockquote>
      <figcaption className="text-xs md:text-sm font-mono mt-4 lg:mt-8 xl:mt-8 2xl:mt-20">
        {testimonial.personUrl ? (
          <a
            className="text-green-300 underline"
            href={testimonial.personUrl}
            target="_blank"
            rel="noreferrer"
          >
            {testimonial.person}
          </a>
        ) : (
          <>{testimonial.person}</>
        )}
        {" / "}
        {testimonial.companyUrl ? (
          <a
            className="text-green-300 underline"
            href={testimonial.companyUrl}
            target="_blank"
            rel="noreferrer"
          >
            <cite className="not-italic">{testimonial.company}</cite>
          </a>
        ) : (
          <cite className="not-italic">{testimonial.company}</cite>
        )}
      </figcaption>
    </figure>
  );
};

const SmallTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <figure className="bg-zinc-800 px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row gap-0 md:gap-5">
      {testimonial.portrait && (
        <Image
          src={testimonial.portrait}
          className="rounded-full w-10 md:w-16 h-10 md:h-16 mb-4 md:mb-8"
          alt={`${testimonial.portrait} portrait image`}
        />
      )}
      <div>
        <blockquote className="text-sm md:text-base leading-snug" cite="">
          {testimonial.text}
        </blockquote>
        <figcaption className="text-xs leading-tight font-mono mt-4 2xl:mt-20">
          {testimonial.personUrl ? (
            <a
              className="text-green-300 underline"
              href={testimonial.personUrl}
              target="_blank"
              rel="noreferrer"
            >
              {testimonial.person}
            </a>
          ) : (
            <>{testimonial.person}</>
          )}
          {" / "}
          {testimonial.companyUrl ? (
            <a
              className="text-green-300 underline"
              href={testimonial.companyUrl}
              target="_blank"
              rel="noreferrer"
            >
              <cite className="not-italic">{testimonial.company}</cite>
            </a>
          ) : (
            <cite className="not-italic">{testimonial.company}</cite>
          )}
        </figcaption>
      </div>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section /*className="py-12 md:py-20"*/ className="mt-12 md:mt-20">
      <div /*className="mb-12 lg:mb-16 xl:mb-20"*/>
        <LargeTestimonial testimonial={testimonials[0]} />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {testimonials.slice(1).map((testimonial, i) => {
          return <SmallTestimonial key={i} testimonial={testimonial} />;
        })}
      </div> */}
    </section>
  );
}
