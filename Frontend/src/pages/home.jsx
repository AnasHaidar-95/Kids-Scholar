// import React from "react";
// import {
//   FaCalculator,
//   FaBook,
//   FaFlask,
//   FaAtom,
//   FaPlus,
//   FaEquals,
//   FaFont,
//   FaLaptopCode,
// } from "react-icons/fa";
// import { FaStar, FaSmile, FaRocket, FaPlay } from "react-icons/fa";

// // Floating icon component
// const FloatingIcon = ({ Icon, className }) => (
//   <Icon
//     className={`text-gray-500 opacity-20 text-[4rem] lg:text-[6rem] absolute animate-float ${className}`}
//   />
// );

// const Homepage = () => {
//   return (
//     <div
//       className="min-h-screen font-sans relative overflow-hidden pb-40 bg-[#87CEEB]"
//       // style={{
//       //   background: `linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)`,
//       // }}
//     >
//       {/* Floating Icons Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <FloatingIcon Icon={FaCalculator} className="top-[10%] left-[5%]" />
//         <FloatingIcon Icon={FaPlus} className="top-[20%] left-[40%]" />
//         <FloatingIcon Icon={FaEquals} className="top-[70%] left-[10%]" />
//         <FloatingIcon Icon={FaFont} className="top-[30%] right-[10%]" />
//         <FloatingIcon Icon={FaBook} className="top-[60%] right-[15%]" />
//         <FloatingIcon Icon={FaFlask} className="bottom-[15%] left-[25%]" />
//         <FloatingIcon Icon={FaAtom} className="bottom-[20%] right-[20%]" />
//         <FloatingIcon Icon={FaStar} className="top-[12%] right-[35%]" />
//         <FloatingIcon Icon={FaSmile} className="bottom-[8%] right-[5%]" />
//         <FloatingIcon Icon={FaRocket} className="top-[40%] left-[15%]" />
//         <FloatingIcon Icon={FaPlay} className="bottom-[28%] left-[10%]" />
//       </div>

//       {/* Hero Section */}
//       <section className="relative z-10 py-20 px-6 sm:px-10 lg:px-20 text-center max-w-5xl mx-auto">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#bb4fa9] mb-6">
//           Welcome to <span className="text-[#FFFACD]">KidsScholar</span>!
//         </h1>
//         <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
//           Fun learning for Math, English, Science & Programming. Explore
//           exciting games, lessons, and quizzes made just for kids!
//         </p>
//       </section>

//       {/* Subject Cards Grid 2x2 */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 lg:px-32 py-10 z-10 relative">
//         {/* Math */}
//         <div className="relative bg-[#ffffff] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden">
//           <FaCalculator className="text-5xl text-blue-500 mx-auto mb-4 z-10 relative" />
//           <h2 className="text-2xl font-bold text-blue-600 mb-2 z-10 relative">
//             Math Magic
//           </h2>
//           <p className="text-gray-600 z-10 relative">
//             Practice numbers, shapes, puzzles, and logic in a fun way!
//           </p>
//           <FaCalculator className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
//         </div>

//         {/* English */}
//         <div className="relative bg-[#ffffff] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden">
//           <FaBook className="text-5xl text-red-500 mx-auto mb-4 z-10 relative" />
//           <h2 className="text-2xl font-bold text-red-600 mb-2 z-10 relative">
//             English Fun
//           </h2>
//           <p className="text-gray-600 z-10 relative">
//             Learn new words, stories, grammar, and reading skills.
//           </p>
//           <FaBook className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
//         </div>

//         {/* Science */}
//         <div className="relative bg-[#ffffff] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden">
//           <FaFlask className="text-5xl text-green-500 mx-auto mb-4 z-10 relative" />
//           <h2 className="text-2xl font-bold text-green-600 mb-2 z-10 relative">
//             Cool Science
//           </h2>
//           <p className="text-gray-800 z-10 relative">
//             Explore animals, plants, planets, and cool experiments!
//           </p>
//           <FaFlask className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
//         </div>

//         {/* Programming */}
//         <div className="relative bg-[#ffffff] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden">
//           <FaLaptopCode className="text-5xl text-purple-500 mx-auto mb-4 z-10 relative" />
//           <h2 className="text-2xl font-bold text-purple-600 mb-2 z-10 relative">
//             Programming Fun
//           </h2>
//           <p className="text-gray-700 z-10 relative">
//             Learn coding basics, logic games, and create cool animations!
//           </p>
//           <FaLaptopCode className="absolute text-gray-300 text-[8rem] opacity-10 bottom-0 right-0" />
//         </div>
//       </section>

//       {/* Octopus Image Bottom Center */}
//       <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-auto z-10 pointer-events-none">
//         <img
//           src="../../images/oct1.png"
//           alt="Cute Octopus"
//           className="w-60 lg:w-80 object-contain"
//         />
//       </div>

//       {/* Robot Image Top Right */}
//       <div className="absolute top-0 right-10 p-4 z-10">
//         <img
//           src="../images/robot1.png"
//           alt="robot image"
//           className="w-40 lg:w-70 object-contain"
//         />
//       </div>

//       {/* Sticky Robot Image (Bottom Right) */}
//       {/* <div className="fixed top-40 right-10 z-40 pointer-events-none">
//         <img
//           src="../images/robot1.png"
//           alt="Robot"
//           className="w-24 sm:w-32 lg:w-80 object-contain"
//         />
//       </div> */}
//     </div>
//   );
// };

// export default Homepage;

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
  FaStar,
  FaSmile,
  FaRocket,
  FaPlay,
  FaQuoteLeft,
  FaLaptop,
  FaTabletAlt,
  FaMobileAlt,
} from "react-icons/fa";
import HeroSlider from "../components/HeroSlider";

// Floating icon component
const FloatingIcon = ({ Icon, className }) => (
  <Icon
    className={`text-gray-500 opacity-20 text-[4rem] lg:text-[6rem] absolute animate-float ${className}`}
  />
);

const Homepage = () => {
  return (
    <div className="font-sans relative overflow-hidden">
      <HeroSlider />

      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcon Icon={FaCalculator} className="top-[55%] left-[5%]" />
        <FloatingIcon Icon={FaPlus} className="top-[30%] left-[40%]" />
        <FloatingIcon Icon={FaEquals} className="top-[65%] right-[10%]" />
        <FloatingIcon Icon={FaFont} className="top-[60%] right-[5%]" />
        {/* <FloatingIcon Icon={FaBook} className="top-[60%] right-[15%]" /> */}
        <FloatingIcon Icon={FaFlask} className="bottom-[15%] left-[25%]" />
        <FloatingIcon Icon={FaAtom} className="bottom-[20%] right-[20%]" />
        <FloatingIcon Icon={FaStar} className="top-[42%] right-[35%]" />
        <FloatingIcon Icon={FaSmile} className="bottom-[8%] right-[5%]" />
        <FloatingIcon Icon={FaRocket} className="top-[40%] left-[15%]" />
        <FloatingIcon Icon={FaPlay} className="bottom-[28%] left-[5%]" />
      </div>

      {/* Welcome Section */}
      <section className="relative z-10 bg-white py-20 px-6 sm:px-10 lg:px-20 text-center max-w-5xl mx-auto rounded-b-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#bb4fa9] mb-6">
          Welcome to <span className="text-[#f0c96a]">KidsScholar</span>!
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Fun learning for Math, English, Science & Programming. Explore
          exciting games, lessons, and quizzes made just for kids!
        </p>
      </section>

      {/* Subject Cards */}
      <section className="relative z-10 bg-[#dbeffe] py-16 px-6 lg:px-32 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-full rounded-t-3xl shadow-lg">
        {[
          {
            icon: FaCalculator,
            title: "Math Magic",
            desc: "Practice numbers, shapes, puzzles, and logic in a fun way!",
          },
          {
            icon: FaBook,
            title: "English Fun",
            desc: "Learn new words, stories, grammar, and reading skills.",
          },
          {
            icon: FaFlask,
            title: "Cool Science",
            desc: "Explore animals, plants, planets, and cool experiments!",
          },
          {
            icon: FaLaptopCode,
            title: "Programming Fun",
            desc: "Learn coding basics, logic games, and create cool animations!",
          },
        ].map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl p-6 text-center hover:scale-105 transition transform duration-300 overflow-hidden cursor-pointer"
          >
            <Icon className="text-5xl text-[#f0c96a] mx-auto mb-4 z-10 relative" />
            <h2 className="text-2xl font-bold text-[#bb4fa9] mb-2 z-10 relative">
              {title}
            </h2>
            <p className="text-gray-700 z-10 relative">{desc}</p>
            <Icon className="absolute text-[#bb4fa9] text-[8rem] opacity-10 bottom-0 right-0" />
          </div>
        ))}
      </section>

      {/* Why KidsScholar */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-32 text-center rounded-b-3xl">
        <h2 className="text-4xl font-bold text-[#bb4fa9] mb-12">
          Why KidsScholar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#fff3f9] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaSmile className="text-5xl text-[#bb4fa9] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#bb4fa9] mb-2">
              Fun & Interactive
            </h3>
            <p className="text-gray-700">
              Learning is a joyful adventure with exciting games and challenges.
            </p>
          </div>
          <div className="bg-[#fff3f9] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaStar className="text-5xl text-[#bb4fa9] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#bb4fa9] mb-2">
              Skill-Based Learning
            </h3>
            <p className="text-gray-700">
              Build real skills with structured lessons in every subject.
            </p>
          </div>
          <div className="bg-[#fff3f9] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaRocket className="text-5xl text-[#bb4fa9] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#bb4fa9] mb-2">
              Made for Kids
            </h3>
            <p className="text-gray-700">
              Safe, colorful, and designed especially for curious young minds.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#dbeffe] py-20 px-6 sm:px-10 lg:px-32 text-center rounded-b-3xl">
        <h2 className="text-4xl font-bold text-[#bb4fa9] mb-12">
          What Parents Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              text: "My son loves KidsScholar! He actually asks to do his lessons.",
              name: "Sarah M.",
            },
            {
              text: "Perfect blend of fun and education. I highly recommend it!",
              name: "Daniel T.",
            },
            {
              text: "My daughter learned more in 2 weeks than in a whole semester!",
              name: "Lara K.",
            },
          ].map(({ text, name }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-3xl text-[#bb4fa9] mb-4" />
              <p className="text-gray-700 italic">“{text}”</p>
              <p className="text-sm font-semibold text-[#bb4fa9] mt-4">
                — {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-20 text-center px-6 rounded-b-3xl">
        <FaRocket className="text-6xl mx-auto text-[#f0c96a] mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-[#bb4fa9] mb-4">
          Ready to start the journey?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Sign up now and let your child explore a world of fun learning!
        </p>
        <button className="bg-[#f0c96a] text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:scale-105 transition">
          Join Now
        </button>
      </section>

      {/* Supported Devices */}
      <section className="bg-[#fff3f9] py-20 px-6 sm:px-10 lg:px-32 text-center rounded-b-3xl">
        <h2 className="text-4xl font-bold text-[#bb4fa9] mb-12">
          Available on All Devices
        </h2>
        <div className="flex flex-wrap justify-center gap-12 text-[#f0c96a]">
          <div className="flex flex-col items-center">
            <FaLaptop className="text-5xl mb-2" />
            <span className="text-lg font-semibold">Laptop</span>
          </div>
          <div className="flex flex-col items-center">
            <FaTabletAlt className="text-5xl mb-2" />
            <span className="text-lg font-semibold">Tablet</span>
          </div>
          <div className="flex flex-col items-center">
            <FaMobileAlt className="text-5xl mb-2" />
            <span className="text-lg font-semibold">Smartphone</span>
          </div>
        </div>
      </section>

      {/* Robot */}
      <div className="absolute top-230 right-10 p-4 z-10 pointer-events-none">
        <img
          src="../images/robot1.png"
          alt="robot image"
          className="w-40 lg:w-70 object-contain"
        />
      </div>
    </div>
  );
};

export default Homepage;


// #f0c96a
// #dbeffe
// #bb4fa9
// #fff3f9