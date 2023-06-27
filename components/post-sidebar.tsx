import Image from "next/image";

import cx from "classnames";

import Post from "../types/post";
import { createTOC } from "../utils/markdown";

import GithubIcon from "../icons/github.svg";
import LinkedIcon from "../icons/linkedin.svg";
import MastodonIcon from "../icons/mastodon.svg";
import TwitterIcon from "../icons/twitter.svg";
import Tag from "./tag";

import ClickableHeader from "./clickable-header";

type Props = {
  post: Post;
};

const Section = ({ children, title, id, className = "" }) => {
  return (
    <section className={className}>
      <h2 className="callout-1 text-black">
        <ClickableHeader id={id}>{title}</ClickableHeader>
      </h2>
      <nav className="mt-8">{children}</nav>
    </section>
  );
};

/**
 * Table of Contents
 *
 * TODO: Convert this to recursive function and use proper list nesting
 *
 * @param param0
 * @returns
 */
const TOCSection = ({ post }) => {
  const toc = createTOC(post.markdown);

  if (toc.length === 0) {
    return <></>;
  }

  return (
    <Section
      className="hidden lg:block"
      title="Table of Contents"
      id="table-of-contents"
    >
      <ol className="flex flex-col gap-4">
        {toc.map((item, i) => {
          return (
            <li
              className=""
              key={i}
              style={{
                paddingLeft: `${item.level - 2 * 10}px`,
              }}
            >
              <a className="hover:underline" href={`#${item.slug}`}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};

const ShareSection = () => {
  return (
    <Section className="hidden lg:block" title="Share" id="share">
      <ul className="mt-8 2xl:mt-12 flex gap-3 2xl:gap-4">
        <li className="w-4 h-4 lg:w-5 lg:h-5">
          <a
            href="https://www.linkedin.com/in/timmy-omahony/"
            title="Connect on LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIcon aria-label="LinkedIn icon" />
          </a>
        </li>
        <li className="w-4 h-4 lg:w-5 lg:h-5">
          <a
            href="https://www.linkedin.com/in/timmy-omahony/"
            title="Follow me on Mastodon"
            target="_blank"
            rel="noreferrer"
          >
            <MastodonIcon aria-label="Mastodon icon" />
          </a>
        </li>
        <li className="w-4 h-4 lg:w-5 lg:h-5">
          <a
            href="https://www.linkedin.com/in/timmy-omahony/"
            title="Follow me on Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon aria-label="Twitter icon" />
          </a>
        </li>
        <li className="w-4 h-4 lg:w-5 lg:h-5">
          <a
            href="https://github.com/timmyomahony"
            title="Check out my Github profile"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon aria-label="Github icon" />
          </a>
        </li>
      </ul>
    </Section>
  );
};

const TagsSection = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return <></>;
  }

  return (
    <Section title="Tags" id="tags">
      <ul className="flex gap-3">
        {tags &&
          tags.map((tag, i) => {
            return (
              <li key={i}>
                <Tag slug={tag}></Tag>
              </li>
            );
          })}
      </ul>
    </Section>
  );
};

const PostSidebar = ({ post, className = "", ...props }) => {
  return (
    <aside
      className={cx(className, "flex flex-col gap-16 2xl:gap-24")}
      {...props}
    >
      {/* <Image
        className="aspect-square object-cover"
        src={post.frontmatter.image}
        alt={post.frontmatter.title}
        quality={95}
        height={600}
        width={600}
        priority
      /> */}
      <TOCSection post={post} />
      {/* <ShareSection /> */}
      <TagsSection tags={post.frontmatter.tags} />
    </aside>
  );
};

export default PostSidebar;
