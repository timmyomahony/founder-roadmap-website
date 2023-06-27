export default function Bio() {
  return (
    <section className="border-t border-t-black flex flex-col pt-8 md:pt-12 lg:pt-16 2xl:pt-32 pb-8 md:pb-12 lg:pb-16 2xl:pb-24 gap-16 lg:gap-24">
      <div className="w-full">
        <h2 className="heading-1">So why work with me?</h2>
      </div>
      <div className="w-full lg:w-7/12">
        <p className="body-1 mb-6 2xl:mb-8">
          I know the event and experiential marketing industry: the tight
          timelines, the impending deadlines, the uncertain landscape and the
          constantly changing down-stream client demands.
        </p>
        <p className="body-1 mb-6 2xl:mb-8">
          With a background in computer science, my superpower is{" "}
          <em>problem solving</em>. I&apos;m excellent at breaking down weird
          and wonderful experiential ideas and figuring out how to get them
          built.
        </p>
        <p className="body-1 mb-6 2xl:mb-8">
          Having worked independently for years, I&apos;m agile and able to move
          much more quickly than other vendors and agencies. I&apos;ve launched
          large internationaly publicised projects that had to work on day one
          so I understand the importance of reliability and performance.
        </p>
        <p className="body-1 mb-6 2xl:mb-8">
          Finally, I&apos;m a great communicator and collaborator and understand
          that you don&apos;t always care about *how* it gets done, just that it
          gets done well and on time.
        </p>
        {/* <p className="xl:mt-10 2xl:mt-16 ">
          <a
            className="callout-0"
            href="https://savvycal.com/timmyomahony/13fde46a"
            target="_blank"
            rel="noreferrer"
          >
            Read more about me
          </a>
        </p> */}
      </div>
    </section>
  );
}
