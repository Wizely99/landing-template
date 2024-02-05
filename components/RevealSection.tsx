// RevealSection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealSectionProps {
  children: React.ReactNode;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
      triggerOnce: false,
      rootMargin: `-250px 0px`,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
