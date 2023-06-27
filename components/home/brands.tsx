export default function Brands() {
  const brands = [
    "Heineken",
    "Facebook",
    "Coca Cola",
    "AIB",
    "Laya Healthcare",
    "Kelloggs",
    "Lidl",
    "Paddy Power",
    "PTSB",
    "RTE",
    "VHI",
    "Carlsberg",
    "Heinz",
    "Guinness",
    "ESB",
  ];
  return (
    <section className="py-12 md:py-24 xl:py-32 2xl:py-48">
      <h2 className="w-full lg:w-7/12 heading-1">
        Here are some of the brands that I&apos;ve helped clients pitch.
      </h2>
      <ul className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-none grid grid-cols-2 lg:grid-cols-5 grid-flow-row gap-y-4 md:gap-y-6 lg:gap-y-10 pt-12 lg:pt-24 2xl:pt-32">
        {brands.map((brand, i) => {
          return <li key={i}>{brand}</li>;
        })}
      </ul>
    </section>
  );
}
