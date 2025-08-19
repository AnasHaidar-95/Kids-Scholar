import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaSmile,
  FaRocket,
  FaEquals,
  FaArrowRight,
  FaPlay,
  FaArrowLeft,
} from "react-icons/fa";

/* eslint-disable no-unused-vars */
// Floating icon component
const FloatingIcon = ({ Icon, className }) => (
  <Icon
    className={`text-gray-500 opacity-20 text-[4rem] lg:text-[6rem] absolute animate-float ${className}`}
  />
);

const AddPage = () => {
  const navigate = useNavigate();
  const lessons = [
    {
      number: 1,
      title: "Counting Numbers",
      description: "Learn to count from 1 to 10 with fun animals!",
      color: "bg-[#dbeffe]",
      link: "/CountVideo",
    },
    {
      number: 2,
      title: "Simple Addition",
      description: "Add numbers together with colorful objects!",
      color: "bg-[#fff3f9]",
      link: "/VideoPage",
    },
    {
      number: 3,
      title: "Shapes Around Us",
      description: "Discover circles, squares, and triangles in everyday life!",
      color: "bg-[#dbeffe]",
      link: "/VideoPage",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans relative overflow-hidden bg-gradient-to-br from-[#fff3f9] to-[#dbeffe] pt-10">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcon Icon={FaStar} className="top-[10%] left-[5%]" />
        <FloatingIcon Icon={FaSmile} className="top-[30%] left-[40%]" />
        <FloatingIcon Icon={FaRocket} className="top-[40%] right-[15%]" />
        <FloatingIcon Icon={FaEquals} className="bottom-[28%] left-[5%]" />
      </div>

      {/* Main Content */}
      <div className="flex-grow relative z-10 px-6 sm:px-10 lg:px-20 py-16 mx-auto max-w-5xl">
        {/* Hero Section */}
        {/* <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#bb4fa9] mb-4">
            Let's Explore <span className="text-[#f0c96a]">Math Together</span>!
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Choose a lesson to start your math adventure! 🚀
          </p>
        </section> */}

        <div className="flex items-center justify-between mb-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/math")}
            className="bg-[#bb4fa9] hover:bg-[#a13d93] text-white font-bold py-2 px-6 rounded-xl shadow-md hover:scale-105 transition flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#bb4fa9] mb-4">
              Let's Explore{" "}
              <span className="text-[#f0c96a]">Math Together</span>!
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              Choose a lesson to start your math adventure! 🚀
            </p>
          </section>

          {/* Next Button */}
          {/* <button
            onClick={() => navigate("/CountLesson")}
            className="bg-[#f0c96a] hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-xl shadow-md hover:scale-105 transition flex items-center"
          >
            Next <FaArrowRight className="ml-2" />
          </button> */}
        </div>

        {/* Lessons Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#bb4fa9] mb-8 text-center">
            Your Math Lessons
          </h2>
          <div className="space-y-6">
            {lessons.map((lesson, index) => (
              <LessonCard
                key={index}
                number={lesson.number}
                title={lesson.title}
                description={lesson.description}
                color={lesson.color}
                link={lesson.link}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Lesson Card Component
const LessonCard = ({ number, title, description, color, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition transform duration-300 cursor-pointer border-t-4 border-[#bb4fa9]"
      onClick={() => navigate(link)}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-6">
          <div className="w-16 h-16 rounded-xl bg-[#f0c96a] flex items-center justify-center shadow-md border-4 border-white">
            <span className="text-3xl font-bold text-white">{number}</span>
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-[#bb4fa9] mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <button
            className="bg-[#bb4fa9] hover:bg-[#a13d93] text-white font-bold py-2 px-6 rounded-xl shadow-md hover:scale-105 transition flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              navigate(link);
            }}
          >
            <FaPlay className="mr-2" /> Start Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
