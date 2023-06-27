import Frontmatter from "./frontmatter";

type Post = {
  frontmatter: Frontmatter;
  html: string;
};

export default Post;
