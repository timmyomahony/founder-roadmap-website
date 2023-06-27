import ClickableHeader from "./clickable-header";
import PostSummary from "./post-summary";
import Button from "./button";

import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { getRelatedPosts } from "../lib/posts";

const RelatedPosts = async ({ post }) => {
  const { nextPost, previousPost, relatedPosts } = await getRelatedPosts(post);

  const similarPostsText =
    relatedPosts.length > 1 ? "Similar Posts" : "Similar Post";

  return (
    <>
      {relatedPosts.length > 0 && (
        <section className="border-t border-black pt-12 md:pt-24">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-4/12">
              <h2 className="callout-1 text-black">
                <ClickableHeader id={"related-posts"}>
                  {similarPostsText}
                </ClickableHeader>
              </h2>
            </div>
            <div className="w-full lg:w-8/12 mt-12 lg:mt-0">
              <ul className="flex flex-col gap-10 lg:gap-12 xl:gap-16">
                {relatedPosts.map((post, i) => {
                  return (
                    <li key={i}>
                      <PostSummary post={post} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      )}
      {/* <section className="hidden lg:block w-full flex justify-between mt-32">
        {previousPost && (
          <Button
            icon=<ArrowLongLeftIcon />
            href={`/blog/${previousPost.frontmatter.slug}`}
          >
            Previous Post
          </Button>
        )}
        {nextPost && (
          <Button
            icon=<ArrowLongRightIcon />
            href={`/blog/${nextPost.frontmatter.slug}`}
          >
            Next Post
          </Button>
        )}
      </section> */}
    </>
  );
};

export default RelatedPosts;
