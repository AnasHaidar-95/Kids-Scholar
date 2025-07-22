import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import { FaEquals, FaMinus, FaPlus, FaRocket, FaSmile, FaStar } from "react-icons/fa";

export default function FlipBook() {
  const { id } = useParams();
  const bookRef = useRef();
  const audioRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [voices, setVoices] = useState([]);
  const [audioStarted, setAudioStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [storyPages, setStoryPages] = useState([]);
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(`http://localhost:5300/api/stories/${id}`);
        setStoryPages(res.data.pages || []);
        setCoverImage(res.data.cover || "./images/story/nono/nono.png");
      } catch (error) {
        console.error("Error loading story:", error);
      }
    };
    fetchStory();
  }, [id]);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = speechSynthesis.getVoices();
      setVoices(allVoices);
    };
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }, []);

  const readAllTexts = (texts, index = 0) => {
    if (index >= texts.length) {
      setTimeout(() => {
        bookRef.current?.pageFlip().flipNext();
      }, 1000);
      return;
    }
    if (index === 0) speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(texts[index]);
    const selectedVoice =
      voices.find(
        (v) =>
          v.lang.startsWith("en") && v.name.toLowerCase().includes("female")
      ) ||
      voices.find((v) => v.name.includes("Google UK English Female")) ||
      voices.find((v) => v.lang.startsWith("en"));

    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.onend = () => readAllTexts(texts, index + 1);
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (currentPage === 0 || voices.length === 0 || storyPages.length === 0)
      return;

    const textsToRead = [];
    const leftIndex = currentPage - 1;
    const rightIndex = currentPage;

    if (storyPages[leftIndex]) textsToRead.push(storyPages[leftIndex].text);
    if (storyPages[rightIndex]) textsToRead.push(storyPages[rightIndex].text);

    if (textsToRead.length > 0) readAllTexts(textsToRead);
  }, [currentPage, voices, audioStarted]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleToggleAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio("/sounds/22.mp3");
      audio.loop = true;
      audio.volume = 0.1;
      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.warn("User interaction required to play audio");
      });
    }

    setAudioStarted(true);
    setIsPlaying(!isPlaying);
  };
  const FloatingIcon = ({ Icon, className }) => (
    <Icon
      className={`text-gray-500 opacity-20 text-[4rem] lg:text-[6rem] absolute animate-float ${className}`}
    />
  );

  return (
    <div className="bg-[#dbeffe] min-h-screen flex flex-col items-center justify-center py-40 px-4">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcon Icon={FaPlus} className="top-[10%] left-[5%]" />
        <FloatingIcon Icon={FaMinus} className="top-[20%] left-[40%]" />
        <FloatingIcon Icon={FaStar} className="top-[42%] right-[35%]" />
        <FloatingIcon Icon={FaSmile} className="bottom-[8%] right-[5%]" />
        <FloatingIcon Icon={FaRocket} className="top-[40%] left-[13%]" /> 
        <FloatingIcon Icon={FaEquals} className="bottom-[28%] left-[5%]" />

      </div>
      <button
        onClick={handleToggleAudio}
        className="mb-6 px-6 py-2 bg-[#bb4fa9] text-white font-bold rounded-full shadow hover:bg-[#a94694] transition"
      >
        {isPlaying ? "🔇 Pause Music" : "🔊 Play Music"}
      </button>

      <div className="w-full max-w-5xl border-2 border-[#f0c96a] rounded-xl shadow-2xl bg-white overflow-hidden">
        {storyPages.length > 0 ? (
          <HTMLFlipBook
            width={350}
            height={450}
            size="stretch"
            showCover={true}
            mobileScrollSupport={true}
            maxShadowOpacity={0.5}
            drawShadow={true}
            useMouseEvents={true}
            className="book rounded-xl"
            ref={bookRef}
            onFlip={(e) => {
              const newPage = e.data;
              setCurrentPage(newPage);

              if (newPage >= storyPages.length + 1 && audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
              }
            }}
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <div className="w-full h-full bg-white">
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {storyPages.map((page, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 flex flex-col items-center justify-start gap-4 text-gray-800 shadow-inner rounded-xl"
                style={{ minHeight: 450 }}
              >
                <img
                  src={page.imageUrl}
                  alt={`page-${index}`}
                  className="w-full max-h-64 object-contain rounded shadow"
                />
                <p className="pt-6 text-lg leading-relaxed text-center">
                  {page.text}
                </p>
              </div>
            ))}

            <div className="bg-green-100 border shadow-inner flex flex-col items-center justify-center text-2xl font-bold text-green-800 rounded-xl p-8">
              <p>✅ The End</p>
              <p className="text-base mt-3 font-semibold">
                Thank you for reading!
              </p>
            </div>
          </HTMLFlipBook>
        ) : (
          <p className="text-[#bb4fa9] text-xl font-semibold mt-10">
            📖 Loading story...
          </p>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
