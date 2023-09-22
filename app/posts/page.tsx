import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { defaultMetadata } from "../../utils/metadata";
import Page from "../../components/layouts/Page";
import Container from "../../components/Container";

function PostCard(post: Post) {
  return (
    <div>
      <h2 className="mb-1 text-2xl">
        <Link href={post.url} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-base text-zinc-400">{post.description}</p>
    </div>
  );
}

export default function PostsPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Page showFooter={false}>
      <Container>
        <header className="py-10 lg:py-12 border-b-2 border-zinc-800 border-dashed">
          <h1 className="text-5xl">Resources</h1>
          <p className="mt-4 text-lg text-zinc-400">
            This is a small collection of useful posts related to software
            development.
          </p>
        </header>
        <main>
          <ul className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {posts.map((post, idx) => (
              <li
                key={idx}
                className="pb-10 lg:pb-12 border-b-2 border-zinc-800 border-dashed"
              >
                <PostCard {...post} />
              </li>
            ))}
          </ul>
        </main>
      </Container>
    </Page>
  );
}

const generateMetadata = async () => {
  return defaultMetadata({
    title:
      "Helpful Resources For Non-Technical Founders of Software Businesses | Founder Roadmap",
    description:
      "Here is a collection of useful resources for non-technical founders when learnding a bit more about software. They'll hopefully help you on your path to funding.",
  });
};

export { generateMetadata };
