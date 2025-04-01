// components/FeatureCard.tsx
import { Globe } from "lucide-react";

export default function FeatureCard() {
  return (
    <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
      <Globe className="text-purple-400 mb-4" size={40} />
      <h3 className="text-xl text-white mb-2">Mapa Astral</h3>
      <p className="text-gray-300">
        Análise completa do seu signo solar, lunar e ascendente.
      </p>
    </div>
  );
}