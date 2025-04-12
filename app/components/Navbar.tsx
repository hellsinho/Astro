"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links da navbar
  const links = [
    { name: "Início", href: "#home" },
    { name: "Mapa Astral", href: "#mapa" },
    { name: "Tarot", href: "#tarot" },
    { name: "Planos", href: "#planos" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${
        scrolled
          ? "backdrop-blur-md bg-black/80 border-b border-purple-900/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group"
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring" }}
          >
            <Star className="text-purple-400 fill-current group-hover:text-yellow-300 transition-colors" size={24} />
          </motion.div>
          <span className="text-xl font-playfair bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            AstroChat
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ 
                y: -2,
                color: "#a78bfa" 
              }}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Botões CTA */}
        <div className="hidden md:flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-gray-300 hover:text-white"
          >
            Login
          </motion.button>
          <motion.a
          href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-purple-500/30"
          >
            Cadastre-se
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  exit={{ x: -20 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-300 py-3 border-b border-gray-800"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex gap-4 mt-4 pb-4">
                <button className="flex-1 py-2 text-gray-300 border border-gray-700 rounded-lg">
                  Login
                </button>
                <button className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                  Cadastre-se
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}