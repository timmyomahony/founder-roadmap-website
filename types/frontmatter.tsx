type Frontmatter = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  lastmod: Date;
  draft: boolean;
  tags: string[];
  image: string | undefined;
  imageCiteName: string | undefined;
  imageCiteUrl: string | undefined;
  ogImage: {
    url: string;
  };
};

export default Frontmatter;
