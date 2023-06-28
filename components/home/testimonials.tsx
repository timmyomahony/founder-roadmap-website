import { ReactElement } from "react";
import Image from "next/image";

import Portrait from "../../images/timmy-omahony-small.jpg";

interface Testimonial {
  portrait: any;
  text: string | ReactElement;
  person: string;
  link: string;
  company: string;
}

const testimonials: Array<Testimonial> = [
  {
    portrait: Portrait,
    text: (
      <>
        &ldquo;Timmy has consistency delivered a number of tricky, creative and
        technically challenging projects over the past 7 years for us. He&apos;s
        our go-to guy for creative web dev.&rdquo;
      </>
    ),
    person: "John Kilcullen",
    link: "https://linkedin.com",
    company: "Verve Live Media",
  },
  {
    portrait: Portrait,
    text: (
      <>
        &ldquo;Timmy has consistency delivered a number of tricky, creative and
        technically challenging projects over the past 7 years for us. He&apos;s
        our go-to guy for creative web dev.&rdquo;
      </>
    ),
    person: "John Kilcullen",
    link: "https://linkedin.com",
    company: "Verve Live Media",
  },
  {
    portrait: Portrait,
    text: (
      <>
        &ldquo;Timmy has consistency delivered a number of tricky, creative and
        technically challenging projects over the past 7 years for us. He&apos;s
        our go-to guy for creative web dev.&rdquo;
      </>
    ),
    person: "John Kilcullen",
    link: "https://linkedin.com",
    company: "Verve Live Media",
  },
  {
    portrait: Portrait,
    text: (
      <>
        &ldquo;Timmy has consistency delivered a number of tricky, creative and
        technically challenging projects over the past 7 years for us. He&apos;s
        our go-to guy for creative web dev.&rdquo;
      </>
    ),
    person: "John Kilcullen",
    link: "https://linkedin.com",
    company: "Verve Live Media",
  },
  {
    portrait: Portrait,
    text: (
      <>
        &ldquo;Timmy has consistency delivered a number of tricky, creative and
        technically challenging projects over the past 7 years for us. He&apos;s
        our go-to guy for creative web dev.&rdquo;
      </>
    ),
    person: "John Kilcullen",
    link: "https://linkedin.com",
    company: "Verve Live Media",
  },
];

const LargeTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <figure className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center text-center">
      {testimonial.portrait && (
        <Image
          src={testimonial.portrait}
          className="rounded-full w-24 h-24 mb-8"
          alt={`${testimonial.portrait} portrait image`}
        />
      )}
      <blockquote className="text-2xl" cite="">
        {testimonial.text}
      </blockquote>
      <figcaption className="text-sm font-mono mt-4 lg:mt-8 xl:mt-8 2xl:mt-20">
        <a
          className="text-green-300 underline"
          href={testimonial.link}
          target="_blank"
          rel="noreferrer"
        >
          {testimonial.person}
        </a>{" "}
        / <cite className="not-italic">{testimonial.company}</cite>
      </figcaption>
    </figure>
  );
};

const SmallTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <figure className="bg-zinc-800 px-6 py-8 flex gap-5">
      {testimonial.portrait && (
        <Image
          src={testimonial.portrait}
          className="rounded-full w-16 h-16 mb-8"
          alt={`${testimonial.portrait} portrait image`}
        />
      )}
      <div>
        <blockquote className="text-base leading-snug" cite="">
          {testimonial.text}
        </blockquote>
        <figcaption className="text-xs leading-tight font-mono mt-4 2xl:mt-20">
          <a
            className="text-green-300 underline"
            href={testimonial.link}
            target="_blank"
            rel="noreferrer"
          >
            {testimonial.person}
          </a>{" "}
          / <cite className="not-italic">{testimonial.company}</cite>
        </figcaption>
      </div>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20">
      <div className="mb-12 lg:mb-16 xl:mb-20">
        <LargeTestimonial testimonial={testimonials[0]} />
      </div>
      <div className="grid grid-cols-2 gap-8">
        {testimonials.slice(1).map((testimonial, i) => {
          return <SmallTestimonial key={i} testimonial={testimonial} />;
        })}
      </div>
    </section>
  );
}
