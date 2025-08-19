import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { FaBook, FaCalculator, FaFlask } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const operations = [
  {
    name: "Addition",
    symbol: "+",
    color: "bg-[#f0c96a]",
    to: "/addition",
  },
  {
    name: "Subtraction",
    symbol: "−",
    color: "bg-[#dbeffe]",
    to: "/subtraction",
  },
  {
    name: "Multiplication",
    symbol: "×",
    color: "bg-[#bb4fa9]",
    to: "/multiplication",
  },
  {
    name: "Division",
    symbol: "÷",
    color: "bg-[#fff3f9]",
    to: "/division",
  },
];

/* eslint-disable no-unused-vars */
const FloatingIcon = ({ Icon, style }) => (
  <Icon
    className="text-[#bb4fa9] opacity-10 text-[4rem] lg:text-[6rem] absolute animate-float"
    style={style}
  />
);
function GameMathPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen font-sans relative overflow-hidden bg-gradient-to-br from-[#fff3f9] to-[#dbeffe] pt-20">
      {/* Background Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcon Icon={FaCalculator} style={{ top: "25%", left: "8%" }} />
        <FloatingIcon Icon={FaBook} style={{ top: "60%", right: "10%" }} />
        <FloatingIcon Icon={FaFlask} style={{ top: "40%", left: "50%" }} />
      </div>

      <div className="flex-grow w-full max-w-7xl mx-auto px-6 py-10 relative z-10">
        {/* Header Section */}
        <div className="flex items-center justify-between flex-wrap mb-24">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="bg-[#bb4fa9] hover:bg-[#a13d93] text-white font-bold px-5 py-2 rounded-full shadow-md transition mt-8"
          >
            ← Back
          </button>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#bb4fa9] text-center w-full sm:w-auto mt-8">
            🧮 Choose a <span className="text-[#f0c96a]">Math Operation</span>
          </h1>

          {/* Invisible spacer to balance layout on wide screens */}
          <div className="w-[100px] hidden sm:block"></div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {operations.map((op) => (
            <Link
              key={op.name}
              to={op.to}
              className={`rounded-2xl shadow-xl ${op.color} text-[#333] py-10 px-6 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl text-center`}
            >
              <span className="text-6xl font-extrabold mb-2">{op.symbol}</span>
              <span className="text-xl font-semibold">{op.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameMathPage;
