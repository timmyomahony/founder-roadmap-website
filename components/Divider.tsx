import Image, { StaticImageData } from "next/image";

const Divider = ({
  text,
  image,
}: {
  text: string;
  image?: StaticImageData;
}) => {
  return (
    <div className="relative flex flex-col items-start">
      <hr className="h-[3px] border-none bg-zinc-800 w-full" />
      <div className="relative w-auto bg-zinc-800 text-white px-3 md:px-5 pt-2 pb-3 text-xs md:text-sm font-mono tracking-wide">
        {text}
        {image && (
          <Image className="absolute top-full left-0" src={image} alt={text} />
        )}
      </div>
    </div>
  );
};

export default Divider;
