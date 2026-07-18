"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  /** Jeda antar huruf (detik). Default 0.04 */
  letterDelay?: number;
  /** Delay sebelum animasi mulai (detik). Default 0.2 */
  startDelay?: number;
}

export default function AnimatedHeading({
  text,
  className,
  letterDelay = 0.04,
  startDelay = 0.2,
}: AnimatedHeadingProps) {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: startDelay,
        staggerChildren: letterDelay,
        // -1 = urutan animasi dijalankan dari child TERAKHIR ke PERTAMA,
        // artinya huruf paling kanan muncul duluan lalu merambat ke kiri
        staggerDirection: -1,
      },
    },
  };

  const letter: Variants = {
    hidden: {
      opacity: 0,
      x: 24, // posisi awal sedikit ke kanan
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          style={{
            display: "inline-block",
            willChange: "transform, opacity, filter",
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
