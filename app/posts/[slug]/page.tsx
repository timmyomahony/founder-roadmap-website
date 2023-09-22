import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { defaultMetadata } from "../../../utils/metadata";
import Page from "../../../components/layouts/Page";
import Container from "../../../components/Container";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <Page>
      <Container>
        <header className="mt-32 mb-16">
          <h1 className="text-5xl">{post.title}</h1>
          <p className="w-full lg:w-3/4 mt-4 text-xl text-zinc-400">
            {post.description}
          </p>
        </header>
        <hr className="w-32 border-t-2 border-zinc-800" />
        <main
          className="prose prose-white prose-lg mt-16 mb-32"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        ></main>
      </Container>
    </Page>
  );
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return defaultMetadata({
    title: post.title,
    description: post.description,
  });
};
