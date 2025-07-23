import React from "react";
import {
  FaPlus,
  FaMinus,
  FaTimes,
  FaDivide,
  FaChartPie,
  FaStar,
  FaSmile,
  FaRocket,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

// Floating background icon
const FloatingIcon = ({ Icon, style }) => (
  <Icon
    className="text-[#a13d93] opacity-10 text-[4rem] lg:text-[6rem] absolute animate-pulse pointer-events-none"
    style={style}
  />
);

const MathSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen font-sans relative overflow-hidden p-40 bg-[#94cffd]">
        {/* Floating background icons */}
        <FloatingIcon Icon={FaStar} style={{ top: "10%", left: "5%" }} />
        <FloatingIcon Icon={FaSmile} style={{ top: "50%", right: "10%" }} />
        <FloatingIcon Icon={FaRocket} style={{ bottom: "20%", left: "20%" }} />

        {/* Hero message */}
        <section className="text-center py-12 px-6 relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#bb4fa9] mb-4">
            🎉 Welcome to{" "}
            <span className="text-yellow-400">Math Adventures</span>!
          </h1>
          <p className="text-xl text-gray-700">
            Get ready to explore numbers, solve puzzles, and become a math hero!
            🚀
          </p>
        </section>

        {/* Operation Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-32 py-10 relative z-10">
          <div
            onClick={() => navigate("/Add")}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-5xl">
                <FaPlus className="text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold">Addition Fun</h2>
            </div>
            <p className="text-gray-600">
              Learn to add numbers with exciting challenges!
            </p>
          </div>

          <div
            onClick={() => navigate("/Subtract")}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-5xl">
                <FaMinus className="text-red-500" />
              </div>
              <h2 className="text-2xl font-bold">Subtract It</h2>
            </div>
            <p className="text-gray-600">
              Take away and solve cool subtraction games!
            </p>
          </div>

          <div
            onClick={() => navigate("/Multiply")}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-5xl">
                <FaTimes className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold">Multiply Magic</h2>
            </div>
            <p className="text-gray-600">
              Discover multiplication tricks and tables!
            </p>
          </div>

          <div
            onClick={() => navigate("/Divide")}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-5xl">
                <FaDivide className="text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold">Divide & Conquer</h2>
            </div>
            <p className="text-gray-600">
              Learn how to share and divide easily!
            </p>
          </div>

          <div
            onClick={() => navigate("/Fractions")}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-5xl">
                <FaChartPie className="text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold">Fractions Fun</h2>
            </div>
            <p className="text-gray-600">
              Learn to split and understand parts of a whole!
            </p>
          </div>
        </section>

        {/* Bottom Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-auto z-0 pointer-events-none">
          <img
            src="../images/fish.png"
            alt="Decorative Bottom"
            className="w-80 h-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MathSection;
