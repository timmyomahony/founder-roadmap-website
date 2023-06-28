"use client";

import Nav from "../Nav";
import Footer from "../Footer";
import { motion } from "framer-motion";

const Page = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <>
      {showHeader && <Nav />}
      <motion.div
        transition={{ duration: 0.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-0 m-0"
      >
        {children}
      </motion.div>
      {showFooter && <Footer />}
    </>
  );
};

export default Page;
