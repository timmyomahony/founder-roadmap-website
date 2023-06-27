export default function Offers() {
  return (
    <section className="flex flex-col md:flex-row gap-8 lg:gap-24">
      <div className="w-full md:w-1/2 border-t border-t-black flex flex-col gap-16 xl:gap-10 2xl:gap-16">
        <div className="flex justify-between items-center pt-8 md:pt-12 lg:pt-16">
          <h2 className="heading-1">Speed Dial</h2>
        </div>
        <div>
          <p className="body-1">
            If you need someone in your corner to help you pitch and untangle
            tricky technical requirements, put me on speed dial. I&apos;ll be
            available to help advise and plan your next award winning campaign.
          </p>
          <p className="mt-6 xl:mt-10 2xl:mt-16 ">
            <a
              className="callout-0"
              href="https://savvycal.com/timmyomahony/13fde46a"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a call to discuss
            </a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 border-t border-t-black flex flex-col gap-16 xl:gap-10 2xl:gap-16">
        <div className="flex justify-between items-center pt-8 md:pt-12 lg:pt-16">
          <h2 className="heading-1">One-Off</h2>
        </div>
        <div>
          <p className="body-1">
            When the rubber meets the road you need a reliable developer to get
            your campaign off the ground, let me help you build your big ideas.
            Every project is different, so organise a call and I&apos;ll help
            put a cost and scope together.
          </p>
          <p className="mt-6 xl:mt-10 2xl:mt-16 ">
            <a
              className="callout-0"
              href="https://savvycal.com/timmyomahony/13fde46a"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a call to discuss
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
