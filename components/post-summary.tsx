import Link from "next/link";
import Image from "next/image";

import DateFormatter from "./date-formatter";

const PostSummary = ({ post }) => {
  return (
    <div className="flex gap-12 items-center">
      {post.frontmatter.image && (
        <div>
          <Link
            className="hover:underline"
            href={`/blog/${post.frontmatter.slug}`}
          >
            <Image
              className="aspect-square object-cover w-32 h-32"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              quality={95}
              height={256}
              width={256}
              priority
            />
          </Link>
        </div>
      )}
      <div className="">
        <p className="callout-2 text-[#504848]">
          <DateFormatter dateString={post.frontmatter.date.toISOString()} />
        </p>
        <h2 className="text-2xl lg:text-3xl 2xl:text-[2.1rem] leading-normal mt-2">
          <Link
            className="hover:underline"
            href={`/blog/${post.frontmatter.slug}`}
          >
            {post.frontmatter.title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default PostSummary;
