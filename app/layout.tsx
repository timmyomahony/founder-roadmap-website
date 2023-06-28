import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

import Animate from "../components/Animate";
import { defaultMetadata } from "../utils/metadata";

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--ibm-plex-sans",
});

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--ibm-plex-mono",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-900 text-white p-0 m-0 ${ibm_plex_sans.variable} ${ibm_plex_mono.variable} font-sans`}
      >
        <Animate>{children}</Animate>
        {process.env.NODE_ENV !== "development" && (
          <script
            src="https://cdn.usefathom.com/script.js"
            data-site="DROHMWBN"
            defer
          ></script>
        )}
      </body>
    </html>
  );
};

const generateMetadata = async () => {
  return defaultMetadata({
    title: "",
    description: "",
  });
};

export { generateMetadata };

export default RootLayout;
