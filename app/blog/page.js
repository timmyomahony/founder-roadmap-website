import Container from "../../components/container";
import PostsList from "../../components/posts-list";
import HeroPost from "../../components/hero-post";

import { getAllPosts } from "../../lib/posts";
import { defaultMetadata } from "../../utils/metadata";

const BlogListPage = async () => {
  const posts = await getAllPosts();
  const pinnedPost = posts.find((post) => {
    return post.frontmatter.pinned;
  });
  const morePosts = posts.filter(
    (post) =>
      !pinnedPost || post.frontmatter.slug !== pinnedPost.frontmatter.slug
  );

  return (
    <Container>
      {pinnedPost && <HeroPost post={pinnedPost} />}
      {posts.length > 0 && <PostsList posts={morePosts} />}
    </Container>
  );
};

const generateMetadata = async () => {
  return defaultMetadata({
    title: "Blog posts & articles | Timmy O'Mahony",
    description: "Read my latest blog posts and articles - mostly tech",
  });
};

export { generateMetadata };

export default BlogListPage;
