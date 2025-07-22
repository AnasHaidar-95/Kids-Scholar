



import React from "react";
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen p-8 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)",
      }}
    >
      <div className="w-full max-w-4xl shadow-xl rounded-2xl overflow-hidden">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/AaxrqDuw1Xk"
          title="Addition Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-center text-lg text-gray-700 mt-4 mb-10">
        {"Let's learn to add numbers together! ➕"}
      </p>

      <div className="flex space-x-6">
        <button
          onClick={() => navigate("/Add")}
          className="bg-[#bb4fa9] hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
        >
          ⬅ Back
        </button>
        <button
          onClick={() => navigate("/lesson")}
          className="bg-[#bb4fa9] hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default VideoPage;
