import React from "react";
import { BrainCircuit, Calculator } from "lucide-react";
import { Theme } from "../../theme";
import { useNavigate } from "react-router-dom";

const GameCard = ({ title, icon: Icon, bgColor, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className={`flex flex-col items-center p-6 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer w-50 ${bgColor}`}
    >
      <div className="p-4 rounded-full mb-4 bg-white">
        <Icon size={40} color="#333" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default function GamePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4"
      style={{ backgroundColor: Theme.primaryLightBlue }}
    >
      <h1 className="text-4xl font-bold text-white mb-10">🎮 Games</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <GameCard
          title="Math"
          icon={Calculator}
          bgColor="bg-green-300"
          route="/math"
        />
        <GameCard
          title="Science"
          icon={BrainCircuit}
          bgColor="bg-yellow-500"
          route="/science"
        />
          </div>
          
    </div>
  );
}
