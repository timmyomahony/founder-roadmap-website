const PostContent = ({ children, ...props }) => {
  return (
    <main className="break-words" {...props}>
      {children}
    </main>
  );
};

export default PostContent;
