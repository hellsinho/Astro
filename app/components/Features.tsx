"use client";
import { motion } from "framer-motion";
import { Globe, Moon, Stars, Zap, Eye, Calendar, ChevronDown } from "lucide-react";

const cosmicFeatures = [
  {
    icon: <Globe className="text-purple-300" size={40} />,
    title: "Mapa Astral Completo",
    description: "Análise detalhada do seu signo solar, lunar e ascendente com posições planetárias precisas."
  },
  {
    icon: <Moon className="text-blue-300" size={40} />,
    title: "Tarot Virtual",
    description: "Consultas ilimitadas com interpretação inteligente das cartas e histórico salvo."
  },
  {
    icon: <Stars className="text-yellow-300" size={40} />,
    title: "Previsões Personalizadas",
    description: "Alertas sobre trânsitos planetários importantes e como afetam seu dia."
  },
  {
    icon: <Zap className="text-pink-300" size={40} />,
    title: "Relatórios de Compatibilidade",
    description: "Descubra sua conexão astral com parceiros, amigos ou colegas."
  },
  {
    icon: <Eye className="text-green-300" size={40} />,
    title: "Insights Diários",
    description: "Notificações personalizadas com conselhos astrológicos para seu dia."
  },
  {
    icon: <Calendar className="text-orange-300" size={40} />,
    title: "Calendário Astrológico",
    description: "Melhores momentos para tomar decisões baseado nos ciclos lunares."
  }
];

export default function CosmicFeatures() {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        // Gradiente radial sutil para profundidade
        backgroundImage: 'radial-gradient(circle at center, rgba(125, 211, 252, 0.05) 0%, transparent 70%)'
      }}
    >
      {/* Fundo Cósmico Animado */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nebulosa Roxa */}
        <motion.div
          animate={{
            x: ["0%", "5%", "0%", "-5%", "0%"],
            y: ["0%", "3%", "0%", "-3%", "0%"],
            scale: [1, 1.1, 0.9, 1.05, 1],
            transition: {
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-purple-900/20 rounded-full filter blur-[100px]"
        />
        
        {/* Nebulosa Azul */}
        <motion.div
          animate={{
            x: ["0%", "-8%", "0%", "8%", "0%"],
            y: ["0%", "-4%", "0%", "4%", "0%"],
            scale: [1, 0.95, 1.1, 0.98, 1],
            transition: {
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-900/15 rounded-full filter blur-[120px]"
        />

        {/* Partículas Estelares (Opcional) */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full py-12 px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Guia Astral</span> Completo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ferramentas precisas para desvendar os mistérios do universo e guiar seu caminho.
          </p>
        </motion.div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cosmicFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
              }}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 transition-all hover:border-purple-400/50 will-change-transform"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.7 }
                }}
                className="mb-6 flex justify-center"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elementos Adicionais */}
      
      {/* Indicador de Scroll Animado */}
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-300"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </motion.div>

      {/* Transição para próxima seção (Opcional) */}
      <svg 
        className="absolute bottom-0 w-full h-20 -mb-px"
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M1200 0L0 0 0 120 1200 120 1200 0Z" 
          className="fill-current text-gray-900"
        ></path>
      </svg>
    </section>
  );
}