import cx from "classnames";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const Callout = ({ children, title, showIcon = true, level = "default" }) => {
  const classNames = cx(
    "px-6 lg:px-8 py-6 lg:py-10 mb-8 lg:mb-14",
    {
      default: "border-2 border-black",
      info: "border-2 border-black",
      warning: "bg-[#ffe9a4]",
    }[level]
  );

  const icon = {
    default: <></>,
    info: <InformationCircleIcon className="block w-7 h-7" />,
    warning: <ExclamationCircleIcon className="block w-7 h-7" />,
  }[level];

  return (
    <section className={classNames}>
      {title && (
        <header className="flex items-center gap-2 lg:gap-5">
          {showIcon && icon}
          <h3 className="text-lg lg:text-xl 2xl:text-2xl font-bold">{title}</h3>
        </header>
      )}
      <div
        className={`callout__content ${title ? "mt-3 lg:mt-6 2xl:mt-8" : ""}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Callout;
