import Button from "../../components/button";
import Page from "../../components/layouts/page";

import { defaultMetadata } from "../../utils/metadata";

const PrivacyPage = () => {
  return (
    <Page showFooter={false} showHeader={false}>
      <div className="fixed w-full h-full px-6 flex justify-center items-center">
        <div>
          <header>
            <h1 className="mt-12 md:mt-6 2xl:mt-10 text-4xl lg:text-4xl 2xl:text-5xl leading-tight 2xl:leading-snug">
              Privacy
            </h1>
          </header>
          <main className="mt-8">
            <div className="prose lg:prose-lg text-black ">
              <p>
                This is pretty straight forward. The only data I&apos;m
                collecting are anonymous analytics to track page views.
              </p>
              <p>
                For this I&apos;m using{" "}
                <a
                  href="https://usefathom.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fathom
                </a>{" "}
                in place of Google Analytics. Fathom is a privacy-first
                analytics library that purposely doesn&apos;t collect any
                personal data from users.
              </p>
              <p>
                This site is deployed as a static site on{" "}
                <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                  Vercel
                </a>
                .
              </p>
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
    title: "Privacy policy | Timmy O'Mahony",
    description: "Some information on how I collect and use data on this site.",
  });
};

export { generateMetadata };

export default PrivacyPage;
