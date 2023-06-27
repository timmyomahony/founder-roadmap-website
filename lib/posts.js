import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";
import strip from "strip-markdown";
const postsDirectory = join(process.cwd(), "content");

/**
 * Get Post Slugs
 *
 * @returns
 */
const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory).map((slug) => {
    return slug.replace(/\.mdx$/, "");
  });
};

/**
 * Get Post By Slug
 *
 * Get a single post given a slug
 *
 * FIXME: We're using this function for both rendering the description on the
 * blog list page as well as rendered everything on the blog detail page. This
 * means generating the blog list page will be slow as every post gets
 * rendered fully (when we only need the title and description from the
 * frontmatter). We should separate these out into two separate functions (or
 * add a flag to avoid fully rendering)
 *
 * @param slug
 * @returns
 */
const getPostBySlug = async (slug) => {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data: frontmatter, content: markdown } = matter(fileContents);

  return {
    markdown,
    frontmatter,
    readingTime: readingTime(fileContents),
  };
};

const getAllTags = async () => {
  const posts = await getAllPosts();
  return posts.reduce((prev, curr) => {
    if (curr.frontmatter.tags) {
      prev.push(...curr.frontmatter.tags);
    }
    return prev;
  }, []);
};

const getPostsForTag = async (tag) => {
  const posts = await getAllPosts();
  return posts.filter((post) => {
    if (post.frontmatter.tags) {
      return post.frontmatter.tags.includes(tag);
    }
    return false;
  });
};

/**
 * Get All Posts
 *
 * @returns
 */
const getAllPosts = async () => {
  let promises = getPostSlugs().map((slug) => {
    return getPostBySlug(slug);
  });
  return await Promise.all(promises).then((posts) => {
    return posts.sort((postA, postB) =>
      postA.frontmatter.date > postB.frontmatter.date ? -1 : 1
    );
  });
};

const getRelatedPosts = async (post) => {
  const allPosts = await getAllPosts();
  const index = allPosts.findIndex(
    (post_) => post_.frontmatter.slug === post.frontmatter.slug
  );

  // Get "next" post
  const nextPost = allPosts[index > 1 ? index - 1 : undefined];

  // Get "previous" post
  const previousPost =
    allPosts[index <= allPosts.length ? index + 1 : undefined];

  // Get up to 3 recent posts from the same tag
  const scores = [];
  let relatedPosts = [];

  if (post.frontmatter.tags) {
    post.frontmatter.tags.forEach((tag) => {
      allPosts.forEach((post_, i) => {
        if (
          post_.frontmatter.tags &&
          post_.frontmatter.tags.includes(tag) &&
          post_.frontmatter.slug !== post.frontmatter.slug
        ) {
          if (typeof scores[i] === "undefined") {
            scores[i] = [i, 0];
          }
          scores[i][1]++;
        }
      });
    });

    const sortedScores = scores
      .sort((a, b) => {
        return a[1] > b[1];
      })
      .filter((score) => typeof score !== "undefined")
      .slice(0, 3);

    relatedPosts = sortedScores.map((score) => allPosts[score[0]]);
  }

  return { nextPost, previousPost, relatedPosts };
};

const renderDescription = async (post) => {
  return await (
    await remark().use(html).process(post.frontmatter.description)
  ).toString();
};

const stripDescription = async (post) => {
  return await (
    await remark().use(strip).process(post.frontmatter.description)
  ).toString();
};

export {
  getPostSlugs,
  getPostBySlug,
  getAllPosts,
  getRelatedPosts,
  renderDescription,
  stripDescription,
  getAllTags,
  getPostsForTag
};
