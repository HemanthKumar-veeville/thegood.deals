import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    rotateY: 0,
    x: 0,
  },
  out: {
    opacity: 0,
    rotateY: -90,
    x: 100,
  },
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.25 }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformOrigin: "center left",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
