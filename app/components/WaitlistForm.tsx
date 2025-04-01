"use client";
import { motion } from "framer-motion";
import { Mail, User, Calendar, Zap } from "lucide-react";
import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { toast, Toaster } from "sonner";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validação simples
    if (!email.includes("@")) {
      toast.error("Por favor, insira um e-mail válido");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("waitlist")
      .insert([{ 
        email, 
        name, 
        birthdate,
        signup_date: new Date().toISOString() 
      }]);

    if (error) {
      toast.error("Ocorreu um erro. Tente novamente.");
    } else {
      toast.success("Você foi adicionado à lista de espera!");
      setEmail("");
      setName("");
      setBirthdate("");
    }

    setLoading(false);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-900/10 to-black">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full filter blur-[90px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Cabeçalho */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/30 p-8 text-center border-b border-gray-800">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-4">
              <Zap className="text-purple-300" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Junte-se à Nossa Lista de Espera
            </h2>
            <p className="text-gray-300">
              Seja um dos primeiros a experimentar nossa plataforma e receba{" "}
              <span className="text-purple-300">10% de desconto</span> no lançamento!
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              {/* Campo Nome */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-500" size={20} />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                  required
                />
              </motion.div>

              {/* Campo Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-500" size={20} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Seu melhor e-mail"
                  required
                />
              </motion.div>

              {/* Campo Data de Nascimento */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="text-gray-500" size={20} />
                </div>
                <input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent [color-scheme:dark]"
                  placeholder="Data de nascimento"
                />
                <span className="text-xs text-gray-500 mt-1 block">
                  Opcional - Para personalizar seu mapa astral
                </span>
              </motion.div>

              {/* Botão de Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/30"
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Zap className="fill-current" size={20} />
                      Garantir Meu Desconto
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </form>

          {/* Rodapé */}
          <div className="px-8 pb-6 text-center">
            <p className="text-xs text-gray-500">
              Ao se inscrever, você concorda com nossos{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>

      {/* Notificações */}
      <Toaster 
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "#1e1b4b",
            border: "1px solid #6d28d9",
            color: "#fff"
          }
        }} 
      />
    </section>
  );
}