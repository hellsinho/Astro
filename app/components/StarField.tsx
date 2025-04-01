"use client";
import { motion } from "framer-motion";

const Star = () => {
  const duration = Math.random() * 4 + 2;
  return (
    <motion.div
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className="absolute rounded-full bg-white"
      style={{
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

export default function StarField() {
  const stars = Array.from({ length: 100 }).map((_, i) => <Star key={i} />);
  return <div className="absolute inset-0 overflow-hidden">{stars}</div>;
}