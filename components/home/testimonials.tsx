export default function Testimonials() {
  return (
    <section className="border-t border-t-black py-12 md:py-20 xl:py-44 2xl:py-56">
      <div className="mb-12 lg:mb-20 xl:mb-32">
        <figure className="w-full lg:w-3/4 mx-auto flex flex-col justify-center text-center">
          <blockquote className="heading-2" cite="">
            &ldquo;Timmy has consistency delivered a number of tricky, creative
            and technically challenging projects over the past 7 years for us.
            He&apos;s our go-to guy for creative web dev.&rdquo;
          </blockquote>
          <figcaption className="callout-0 mt-4 lg:mt-8 xl:mt-16 2xl:mt-20">
            John Kilcullen -{" "}
            <cite>
              <a
                className="underline not-italic"
                href="https://verve.ie"
                target="_blank"
                rel="noreferrer"
              >
                Verve Live Agency
              </a>
            </cite>
          </figcaption>
        </figure>
      </div>
      {/* <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 text-center lg:text-left">
        <div className="w-full lg:w-1/2">
          <figure className="">
            <blockquote className="body-1" cite="">
              &ldquo;With Timmy&apos;s help we&apos;ve been able to close larger
              technical projects that we wouldn&apos;t have been comfortable
              pitching before.&rdquo;
            </blockquote>
            <figcaption className="callout-0 mt-4 lg:mt-10">
              Cathal O&apos;Reilly -{" "}
              <cite>
                <a
                  className="underline not-italic"
                  href="https://www.rooftoptwentytwo.ie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rooftop Twenty Two
                </a>
              </cite>
            </figcaption>
          </figure>
        </div>
        <div className="w-full lg:w-1/2">
          <figure className="">
            <blockquote className="body-1" cite="">
              &ldquo;Timmy has consistency delivered a number of tricky,
              creative and technically challenging projects over the past 7
              years for us. He&apos;s our go-to guy for creative web dev.&rdquo;
            </blockquote>
            <figcaption className="callout-0 mt-4 lg:mt-10">
              John Kilcullen -{" "}
              <cite>
                <a
                  className="underline not-italic"
                  href="https://verve.ie"
                  target="_blank"
                  rel="noreferrer"
                >
                  Verve Live Agency
                </a>
              </cite>
            </figcaption>
          </figure>
        </div>
      </div> */}
    </section>
  );
}
