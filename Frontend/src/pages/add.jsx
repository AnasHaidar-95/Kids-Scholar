import React from "react";
import { FaStar, FaSmile, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Floating background icon
const FloatingIcon = ({ Icon, style }) => (
  <Icon
    className="text-white opacity-10 text-[4rem] lg:text-[6rem] absolute animate-pulse pointer-events-none"
    style={style}
  />
);

const AddPage = () => {
  const lessons = [
    {
      number: 1,
      title: "Counting Numbers",
      description: "Learn to count from 1 to 10 with fun animals!",
      color: "bg-blue-100",
      link: "/VideoPage",
    },
    {
      number: 2,
      title: "Simple Addition",
      description: "Add numbers together with colorful objects!",
      color: "bg-green-100",
      link: "/CountVideo",
    },
    {
      number: 3,
      title: "Shapes Around Us",
      description: "Discover circles, squares, and triangles in everyday life!",
      color: "bg-yellow-100",
      link: "/VideoPage",
    },
  ];

  return (
    <div
      className="min-h-screen font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)`,
      }}
    >
      <FloatingIcon Icon={FaStar} style={{ top: "10%", left: "5%" }} />
      <FloatingIcon Icon={FaSmile} style={{ top: "50%", right: "10%" }} />
      <FloatingIcon Icon={FaRocket} style={{ bottom: "20%", left: "20%" }} />

      <div className="pb-32">
        {/* Hero Section */}
        <section className="text-center py-12 px-6 relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#bb4fa9] mb-4">
            Let's Explore <span className="text-yellow-400">Math Together</span>
            !
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Choose a lesson to start your math adventure! 🚀
          </p>
        </section>

        {/* Lessons Section */}
        <section className="px-6 lg:px-32 py-10 relative z-10">
          <h2 className="text-3xl font-bold text-[#bb4fa9] mb-8 text-center">
            Your Math Lessons
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
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

      {/* Bottom Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-auto z-0 pointer-events-none">
        <img
          src="../images/fish.png"
          alt="Decorative Bottom"
          className="w-80 h-auto"
        />
      </div>
    </div>
  );
};

// Lesson Card
const LessonCard = ({ number, title, description, color, link }) => {
  const navigate = useNavigate();

  const handleStartLesson = () => {
    navigate(link);
  };

  return (
    <div
      className={`${color} rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition transform duration-300 overflow-hidden flex items-start`}
    >
      <div className="flex-shrink-0 mr-6">
        <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shadow-md">
          <span className="text-3xl font-bold text-[#bb4fa9]">{number}</span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <button
          onClick={handleStartLesson}
          className="mt-4 px-4 py-2 bg-[#bb4fa9] text-white rounded-lg hover:bg-[#a03d8f] transition"
        >
          Start Lesson
        </button>
      </div>
    </div>
  );
};

export default AddPage;
