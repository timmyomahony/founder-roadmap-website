interface Props {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

const defaultMetadata = ({
  title,
  description,
  url,
  image = undefined,
  type = "website",
}: Props) => {
  const defaultImage =
    "https://www.founderroadmap.com/founder-roadmap-social-card.jpg";
  let metadata = {
    title: title,
    description,
    images: [{ url: defaultImage }],
    url,
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@founderroadmap",
      images: [{ url: defaultImage }],
    },
    openGraph: {
      title: title,
      description: description,
      siteName: "Founder Roadmap",
      locale: "en-IE",
      type,
      images: [{ url: defaultImage }],
    },
    authors: [{ name: "Founder Roadmap", url: "https://founderroadmap.com" }],
    creator: "Founder Roadmap",
    icons: {
      icon: "https://founderroadmap.com/favicon/favicon-32x32.png",
      shortcut: "https://founderroadmap.com/favicon/apple-touch-icon.png",
      apple: "https://founderroadmap.com/favicon/apple-touch-icon.png",
    },
  };
  if (image) {
    metadata.images = [{ url: image }];
    metadata.twitter.images = [{ url: image }];
    metadata.openGraph.images = [{ url: image }];
  }
  return metadata;
};

export { defaultMetadata };
