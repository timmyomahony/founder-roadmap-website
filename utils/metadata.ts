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
    "https://www.timmyomahony.com/timmy-omahony-social-media-card.jpg";
  let metadata = {
    title: title,
    description,
    images: [{ url: defaultImage }],
    url,
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@timmyomahony",
      images: [{ url: defaultImage }],
    },
    openGraph: {
      title: title,
      description: description,
      siteName: "Timmy O'Mahony",
      locale: "en-IE",
      type,
      images: [{ url: defaultImage }],
    },
    authors: [{ name: "Timmy O'Mahony", url: "https://founderroadmap.com" }],
    creator: "Timmy O'Mahony",
    icons: {
      icon: "https://timmyomahony.com/favicon/favicon-32x32.png",
      shortcut: "https://timmyomahony.com/favicon/apple-touch-icon.png",
      apple: "https://timmyomahony.com/favicon/apple-touch-icon.png",
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
