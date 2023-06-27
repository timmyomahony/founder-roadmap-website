const Divider = ({ text, image }: { text: string; image?: any }) => {
  return (
    <div className="relative flex flex-col items-start">
      <hr className="h-[3px] border-none bg-zinc-800 w-full" />
      <div className="w-auto bg-zinc-800 text-white px-5 py-2 text-sm font-mono font-medium tracking-wide">
        {text}
      </div>
    </div>
  );
};

export default Divider;
