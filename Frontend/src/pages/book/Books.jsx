import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../../theme";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Books() {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get("http://localhost:5300/api/stories"); // أو استخدم VITE_API_BASE_URL
        setStories(res.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className={`min-h-screen ${Theme.primaryLightBlue}`}>
      <Navbar />
      <div className="min-h-screen p-40">
        <h2 className="text-3xl font-bold text-center mb-10">
          📘 Story Library
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stories.map((story) => (
            <div
              key={story._id}
              className="group perspective w-44 h-64 cursor-pointer"
              onClick={() => navigate(`/story/${story._id}`)}
            >
              <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:-rotate-y-6 group-hover:-translate-y-1">
                {/* Spine */}
                <div className="absolute left-0 top-0 h-full w-4 bg-gray-700 rounded-l-md shadow-inner z-0"></div>

                {/* Cover */}
                <div className="relative z-10 w-full h-full rounded-md overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20 z-20 rounded-md"></div>
                  <img
                    src={story.cover || "/images/placeholder.png"}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-center mt-2 font-semibold text-white">
                {story.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
