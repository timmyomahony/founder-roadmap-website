import DateFormatter from "./date-formatter";
import Link from "next/link";

import { renderDescription } from "../lib/posts";
import CoverImage from "./cover-images";

const HeroPost = async ({ post }) => {
  const descriptionHtml = await renderDescription(post);
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 lg:gap-16 border-t border-t-black py-8 md:py-12 lg:py-24 xl:mt-24">
      <div
        className={`order-2 lg:order-1 min-h-full flex flex-col justify-between w-full md:w-3/4 ${
          post.frontmatter.image ? "lg:w-7/12" : "lg:w-3/4"
        }`}
      >
        <h3 className="hidden lg:block callout-1 text-black mb-12">
          Pinned Post
        </h3>
        <div>
          <p className="callout-2">
            <DateFormatter dateString={post.frontmatter.date.toISOString()} />
          </p>
          <h2 className="mt-2 lg:mt-8 text-3xl xl:text-5xl leading-tight 2xl:text-5xl 2xl:leading-snug">
            <Link
              href={`/blog/${post.frontmatter.slug}`}
              className="hover:underline"
            >
              {post.frontmatter.title}
            </Link>
          </h2>
          <div
            className="mt-4 lg:mt-8 body-1 w-full xl:w-3/4"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          ></div>
        </div>
      </div>
      {post.frontmatter.image && (
        <div
          className={`order-1 md:order-2 w-full md:w-1/4 ${
            post.frontmatter.image ? "lg:w-5/12" : "lg:w-1/4"
          }`}
        >
          <Link href={`/blog/${post.frontmatter.slug}`}>
            <CoverImage post={post} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default HeroPost;
