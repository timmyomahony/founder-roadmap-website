import Link from "next/link";

import { renderDescription } from "../lib/posts";

import ClickableHeader from "./clickable-header";
import DateFormatter from "./date-formatter";

const PostListItem = async ({ post }) => {
  // Convert the markdown frontmatter description to HTML
  const descriptionHtml = await renderDescription(post);

  return (
    <div>
      <p className="callout-1">
        <DateFormatter dateString={post.frontmatter.date.toISOString()} />
      </p>
      <h2 className="mt-2 lg:mt-4 heading-2">
        <Link
          className="hover:underline"
          href={`/blog/${post.frontmatter.slug}`}
        >
          {post.frontmatter.title}
        </Link>
      </h2>
      <div
        className="mt-2 lg:mt-4 body-1 w-full lg:w-10/12"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      ></div>
    </div>
  );
};

const PostList = ({ posts, label = "All Posts" }) => {
  return (
    <section className="w-full flex flex-col lg:flex-row border-t border-t-black pt-8 md:py-12 lg:pt-24">
      <aside className="hidden lg:block w-full lg:w-4/12">
        <h2 className="callout-1 text-black">
          <ClickableHeader id={"related-posts"}>{label}</ClickableHeader>
        </h2>
      </aside>
      <div className="w-full md:w-3/4 lg:w-8/12">
        <ul className="flex flex-col gap-12 md:gap-16 lg:gap-24">
          {posts.map((post, index) => {
            return (
              <li key={index}>
                {/* https://github.com/vercel/next.js/issues/42292 */}
                {/* @ts-expect-error Server Component */}
                <PostListItem post={post} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PostList;
