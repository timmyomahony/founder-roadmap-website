import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import {
  getAllPosts,
  getPostBySlug,
  stripDescription,
} from "../../../lib/posts";
import Container from "../../../components/container";
import MDXComponents from "../../../components/mdx-components";
import PostContent from "../../../components/post-content";
import PostFooter from "../../../components/post-footer";
import PostHeader from "../../../components/post-header";
import PostSidebar from "../../../components/post-sidebar";
import { defaultMetadata } from "../../../utils/metadata";

// https://rehype-pretty-code.netlify.app/
// https://vscodethemes.com/?sortBy=installs&type=light
const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

const BlogPostPage = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <Container>
      <article className="mb-12 lg:mb-32">
        <PostHeader post={post} />
        <div className="mt-12 lg:mt-32 flex flex-col lg:flex-row gap-8 lg:gap-24">
          <PostContent className="w-full lg:w-8/12">
            {/*https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support*/}
            <MDXRemote
              source={post.markdown}
              components={MDXComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
                },
              }}
            />
          </PostContent>
          <PostSidebar className="w-full lg:w-4/12" post={post} />
        </div>
        <PostFooter post={post} />
      </article>
    </Container>
  );
};

const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post, i) => ({
    slug: post.frontmatter.slug,
  }));
};

// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata
const generateMetadata = async ({ params }) => {
  const post = await getPostBySlug(params.slug); // this is cached by Next.js
  const description = await stripDescription(post);
  return defaultMetadata({
    title: post.frontmatter.title,
    description,
    image: post.frontmatter.image,
  });
};

export { generateStaticParams, generateMetadata };

export default BlogPostPage;
