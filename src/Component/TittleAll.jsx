import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function TittlesAll({ tittle = "" }) {  
  const [ref, inView] = useInView({ triggerOnce: true });
  const letters = tittle.split("");

  return (
    <div ref={ref} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 1, // slower duration per letter for slow motion
            ease: "easeInOut", // smooth easing for slower motion
            delay: index * 0.1 // increased delay between each letter
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export default TittlesAll;
