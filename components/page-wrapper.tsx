"use client";

import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      transition={{ duration: 0.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-0 m-0"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
