// components/GlassCard.tsx
"use client"; // Adicione esta linha pois Framer Motion requer Client-Side

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "backdrop-blur-md bg-black/30 border border-purple-900/50 rounded-lg shadow-xl shadow-purple-900/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}