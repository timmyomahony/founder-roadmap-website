import Divider from "../../components/Divider";

export default function Pain() {
  return (
    <>
      <section className="flex flex-col md:flex-row my-8 md:my-12 lg:my-16 2xl:my-24 gap-24 md:gap-12 lg:gap-24">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl">
            I help non-technical founders put together a bulletproof plan for
            turning their ideas into apps, before a line of code is written.
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
            Finding the right person to answer these questions is tough,
            particularly as the incentives between developers and founders don’t
            always line up.
          </p>
          <p className="text-sm md:text-base xl:text-lg mb-6 lg:mb-8">
            The truth is that building apps can be expensive and risky. It can
            be hard to communicate your expectations and there are countless
            unknowns that need to be uncovered ahead of time. Without a plan in
            place, milestones get missed and development costs soar as problems
            are fixed on the fly.
          </p>
        </div>
      </section>
      <section className="my-8">
        <Divider text={"What's the solution?"} />
      </section>
      <section className="flex flex-col md:flex-row my-8 md:my-12 lg:my-16 2xl:my-24 gap-24 md:gap-12 lg:gap-24">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <p className="text-sm md:text-base xl:text-lg mb-6 lg:mb-8">
            The truth is that building apps can be expensive and risky. It can
            be hard to communicate your expectations and there are countless
            unknowns that need to be uncovered ahead of time. Without a plan in
            place, milestones get missed and development costs soar as problems
            are fixed on the fly.
          </p>
        </div>
      </section>
    </>
  );
}
