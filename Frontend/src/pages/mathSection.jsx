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
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


/* eslint-disable no-unused-vars */
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
    <div className="min-h-screen p-10 font-sans relative overflow-hidden bg-gradient-to-br from-[#fff3f9] to-[#dbeffe]">
      {/* Floating background icons */}
      <FloatingIcon Icon={FaStar} style={{ top: "10%", left: "5%" }} />
      <FloatingIcon Icon={FaSmile} style={{ top: "70%", right: "10%" }} />
      <FloatingIcon Icon={FaRocket} style={{ bottom: "10%", left: "1%" }} />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 py-20 space-y-16">
        {/* Hero Section */}
        {/* <section className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#bb4fa9] mb-4">
            🎉 Welcome to{" "}
            <span className="text-yellow-400">Math Adventures</span>!
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Get ready to explore numbers, solve puzzles, and become a math hero!
            🚀
          </p>
        </section> */}

        {/* Title + Back Button on Same Line */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/lessons")}
            className="bg-[#bb4fa9] hover:bg-[#a13d93] text-white font-bold py-2 px-6 rounded-xl shadow-md hover:scale-105 transition flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          {/* Hero Section */}
          <section className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#bb4fa9] mb-4">
              🎉 Welcome to{" "}
              <span className="text-yellow-400">Math Adventures</span>!
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Get ready to explore numbers, solve puzzles, and become a math
              hero! 🚀
            </p>
          </section>
          {/* Spacer to balance layout (can be empty or a fake element) */}
          <div className="w-[96px] hidden sm:block"></div>
        </div>

        {/* Cards Section */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {[
            {
              icon: <FaPlus className="text-blue-500" />,
              title: "Addition Fun",
              desc: "Learn to add numbers with exciting challenges!",
              link: "/Add",
            },
            {
              icon: <FaMinus className="text-red-500" />,
              title: "Subtract It",
              desc: "Take away and solve cool subtraction games!",
              link: "/Subtract",
            },
            {
              icon: <FaTimes className="text-green-500" />,
              title: "Multiply Magic",
              desc: "Discover multiplication tricks and tables!",
              link: "/Multiply",
            },
            {
              icon: <FaDivide className="text-purple-500" />,
              title: "Divide & Conquer",
              desc: "Learn how to share and divide easily!",
              link: "/Divide",
            },
            {
              icon: <FaChartPie className="text-yellow-500" />,
              title: "Fractions Fun",
              desc: "Learn to split and understand parts of a whole!",
              link: "/Fractions",
            },
          ].map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.link)}
              className="bg-white rounded-2xl shadow-xl p-6 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className="text-4xl">{card.icon}</div>
                <h2 className="text-xl font-bold text-gray-800">
                  {card.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Bottom Decoration Image */}
      {/* <div className="z-11 absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dos9zxky6/image/upload/v1753223890/fish_zswrme.png"
            alt="Decorative Bottom"
            className="w-60 sm:w-72 md:w-80 h-auto animate-swim"
          />
        </div>
      </div> */}
      <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 z-11 pointer-events-none">
        <img
          src="https://res.cloudinary.com/dos9zxky6/image/upload/v1753223890/fish_zswrme.png"
          alt="Fish"
          className="w-60 sm:w-72 md:w-80 h-auto animate-[swim_6s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
};

export default MathSection;
