import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseOver = (e) => {
      if (e.target?.tagName?.toLowerCase() === 'a' ||
          e.target?.tagName?.toLowerCase() === 'button' ||
          e.target?.closest?.('a') ||
          e.target?.closest?.('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: "2px solid #00f0ff",
      height: 32,
      width: 32,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(0, 240, 255, 0.2)",
      border: "2px solid #00f0ff",
      height: 64,
      width: 64,
      mixBlendMode: "difference"
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bg-neon-cyan rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ width: '8px', height: '8px' }}
        variants={dotVariants}
        animate="default"
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
