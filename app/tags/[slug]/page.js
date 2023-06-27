import { getPostsForTag, getAllTags } from "../../../lib/posts";

import Container from "../../../components/container";
import PostsList from "../../../components/posts-list";

const BlogTagListPage = async ({ params }) => {
  const posts = await getPostsForTag(params.slug);
  return (
    <Container>
      {posts && posts.length > 0 && (
        <PostsList posts={posts} label={`#${params.slug}`} />
      )}
    </Container>
  );
};

const generateStaticParams = async () => {
  const tags = await getAllTags();
  return tags.map((tag) => {
    return { slug: tag };
  });
};

export { generateStaticParams };

export default BlogTagListPage;
