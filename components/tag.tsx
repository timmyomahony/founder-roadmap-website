import cx from "classnames";
import Link from "next/link";
import { HashtagIcon } from "@heroicons/react/20/solid";

export default function Tag({ slug, theme = "default" }) {
  const defaultClassNames =
    "rounded-full px-5 py-1 text-sm inline-flex items-center gap-1 transition duration-400 ease-linear";

  const themeClassNames = {
    default: "border-2 border-black hover:bg-black hover:text-beige",
    dark: "border-2 border-black bg-black text-white hover:underline",
  }[theme];

  const classNames = cx(defaultClassNames, themeClassNames);

  return (
    <Link className={classNames} href={`/tags/${slug}/`}>
      <HashtagIcon className="h-4 w-4" /> <span>{slug}</span>
    </Link>
  );
}
