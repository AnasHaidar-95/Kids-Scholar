import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const items = [
  { number: 1, label: "One " },
  { number: 2, label: "Two " },
  { number: 3, label: "Three " },
  { number: 4, label: "Four " },
  { number: 5, label: "Five " },
  { number: 6, label: "Six " },
  { number: 7, label: "Seven " },
  { number: 8, label: "Eight " },
  { number: 9, label: "Nine " },
  { number: 10, label: "Ten " },
  { number: 11, label: "Eleven " },
  { number: 12, label: "Twelve " },
  { number: 13, label: "Thirteen " },
  { number: 14, label: "Fourteen " },
  { number: 15, label: "Fifteen " },
  { number: 16, label: "Sixteen " },
  { number: 17, label: "Seventeen " },
  { number: 18, label: "Eighteen " },
  { number: 19, label: "Nineteen " },
  { number: 20, label: "Twenty " },
];

const CountLesson = () => {
  const navigate = useNavigate();

  const speak = (text) => {
    if (!window.speechSynthesis) {
      alert("Speech Synthesis not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel(); // لإيقاف أي نطق جاري قبل بدء الجديد
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <div
        className="min-h-screen p-40 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)",
        }}
      >
        <button
          onClick={() => navigate("/countVideo")}
          className="mb-6 self-start bg-[#bb4fa9] hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl transition"
        >
          ⬅ Back
        </button>

        <h1 className="text-5xl font-extrabold text-[#bb4fa9] mb-8 tracking-wide">
          Count With Us!
        </h1>
        <p className="mb-10 text-center text-[#bb4fa9] text-lg font-medium">
          Let's learn to count together
        </p>

        <div className="grid grid-cols-4 gap-6">
          {items.map(({ number, label }) => (
            <div
              key={number}
              className="bg-yellow-100 border-4 border-yellow-400 rounded-xl p-4 shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => speak(label)}
            >
              <div className="text-4xl font-bold text-orange-700">{number}</div>
              <div className="text-lg mt-2 font-medium text-gray-700">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CountLesson;
