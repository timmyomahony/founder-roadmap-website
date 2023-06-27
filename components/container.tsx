export default function Container({ children, width = "lg", height = "none" }) {
  let outerClassName = "container";
  let innerClassName = "mx-auto";

  innerClassName += {
    none: "",
    xs: " mt-8 md:mt-16 xl:mt-24",
    sm: " mt-12 md:mt-24 xl:mt-32",
    normal: "mt-16 md:mt-32 xl:mt-48",
    lg: " mt-24 md:mt-48 xl:mt-64",
  }[height];

  innerClassName += {
    xs: " w-full lg:w-7/12",
    sm: " w-full lg:w-8/12",
    normal: " w-full lg:w-10/12",
    lg: " w-full",
  }[width];

  return (
    <div className={outerClassName}>
      <main className={innerClassName}>{children}</main>
    </div>
  );
}
