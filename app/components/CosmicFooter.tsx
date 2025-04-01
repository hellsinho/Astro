"use client";
import { motion } from "framer-motion";
import { Star, Instagram, Twitter, Youtube, Mail, Heart } from "lucide-react";

export default function CosmicFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900/30 border-t border-gray-800/50">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-900/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-900/10 rounded-full filter blur-[90px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Grade de conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Star className="text-purple-400 fill-current" size={24} />
              <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                AstroSaaS
              </span>
            </div>
            <p className="text-gray-400">
              Desvendando os mistérios do cosmos através da tecnologia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-300 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Explorar</h3>
            <ul className="space-y-3">
              {[
                { name: "Mapa Astral", href: "#mapa" },
                { name: "Tarot Virtual", href: "#tarot" },
                { name: "Planos", href: "#planos" },
                { name: "Blog Astrológico", href: "#blog" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links jurídicos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: "Termos de Serviço", href: "#terms" },
                { name: "Política de Privacidade", href: "#privacy" },
                { name: "Cookies", href: "#cookies" },
                { name: "FAQ", href: "#faq" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Inscreva-se</h3>
            <p className="text-gray-400">
              Receba insights astrológicos e atualizações diretamente no seu e-mail.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Mail size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divisor */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 my-12"
        />

        {/* Rodapé inferior */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AstroSaaS. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            Feito com <Heart className="fill-current text-pink-500/80 w-4 h-4" /> no Brasil
          </div>
          <p className="text-gray-500 text-sm">
            v1.0.0 · <span className="text-purple-400">Beta</span>
          </p>
        </motion.div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </footer>
  );
}