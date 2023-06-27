import Button from "../../components/button";
import Page from "../../components/layouts/page";

import { defaultMetadata } from "../../utils/metadata";

const MoreInformationPage = () => {
  return (
    <Page showFooter={false} showHeader={false}>
      <div className="fixed w-full h-full px-6 flex justify-center items-center">
        <div>
          <header>
            <h1 className="mt-12 md:mt-6 2xl:mt-10 text-4xl lg:text-4xl 2xl:text-5xl leading-tight 2xl:leading-snug">
              More Information
            </h1>
          </header>
          <main className="mt-8">
            <div className="prose lg:prose-lg text-black ">
              <p>
                This is a static website built primarily with Next.js & Tailwind
                and is currently hosted on Vercel.
              </p>
              <p>In previous iterations it used Craft 3, Django & Jekyll.</p>
            </div>
            <p className="mt-8 lg:mt-12">
              <Button href="/" theme="dark">
                Back to homepage
              </Button>
            </p>
          </main>
        </div>
      </div>
    </Page>
  );
};

const generateMetadata = async () => {
  return defaultMetadata({
    title: "More information about this site | Timmy O'Mahony",
    description:
      "A little bit more information about how this website is put together",
  });
};

export { generateMetadata };

export default MoreInformationPage;
