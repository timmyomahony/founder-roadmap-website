import slugify from "slugify";

import Callout from "./callout";
import Button from "./button";

import ClickableHeader from "./clickable-header";

/**
 * Styling Note
 *
 * Instead of using Tailwind as it was intended here, we relegate styles to
 * an external CSS file. The reasoning for this is how MDX renders nested
 * elements. For example when you use a `blockquote`, MDX will render the
 * <Paragraph> component with the <Blockquote> component. This makes nested
 * styling hard.
 */

const Paragraph = ({ children, props }) => {
  return (
    <p className="mdx-paragraph" {...props}>
      {children}
    </p>
  );
};

const Ahref = ({ href, children, ...props }) => {
  return (
    <a className="mdx-a" href={href} {...props}>
      {children}
    </a>
  );
};

const Ul = ({ children }) => {
  return <ul className="mdx-list">{children}</ul>;
};

const Ol = ({ children }) => {
  return <ol className="mdx-list">{children}</ol>;
};

const Li = ({ children }) => {
  return <li className="mdx-list-item">{children}</li>;
};

const H1 = ({ children }) => {
  let slug = slugify(children, { lower: true });
  return (
    <h1 className="font-bold text-3xl 2xl:text-4xl mt-8 lg:mt-14 2xl:mt-20 mb-4 lg:mb-8 2xl:mb-10">
      <ClickableHeader id={slug}>{children}</ClickableHeader>
    </h1>
  );
};

const H2 = ({ children, ...props }) => {
  let slug = slugify(children, { lower: true });
  return (
    <h2 className="font-bold text-2xl 2xl:text-4xl mt-8 lg:mt-14 2xl:mt-20 mb-4 lg:mb-8 2xl:mb-10">
      <ClickableHeader id={slug} className="">
        {children}
      </ClickableHeader>
    </h2>
  );
};

const H3 = ({ children }) => {
  let slug = slugify(children, { lower: true });
  return (
    <h3 className="font-bold text-2xl 2xl:text-3xl mt-8 lg:mt-14 2xl:mt-20 mb-4 lg:mb-8 2xl:mb-10">
      <ClickableHeader id={slug} className="">
        {children}
      </ClickableHeader>
    </h3>
  );
};

const H4 = ({ children }) => {
  let slug = slugify(children, { lower: true });
  return (
    <h4 className="font-bold text-xl 2xl:text-2xl mt-8 lg:mt-14 2xl:mt-20 mb-4 lg:mb-8 2xl:mb-10">
      <ClickableHeader id={slug} className="">
        {children}
      </ClickableHeader>
    </h4>
  );
};

const H5 = ({ children }) => {
  let slug = slugify(children, { lower: true });
  return (
    <h5 className="font-bold text-lg 2xl:text-xl mt-8 lg:mt-14 2xl:mt-20 mb-4 lg:mb-8 2xl:mb-10">
      <ClickableHeader id={slug} className="">
        {children}
      </ClickableHeader>
    </h5>
  );
};

const H6 = ({ children }) => {
  let slug = slugify(children, { lower: true });
  return (
    <h6 className="font-bold text-xl mt-8 lg:mt-14 2xl:mt-20 mb-4 lg:mb-8 2xl:mb-10">
      <ClickableHeader id={slug} className="">
        {children}
      </ClickableHeader>
    </h6>
  );
};

const Em = ({ children }) => {
  return <em>{children}</em>;
};

const Strong = ({ children }) => {
  return <strong>{children}</strong>;
};

const Hr = () => {
  return <hr />;
};

// Warning: These are automatically injected into a <p>
const Img = ({ src, alt, title }) => {
  return (
    <span className="block mt-8 lg:mt-14 2xl:mt-16 mb-8 lg:mb-14 2xl:mb-16">
      <img className="rounded-[2px]" src={src} alt={alt} title={title} />
      {title && (
        <span className="block w-full mt-3 text-gray-400 font-light text-xs">
          {title}
        </span>
      )}
    </span>
  );
};

const WrappedButton = ({ children, ...props }) => {
  return (
    <div className="flex">
      <Button {...props}>{children}</Button>
    </div>
  );
};

const Pre = ({ children, ...props }) => {
  return (
    <pre className="mdx-code" {...props}>
      {children}
    </pre>
  );
};

const Blockquote = ({ children, ...props }) => {
  return <blockquote className="mdx-blockquote">{children}</blockquote>;
};

const MDXComponents = {
  hr: Hr,
  p: Paragraph,
  a: Ahref,
  em: Em,
  strong: Strong,
  ol: Ol,
  ul: Ul,
  li: Li,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  img: Img,
  pre: Pre,
  blockquote: Blockquote,
  Callout: Callout,
  Button: WrappedButton,
};

export default MDXComponents;
