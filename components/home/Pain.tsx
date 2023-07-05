import Divider from "../../components/Divider";

export default function Pain() {
  return (
    <>
      <section className="flex flex-col md:flex-row my-8 md:my-12 lg:my-16 gap-12 md:gap-12 lg:gap-24">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl xl:text-4xl 2xl:w-2/3">
            Are you overwhelmed by tech-related questions?
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm md:text-base xl:text-lg mb-6 2xl:mb-8">
            Whether you&apos;re in an accelerator or launching solo, without a
            technical co-founder it can be overwhelming figuring how you&apos;re
            going to bring your idea to life.
          </p>
          <ul className="list-disc pl-4 mb-6 lg:mb-8 flex flex-col gap-1">
            <li>
              <p className="text-sm md:text-base xl:text-lg">
                How much is development going to cost?
              </p>
            </li>
            <li>
              <p className="text-sm md:text-base xl:text-lg">
                How long will my app take to build?{" "}
              </p>
            </li>
            <li>
              <p className="text-sm md:text-base xl:text-lg">
                What technologies should I use?
              </p>
            </li>
            <li>
              <p className="text-sm md:text-base xl:text-lg">
                Where can I find a quality developer or agency?{" "}
              </p>
            </li>
          </ul>
          <p className="text-sm md:text-base xl:text-lg mb-6 lg:mb-8">
            It can be difficult getting straight answers to these questions and
            sometimes you don&apos;t even know what you don&apos;t know.
          </p>
          <p className="text-sm md:text-base xl:text-lg mb-6 lg:mb-8">
            The truth is, creating something new and novel is challenging. There
            are countless issues and unknowns ready to pop-up at the worst
            possible moment.
          </p>
          <p className="text-sm md:text-base xl:text-lg mb-6 lg:mb-8">
            You wouldn&apos;t build a house without a blueprint, so why take the
            same risk with software?
          </p>
        </div>
      </section>
      <section className="my-8">
        <Divider text={"Workshops & Roadmaps"} />
      </section>
      <section className="flex flex-col md:flex-row my-8 md:my-12 lg:my-16 2xl:my-24 gap-24 md:gap-12 lg:gap-24">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl">
            Get expert guidance from an experienced & impartial software
            developer.
          </h2>
          <p className="mt-6 lg:mt-8 text-sm md:text-base xl:text-lg">
            With a workshop or roadmap, you&apos;ll be removing as much risk as
            possible from the lengthy and expensive process of building an app,
            all <em>before a line of code is written.</em>
          </p>
          <p className="mt-6 lg:mt-8 text-sm md:text-base xl:text-lg">
            Ask questions, braindump, discover assumptions, walk-through
            technical features, uncover unforeseen consequences; by the end of
            this process you should know exactly what you need to do to avoid a
            development disaster.
          </p>
        </div>
      </section>
    </>
  );
}
