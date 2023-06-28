import Divider from "../../components/Divider";
import ProfilePic from "../../images/timmy-omahony.jpg";
import LinkedIcon from "../../icons/linkedin.svg";

export default function Bio() {
  return (
    <section className="flex flex-col pt-8 md:pt-12 lg:pt-16 2xl:pt-32 pb-8 md:pb-12 lg:pb-16 2xl:pb-24 gap-16 lg:gap-24">
      <Divider text={"More about me"} image={ProfilePic} />
      <div className="grid grid-cols-6">
        <div className="col-start-3 col-span-3 flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <p>
            I&apos;ve been an independent software developer for over 10 years.
            In that time I&apos;ve built everything from simple marketing
            websites to entire SAAS platforms from scratch, so I&apos;ve got
            plenty of experience coding and building.
          </p>
          <p>
            That said, I started with a degree in computer science, so my
            superpower is problem solving. In short, I&apos;m great at
            understanding ideas, breaking them down into digestible pieces and
            bringing those pieces together into apps.
          </p>
          <p>
            This means I love helping founders in the first part of their
            journey: creating a roadmap for development.
          </p>
          <p className="xl:mt-10">
            <a
              className="group text-green-300 text-base flex gap-3 items-center"
              href="https://www.linkedin.com/in/timmy-omahony/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIcon className="w-5" />
              <span className="group-hover:underline">
                Connect with me on LinkedIn
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
