

import React from "react";
import {
  FaCalculator,
  FaBook,
  FaFlask,
  FaAtom,
  FaPlus,
  FaEquals,
  FaFont,
  FaLaptopCode,
} from "react-icons/fa";
import { FaStar, FaSmile, FaRocket, FaPlay } from "react-icons/fa";
import HeroSlider from "../components/HeroSlider";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";


// Floating icon component
const FloatingIcon = ({ Icon, className }) => (
  <Icon
    className={`text-gray-500 opacity-20 text-[4rem] lg:text-[6rem] absolute animate-float ${className}`}
  />
);

const Homepage = () => {
  return (
    <div>
      <div className="font-sans relative overflow-hidden pb-40">
        <HeroSlider />
        {/* Floating Icons Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingIcon Icon={FaCalculator} className="top-[10%] left-[5%]" />
          <FloatingIcon Icon={FaPlus} className="top-[20%] left-[40%]" />
          <FloatingIcon Icon={FaEquals} className="top-[70%] left-[10%]" />
          <FloatingIcon Icon={FaFont} className="top-[30%] right-[10%]" />
          <FloatingIcon Icon={FaBook} className="top-[60%] right-[15%]" />
          <FloatingIcon Icon={FaFlask} className="bottom-[15%] left-[25%]" />
          <FloatingIcon Icon={FaAtom} className="bottom-[20%] right-[20%]" />
          <FloatingIcon Icon={FaStar} className="top-[12%] right-[35%]" />
          <FloatingIcon Icon={FaSmile} className="bottom-[8%] right-[5%]" />
          <FloatingIcon Icon={FaRocket} className="top-[40%] left-[15%]" />
          <FloatingIcon Icon={FaPlay} className="bottom-[28%] left-[10%]" />
        </div>

        {/* Section 1 - أبيض خلفية */}
        <section className="relative z-10 bg-white py-20 px-6 sm:px-10 lg:px-20 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#bb4fa9] mb-6">
            Welcome to <span className="text-[#faeb9e]">KidsScholar</span>!
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Fun learning for Math, English, Science & Programming. Explore
            exciting games, lessons, and quizzes made just for kids!
          </p>
        </section>

        {/* Section 2 - بنفسجي فاتح خلفية */}
        <section className="relative z-10 bg-[#bb4fa9] py-16 px-6 lg:px-32 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-full rounded-t-3xl shadow-lg">
          {/* Math */}
          <div className="relative bg-white rounded-2xl p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer">
            <FaCalculator className="text-5xl text-[#bb4fa9] mx-auto mb-4 z-10 relative" />
            <h2 className="text-2xl font-bold text-[#6a1b9a] mb-2 z-10 relative">
              Math Magic
            </h2>
            <p className="text-gray-700 z-10 relative">
              Practice numbers, shapes, puzzles, and logic in a fun way!
            </p>
            <FaCalculator className="absolute text-[#bb4fa9] text-[8rem] opacity-10 bottom-0 right-0" />
          </div>

          {/* English */}
          <div className="relative bg-white rounded-2xl p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer">
            <FaBook className="text-5xl text-[#bb4fa9] mx-auto mb-4 z-10 relative" />
            <h2 className="text-2xl font-bold text-[#6a1b9a] mb-2 z-10 relative">
              English Fun
            </h2>
            <p className="text-gray-700 z-10 relative">
              Learn new words, stories, grammar, and reading skills.
            </p>
            <FaBook className="absolute text-[#bb4fa9] text-[8rem] opacity-10 bottom-0 right-0" />
          </div>

          {/* Science */}
          <div className="relative bg-white rounded-2xl p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer">
            <FaFlask className="text-5xl text-[#bb4fa9] mx-auto mb-4 z-10 relative" />
            <h2 className="text-2xl font-bold text-[#6a1b9a] mb-2 z-10 relative">
              Cool Science
            </h2>
            <p className="text-gray-700 z-10 relative">
              Explore animals, plants, planets, and cool experiments!
            </p>
            <FaFlask className="absolute text-[#bb4fa9] text-[8rem] opacity-10 bottom-0 right-0" />
          </div>

          {/* Programming */}
          <div className="relative bg-white rounded-2xl p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer">
            <FaLaptopCode className="text-5xl text-[#bb4fa9] mx-auto mb-4 z-10 relative" />
            <h2 className="text-2xl font-bold text-[#6a1b9a] mb-2 z-10 relative">
              Programming Fun
            </h2>
            <p className="text-gray-700 z-10 relative">
              Learn coding basics, logic games, and create cool animations!
            </p>
            <FaLaptopCode className="absolute text-[#bb4fa9] text-[8rem] opacity-10 bottom-0 right-0" />
          </div>
        </section>

        {/* Octopus Image Bottom Center */}
        <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-auto z-10 pointer-events-none">
          <img
            src="../../images/oct.png"
            alt="Cute Octopus"
            className="w-60 lg:w-80 object-contain"
          />
        </div>

        {/* Robot Image Top Right */}
        <div className="absolute top-0 right-10 p-4 z-10 pointer-events-none">
          <img
            src="../images/robot.png"
            alt="robot image"
            className="w-40 lg:w-70 object-contain"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
