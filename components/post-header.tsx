import DateFormatter from "./date-formatter";
import { renderDescription } from "../lib/posts";

import Post from "../types/post";
import CoverImage from "./cover-images";

const PostHeader = async ({ post }: { post: Post }) => {
  const descriptionHtml = await renderDescription(post);
  return (
    <header className="flex flex-col md:flex-row items-end gap-8 md:gap-12 xl:gap-16 2xl:gap-24 border-b border-black pb-12 md:pb-24">
      <div
        className={`md:order-1 w-full ${
          post.frontmatter.image ? "md:w-7/12" : "md:w-9/12"
        }`}
      >
        <p className="callout-2">
          <DateFormatter dateString={post.frontmatter.date.toISOString()} />
        </p>
        <h1 className="mt-3 md:mt-6 2xl:mt-10 text-3xl lg:text-4xl 2xl:text-5xl leading-tight 2xl:leading-snug">
          {post.frontmatter.title}
        </h1>
        {descriptionHtml && (
          <div
            className="mt-4 2xl:mt-8 body-1 w-full xl:w-11/12"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          ></div>
        )}
      </div>
      {post.frontmatter.image && (
        <figure className="order-1 md:order-2 w-full md:w-5/12">
          <CoverImage post={post} />
        </figure>
      )}
    </header>
  );
};

export default PostHeader;
