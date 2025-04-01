"use client";
import { motion, useAnimation } from "framer-motion";
import { ChevronRight, ChevronLeft, Play, Zap } from "lucide-react";
import { useState } from "react";

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState<"mapa" | "tarot">("mapa");
  const controls = useAnimation();

  const mockupData = {
    mapa: [
      { label: "Signo Solar", value: "Leão" },
      { label: "Signo Lunar", value: "Escorpião" },
      { label: "Ascendente", value: "Gêmeos" },
      { label: "Planeta Dominante", value: "Sol" }
    ],
    tarot: [
      { card: "A Torre", meaning: "Mudanças bruscas" },
      { card: "O Enamorado", meaning: "Escolhas importantes" },
      { card: "A Estrela", meaning: "Esperança renovada" }
    ]
  };

  const handleTabChange = async (tab: "mapa" | "tarot") => {
    await controls.start({ opacity: 0, x: tab === "mapa" ? 50 : -50 });
    setActiveTab(tab);
    await controls.start({ opacity: 1, x: 0 });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-purple-900/10 overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[90px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              Experimente
            </span> a Magia
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Veja como nossa plataforma transforma dados astrológicos em insights acionáveis.
          </p>
        </motion.div>

        {/* Controles de Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/50 backdrop-blur-md rounded-full p-1 border border-gray-800">
            <button
              onClick={() => handleTabChange("mapa")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${activeTab === "mapa" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}`}
            >
              Mapa Astral
            </button>
            <button
              onClick={() => handleTabChange("tarot")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${activeTab === "tarot" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}`}
            >
              Tarot Virtual
            </button>
          </div>
        </div>

        {/* Mockup do Produto */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={false}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Barra superior do mockup */}
            <div className="flex items-center px-6 py-3 bg-gray-800/50 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto text-sm text-gray-400">
                {activeTab === "mapa" ? "astroapp.com/mapa" : "astroapp.com/tarot"}
              </div>
            </div>

            {/* Conteúdo do mockup */}
            <div className="p-8 md:p-12">
              {activeTab === "mapa" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                      {/* Gráfico do mapa astral fictício */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full" />
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute"
                              style={{
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${i * 30}deg) translate(100px) rotate(-${i * 30}deg)`,
                                width: "6px",
                                height: "6px",
                                backgroundColor: i % 3 === 0 ? "#a78bfa" : "#3b82f6",
                                borderRadius: "50%"
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">Seu Mapa Astral</h3>
                    <div className="space-y-4">
                      {mockupData.mapa.map((item, index) => (
                        <div key={index} className="flex justify-between py-3 border-b border-gray-800">
                          <span className="text-gray-400">{item.label}</span>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-purple-500/20 transition-all">
                      <Zap size={20} />
                      Gerar Relatório Completo
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-8">Consulta de Tarot</h3>
                  <div className="flex justify-center gap-6 mb-10">
                    {mockupData.tarot.map((card, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="relative w-24 h-40 bg-gradient-to-b from-purple-900/50 to-blue-900/30 rounded-lg shadow-lg border border-purple-500/20 flex items-center justify-center cursor-pointer"
                      >
                        <span className="text-xs text-purple-300 absolute top-2 left-2">{index + 1}</span>
                        <div className="text-center px-2">
                          <div className="text-lg font-bold text-white mb-1">{card.card.split(" ")[0]}</div>
                          <div className="text-xs text-gray-300">{card.card.split(" ")[1]}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="max-w-md mx-auto bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-lg text-purple-300 mb-3">Interpretação</h4>
                    <p className="text-gray-300 mb-6">
                      {mockupData.tarot[0].meaning}. Este período traz transformações importantes em sua jornada.
                    </p>
                    <button className="flex items-center justify-center gap-2 mx-auto px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm">
                      <Play size={16} />
                      Nova Consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}