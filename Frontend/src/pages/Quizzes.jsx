import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { FaCalculator, FaBook, FaFlask } from "react-icons/fa"; // أضفت FaFlask

// Floating Icon Component for Background
const FloatingIcon = ({ Icon, style }) => (
  <Icon
    className="text-gray-300 opacity-10 text-[4rem] lg:text-[6rem] absolute animate-float"
    style={style}
  />
);

export default function Quizzes() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-screen font-sans relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)",
      }}
    >
      <Navbar />

      <div className="p-25 min-h-screen">
        {/* Floating Background Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingIcon
            Icon={FaCalculator}
            style={{ top: "20%", left: "10%" }}
          />
          <FloatingIcon Icon={FaBook} style={{ top: "65%", right: "15%" }} />
        </div>

        {/* Main Content */}
        <main className="flex-grow relative z-10 px-6 sm:px-10 lg:px-20 py-16 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#bb4fa9] mb-8">
            🎯 Choose Your <span className="text-[#FFFACD]">Quiz</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            {/* Math Quiz Card */}
            <div
              onClick={() => navigate("/math-quiz")}
              className="relative bg-white rounded-2xl shadow-lg p-6 cursor-pointer text-center transition-transform hover:scale-105 overflow-hidden border border-blue-300"
            >
              <FaCalculator className="text-5xl text-[#87eb9d] mb-4 z-10 relative mx-auto" />
              <h2 className="text-2xl font-bold text-[#bb4fa9] mb-2 z-10 relative">
                Math Quiz
              </h2>
              <p className="text-gray-600 z-10 relative">
                Test your skills in addition, subtraction, multiplication &
                division!
              </p>
              <FaCalculator className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
            </div>

            {/* English Quiz Card */}
            <div
              onClick={() => navigate("/english-quiz")}
              className="relative bg-white rounded-2xl shadow-lg p-6 cursor-pointer text-center transition-transform hover:scale-105 overflow-hidden border border-pink-300"
            >
              <FaBook className="text-5xl text-[#ff85b3] mb-4 z-10 relative mx-auto" />
              <h2 className="text-2xl font-bold text-[#bb4fa9] mb-2 z-10 relative">
                English Quiz
              </h2>
              <p className="text-gray-600 z-10 relative">
                Practice with singular/plural, fill-in-the-blanks & more across
                10 levels!
              </p>
              <FaBook className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
            </div>

            {/* Science Quiz Card */}
            <div
              onClick={() => navigate("/science-quiz")}
              className="relative bg-white rounded-2xl shadow-lg p-6 cursor-pointer text-center transition-transform hover:scale-105 overflow-hidden border border-green-300"
            >
              <FaFlask className="text-5xl text-[#4ade80] mb-4 z-10 relative mx-auto" />
              <h2 className="text-2xl font-bold text-[#bb4fa9] mb-2 z-10 relative">
                Science Quiz
              </h2>
              <p className="text-gray-600 z-10 relative">
                Explore fun science questions and test your knowledge!
              </p>
              <FaFlask className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
