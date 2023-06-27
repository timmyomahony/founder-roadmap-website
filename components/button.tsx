import cx from "classnames";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type Props = {
  theme?: string;
  className?: string;
  icon?: any;
  external?: boolean;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({
  theme = "default",
  className,
  icon,
  external,
  children,
  ...props
}: Props) => {
  const defaultClassNames =
    "button cursor-pointer bg-green-300 text-white text-zinc-900 font-medium py-1 lg:py-3 px-3 lg:px-6 text-base inline-flex items-center gap-2 transition duration-400 ease-in hover:-translate-y-px hover:shadow-sm";

  const themeClassNames = {
    default: "",
  }[theme];

  const classNames = cx(className, defaultClassNames, themeClassNames);

  if (external === true) {
    icon = <ArrowTopRightOnSquareIcon />;
  }

  if (props.href) {
    return (
      <Link className={classNames} href={props.href} {...props}>
        {icon && <span className="w-4 h-4">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
