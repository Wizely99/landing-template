// RevealSection.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50px 100px -50px 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
