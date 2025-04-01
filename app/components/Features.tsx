"use client";
import { motion } from "framer-motion";
import { Globe, Moon, Stars, Zap, Eye, Calendar, ChevronDown } from "lucide-react";

const features = [
  {
    icon: <Globe className="text-purple-300" size={36} />,
    title: "Mapa Astral Completo",
    description: "Análise detalhada do seu signo solar, lunar e ascendente com posições planetárias precisas."
  },
  {
    icon: <Moon className="text-blue-300" size={36} />,
    title: "Tarot Virtual",
    description: "Consultas ilimitadas com interpretação inteligente das cartas e histórico salvo."
  },
  {
    icon: <Stars className="text-yellow-300" size={36} />,
    title: "Previsões Personalizadas",
    description: "Alertas sobre trânsitos planetários importantes e como afetam seu dia."
  },
  {
    icon: <Zap className="text-pink-300" size={36} />,
    title: "Relatórios de Compatibilidade",
    description: "Descubra sua conexão astral com parceiros, amigos ou colegas."
  },
  {
    icon: <Eye className="text-green-300" size={36} />,
    title: "Insights Diários",
    description: "Notificações personalizadas com conselhos astrológicos para seu dia."
  },
  {
    icon: <Calendar className="text-orange-300" size={36} />,
    title: "Calendário Astrológico",
    description: "Melhores momentos para tomar decisões baseado nos ciclos lunares."
  }
];

export default function FullScreenFeatures() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Fundo Cósmico Aprimorado */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "5%", "0%", "-5%", "0%"],
            y: ["0%", "3%", "0%", "-3%", "0%"],
            transition: {
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-purple-900/20 rounded-full filter blur-[100px]"
        />
        <motion.div
          animate={{
            x: ["0%", "-8%", "0%", "8%", "0%"],
            y: ["0%", "-4%", "0%", "4%", "0%"],
            transition: {
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-900/15 rounded-full filter blur-[120px]"
        />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 w-full py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Guia Astral</span> Completo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ferramentas precisas para desvendar os mistérios do universo e guiar seu caminho.
          </p>
        </motion.div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)"
              }}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 transition-all hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex justify-center"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elemento de Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}   