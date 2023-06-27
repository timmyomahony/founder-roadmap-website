export default function Why() {
  return (
    <>
      <section className="flex flex-col md:flex-row py-8 md:py-12 lg:py-16 2xl:py-24 gap-24 md:gap-12 lg:gap-24">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="heading-2">
            I help non-technical founders put together a bulletproof plan for
            turning their ideas into apps, before a line of code is written.
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="body-0 mb-6 2xl:mb-8">
            Whether you&apos;re in an accelerator or launching solo, without a
            technical co-founder it can be overwhelming figuring how you&apos;re
            going to bring your idea to life.
          </p>
          <ul className="list-disc pl-4 mb-6 lg:mb-8 flex flex-col gap-1">
            <li>
              <p className="body-0">How much is development going to cost?</p>
            </li>
            <li>
              <p className="body-0">How long will my app take to build? </p>
            </li>
            <li>
              <p className="body-0">What technologies should I use?</p>
            </li>
            <li>
              <p className="body-0">
                Where can I find a quality developer or agency?{" "}
              </p>
            </li>
          </ul>
          <p className="body-0 mb-6 lg:mb-8">
            Finding the right person to answer these questions is tough,
            particularly as the incentives between developers and founders don’t
            always line up.
          </p>
          <p className="body-0 mb-6 lg:mb-8">
            The truth is that building apps can be expensive and risky. It can
            be hard to communicate your expectations and there are countless
            unknowns that need to be uncovered ahead of time. Without a plan in
            place, milestones get missed and development costs soar as problems
            are fixed on the fly.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row pb-8 md:pb-12 lg:pb-16 2xl:pb-24 gap-24 md:gap-12 lg:gap-24">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="heading-2 mb-8 2xl:mb-12">Workshops & Roadmaps</h2>
          <p className="body-0 mb-6 lg:mb-8">
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
