import LinkedIcon from "../../icons/linkedin.svg";
import MastodonIcon from "../../icons/mastodon.svg";
import GithubIcon from "../../icons/github.svg";
import TwitterIcon from "../../icons/twitter.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Page from "../../components/layouts/page";

import { defaultMetadata } from "../../utils/metadata";

const ContactItem = ({ title, text, icon = undefined, ...props }) => {
  return (
    <a
      className="group block relative cursor-pointer px-4 py-3 w-full border-2 border-black transition-all duration-100 ease-out"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <h2 className="flex justify-between items-center text-base lg:text-xl leading-normal font-bold">
        <span className="group-hover:underline">{title}</span>{" "}
        {icon && <span>{icon}</span>}
      </h2>
      <p className="mt-1 body-0">{text}</p>
    </a>
  );
};

const ContactPage = () => {
  return (
    <Page showHeader={false} showFooter={false}>
      <main className="fixed w-full h-full flex justify-center items-start md:items-center">
        <ul className="w-full flex flex-col gap-3 p-6 md:w-[500px] mx-auto">
          <li>
            <ContactItem
              title="Email"
              icon={<EnvelopeIcon className="h-5 ml-2" />}
              text="Send me an email"
              href="mailto:hey@timmyomahony.com"
            />
          </li>
          <li>
            <ContactItem
              title="LinkedIn"
              icon={<LinkedIcon className="h-4 ml-2" />}
              text="Connect with me on LinkedIn"
              href="https://www.linkedin.com/in/timmy-omahony/"
            />
          </li>
          <li>
            <ContactItem
              title="Twitter"
              icon={<TwitterIcon className="h-4 ml-2" />}
              text="Follow me on Twitter"
              href="https://twitter.com/timmyomahony/"
            />
          </li>
          <li>
            <ContactItem
              title="Github"
              icon={<GithubIcon className="h-4 ml-2" />}
              text="Find me on Github"
              href="https://github.com/timmyomahony/"
            />
          </li>
          <li>
            <ContactItem
              title="Mastodon"
              icon={<MastodonIcon className="h-4 ml-2" />}
              text="Follow me on Mastodon"
              href="https://mastodon.social/@timmyomahony/"
            />
          </li>
        </ul>
      </main>
    </Page>
  );
};

const generateMetadata = async () => {
  return defaultMetadata({
    title: "Get in touch | Timmy O'Mahony",
    description:
      "Reach out to me directly via email or connect with me on LinkedIn, Mastodon etc.",
  });
};

export { generateMetadata };

export default ContactPage;
