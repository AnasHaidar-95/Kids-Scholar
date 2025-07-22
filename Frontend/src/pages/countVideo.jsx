import React from "react";
import { useNavigate } from "react-router-dom";

const CountVideo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen p-8 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)",
      }}
    >
      {/* فيديو يوتيوب متجاوب */}
      <div className="w-full max-w-4xl aspect-video shadow-xl rounded-2xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/mKSNQuQrsm0"
          title="Counting! | Mini Math Movies | Scratch Garden"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* وصف تحت الفيديو */}
      <p className="text-center text-lg text-gray-700 mt-6 mb-10">
        Let's learn to add numbers together! ➕
      </p>

      {/* أزرار التنقل */}
      <div className="flex space-x-6">
        <button
          onClick={() => navigate("/Add")}
          className="bg-[#bb4fa9] hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
        >
          ⬅ Back
        </button>
        <button
          onClick={() => navigate("/CountLesson")}
          className="bg-[#bb4fa9] hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default CountVideo;
