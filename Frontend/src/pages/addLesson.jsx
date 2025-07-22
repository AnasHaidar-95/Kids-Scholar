// import React, { useState, useEffect } from "react";

// const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

// const AddLesson = () => {
//   const [num1, setNum1] = useState(1);
//   const [num2, setNum2] = useState(1);
//   const [sum, setSum] = useState(2);

//   useEffect(() => {
//     const newSum = num1 + num2;
//     setSum(newSum);

//     // Speak the sum aloud for kids
//     if ("speechSynthesis" in window) {
//       const utterance = new SpeechSynthesisUtterance(
//         `${num1} plus ${num2} equals ${newSum}`
//       );
//       utterance.rate = 0.5; // slower for kids
//       window.speechSynthesis.cancel(); // cancel previous utterances
//       window.speechSynthesis.speak(utterance);
//     }
//   }, [num1, num2]);

//   return (
//     <div
//       className="min-h-screen p-8 flex flex-col items-center justify-center"
//       style={{
//         background: `linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)`,
//       }}
//     >
//       <h1 className="text-5xl font-extrabold text-[#bb4fa9] mb-12 drop-shadow-lg">
//         Addition Adventure! ➕
//       </h1>

//       <div className="bg-white rounded-3xl p-10 shadow-xl max-w-md w-full flex flex-col items-center space-y-8">
//         <div className="flex space-x-6 w-full justify-center">
//           {[num1, num2].map((selectedNum, idx) => (
//             <select
//               key={idx}
//               value={selectedNum}
//               onChange={(e) =>
//                 idx === 0 ? setNum1(+e.target.value) : setNum2(+e.target.value)
//               }
//               className="bg-yellow-100 border-4 border-yellow-400 rounded-lg p-3 text-3xl font-bold text-orange-700 cursor-pointer transition hover:border-yellow-600"
//             >
//               {numbers.map((n) => (
//                 <option key={n} value={n}>
//                   {n}
//                 </option>
//               ))}
//             </select>
//           ))}
//         </div>

//         <div className="text-6xl font-extrabold text-blue-900 drop-shadow-lg">
//           {num1} + {num2} = <span className="text-yellow-400">{sum}</span>
//         </div>

//         <button
//           onClick={() => {
//             // Speak again on demand
//             if ("speechSynthesis" in window) {
//               const utterance = new SpeechSynthesisUtterance(
//                 `${num1} plus ${num2} equals ${sum}`
//               );
//               utterance.rate = 0.9;
//               window.speechSynthesis.cancel();
//               window.speechSynthesis.speak(utterance);
//             }
//           }}
//           className="bg-yellow-100 hover:bg-yellow-400 text-orange-900 font-extrabold text-xl px-8 py-4 rounded-xl shadow-md transition"
//         >
//           Hear it again 🔊
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddLesson;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

const AddLesson = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [sum, setSum] = useState(2);
  const navigate = useNavigate(); // تهيئة useNavigate

useEffect(() => {
  const newSum = num1 + num2;
  setSum(newSum);

  // Speak the sum aloud in clear English for kids
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(
      ` ${num1} plus ${num2} equals ${newSum}`
    );
    utterance.lang = "en-US"; // explicitly set language to English
    utterance.rate = 0.5; // slower pace for clarity
    utterance.pitch = 1.2; // slightly higher pitch for friendliness
    window.speechSynthesis.cancel(); // stop previous speech
    window.speechSynthesis.speak(utterance);
  }
}, [num1, num2]);


  return (
    <div
      className="p-40 min-h-screen flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)`,
      }}
    >
      <h1 className="text-5xl font-extrabold text-[#bb4fa9] mb-12 drop-shadow-lg">
        Addition Adventure! ➕
      </h1>

      <div className="bg-white rounded-3xl p-10 shadow-xl max-w-md w-full flex flex-col items-center space-y-8">
        <div className="flex space-x-6 w-full justify-center">
          {[num1, num2].map((selectedNum, idx) => (
            <select
              key={idx}
              value={selectedNum}
              onChange={(e) =>
                idx === 0 ? setNum1(+e.target.value) : setNum2(+e.target.value)
              }
              className="bg-yellow-100 border-4 border-yellow-400 rounded-lg p-3 text-3xl font-bold text-orange-700 cursor-pointer transition hover:border-yellow-600"
            >
              {numbers.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          ))}
        </div>

        <div className="text-6xl font-extrabold text-blue-900 drop-shadow-lg">
          {num1} + {num2} = <span className="text-yellow-400">{sum}</span>
        </div>

        <button
          onClick={() => {
            // Speak again on demand
            if ("speechSynthesis" in window) {
              const utterance = new SpeechSynthesisUtterance(
                `${num1} plus ${num2} equals ${sum}`
              );
              utterance.rate = 0.9;
              window.speechSynthesis.cancel();
              window.speechSynthesis.speak(utterance);
            }
          }}
          className="bg-yellow-100 hover:bg-yellow-400 text-orange-900 font-extrabold text-xl px-8 py-4 rounded-xl shadow-md transition"
        >
          Hear it again 🔊
        </button>

        {/* زر العودة */}
        <button
          onClick={() => navigate("/VideoPage")} // غيّر المسار حسب مسار صفحة الفيديو عندك
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold text-xl px-8 py-4 rounded-xl shadow-md transition mt-6"
        >
          Back to Video ⬅️
        </button>
      </div>
    </div>
  );
};

export default AddLesson;
