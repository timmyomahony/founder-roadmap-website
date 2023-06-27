import Image from "next/image";
const CoverImage = ({ post }) => {
  return (
    <>
      <Image
        className="aspect-square object-cover"
        src={post.frontmatter.image}
        alt={post.frontmatter.title}
        quality={95}
        height={600}
        width={600}
        priority
      />
      {post.frontmatter.imageCiteName && post.frontmatter.imageCiteUrl && (
        <figcaption className="w-full flex justify-end">
          <a
            className="mt-3 text-gray-400 hover:underline leading-none font-light text-xs"
            href={post.frontmatter.imageCiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            {post.frontmatter.imageCiteName}
          </a>
        </figcaption>
      )}
    </>
  );
};

export default CoverImage;
