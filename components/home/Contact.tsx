import Link from "next/link";
import Button from "../Button";

export default function Contact() {
  return (
    <section className="flex flex-col mb-16">
      <h1 className="w-full pt-8 md:pt-12 font-medium text-2xl md:text-3xl xl:text-4xl">
        Need to think it over?
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-32 mt-5 md:mt-12">
        <div className="w-full md:w-1/2">
          <p className="text-base md:text-lg xl:text-xl">
            If you&apos;re not quite ready to pull the trigger and book a
            workshop or roadmap not to worry! I&apos;m more than happy to have a
            15 minute intro call to answer any lingering questions.
          </p>
          <div className="mt-5 xl:mt-10">
            <Button href="https://savvycal.com/founderroadmap/intro">
              Schedule a free intro call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
