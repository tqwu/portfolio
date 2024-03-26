"use client";
import { motion } from "framer-motion";
import AnimText from "./animations/animateText";

export default function IntroAnim() {
  return (
      <motion.div animate="visible">
        <motion.span>
          <AnimText delay={1} />
        </motion.span>
      </motion.div>
  );
}
