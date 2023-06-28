"use client";

import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

const Animate = ({ children }) => {
  return (
    <>
      <AnimatePresence>{children}</AnimatePresence>
      <ToastContainer
        position="bottom-left"
        hideProgressBar
        theme="dark"
        icon={false}
        autoClose={2000}
        closeButton={false}
      />
    </>
  );
};

export default Animate;
