import React from "react";
import { BrainCircuit, Calculator } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

// Floating background icon (optional)
const FloatingIcon = ({ Icon, style }) => (
  <Icon
    className="text-gray-300 opacity-10 text-[4rem] lg:text-[6rem] absolute animate-float"
    style={style}
  />
);

const GameCard = ({ title, icon: Icon, colorClass, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className={`relative bg-white rounded-2xl shadow-lg p-6 cursor-pointer text-center transition-transform hover:scale-105 overflow-hidden border border-gray-300 ${colorClass}`}
    >
      <div className="z-10 relative">
        <div className="p-4 rounded-full bg-white shadow mb-4 mx-auto w-fit">
          <Icon size={40} color="#333" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">
          Play games and learn {title.toLowerCase()} in a fun way!
        </p>
      </div>
      {/* Icon background decoration */}
      <Icon className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
    </div>
  );
};

export default function GamePage() {
  return (
    <div
      className=" flex flex-col min-h-screen font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)`,
      }}
    >
      <Navbar />

      <div className="p-25 min-h-screen">
        {" "}
        {/* Optional floating icons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingIcon Icon={Calculator} style={{ top: "20%", left: "10%" }} />
          <FloatingIcon
            Icon={BrainCircuit}
            style={{ bottom: "15%", right: "15%" }}
          />
        </div>
        <main className="flex-grow relative z-10 px-6 sm:px-10 lg:px-20 py-16 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#bb4fa9] mb-10">
            🕹️ Choose Your <span className="text-[#FFFACD]">Game</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
            <GameCard
              title="Math"
              icon={Calculator}
              colorClass="hover:border-blue-400"
              route="/math-quiz"
            />
            <GameCard
              title="Science"
              icon={BrainCircuit}
              colorClass="hover:border-green-400"
              route="/science"
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
