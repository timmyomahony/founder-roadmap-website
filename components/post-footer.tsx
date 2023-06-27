import Post from "../types/post";

import AboutMe from "./about-me";
import RelatedPosts from "./related-posts";

const PostFooter = ({ post }: { post: Post }) => {
  return (
    <footer className="mt-12 lg:mt-24 xl:mt-32">
      <div className="w-full">
        <div className="w-full lg:w-8/12">
          <AboutMe />
        </div>
      </div>
      <div className="mt-12 lg:mt-24 w-full">
        {/* @ts-expect-error Server Component */}
        <RelatedPosts post={post} />
      </div>
    </footer>
  );
};

export default PostFooter;
