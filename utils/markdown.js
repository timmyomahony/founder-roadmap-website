import slugify from "slugify";

const headingRegex = /^#{2,5}. */;

/**
 * Create a TOC from Markdown source
 *
 * Inspired by:
 *  https://twitter.com/JoshWComeau/status/1334649414812659715
 *  https://pastebin.com/J454rg8f
 *
 * Note that we want to make the TOCs clickable, therefore we need our
 * headings to have id="blah" values. This is handled via our custom
 * MDX components in our components/mdxComponents component.
 *
 * @param {*} source
 * @returns
 */
const createTOC = (source) => {
  const headingLines = source.split("\n").filter((line) => {
    return line.match(headingRegex);
  });

  return headingLines.map((raw) => {
    const text = raw.replace(headingRegex, "");
    const slug = slugify(text, { lower: true });
    const level = raw.match(/\#/g).length;
    return { text, level, slug };
  });
};

export { createTOC };
