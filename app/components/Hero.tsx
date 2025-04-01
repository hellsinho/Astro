"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import StarField from "./StarField";

export default function Hero() {
  // Configuração do movimento das nebulosas
  const nebulaVariants = {
    animate: {
      x: ["0%", "5%", "0%", "-5%", "0%"],
      y: ["0%", "-3%", "2%", "3%", "0%"],
      scale: [1, 1.05, 0.95, 1.03, 1],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const nebulaVariants2 = {
    animate: {
      x: ["0%", "5%", "0%", "-5%", "0%"],
      y: ["0%", "-3%", "2%", "3%", "0%"],
      scale: [1, 1.05, 0.95, 1.03, 1],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <StarField />

      {/* Efeito de nebulosa animada */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nebulosa Roxa */}
        <motion.div
          variants={nebulaVariants}
          initial="animate"
          animate="animate"
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />

        {/* Nebulosa Azul */}
        <motion.div
          variants={nebulaVariants2}
          initial="animate"
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2 mb-6"
        >
          <Star className="text-yellow-400 fill-current animate-pulse" size={28} />
          <span className="text-lg text-purple-300 font-light">ASTROSAAS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Descubra os <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">segredos</span> do universo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Mapas astrais precisos, tarot virtual e insights personalizados para guiar seu caminho.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-purple-500/20 transition-all"
        >
          Gerar Mapa Astral Grátis
        </motion.button>
      </div>
    </section>
  );
}