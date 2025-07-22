import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";

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

  // تحميل القصة حسب ID
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(`http://localhost:5300/api/stories/${id}`);
        setStoryPages(res.data.pages || []);
        setCoverImage(res.data.cover || "/images/story/nono/nono.png");
      } catch (error) {
        console.error("Error loading story:", error);
      }
    };
    fetchStory();
  }, [id]);

  // تحميل الأصوات
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

  // قراءة النصوص بصوت
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

  // تشغيل القراءة عند الانتقال للصفحة التالية
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

  // عند إغلاق المكون
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
        console.warn("🔇 تحتاج تفاعل المستخدم لتشغيل الصوت");
      });
    }

    setAudioStarted(true);
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="flex flex-col items-center p-40 px-4 overflow-hidden bg-blue-500 min-h-screen">
        <button
          onClick={handleToggleAudio}
          className="mb-4 px-5 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
        >
          {isPlaying ? "🔇 Pause Music" : "🔊 Play Music"}
        </button>

        <div className="border-blue-500 border w-full max-w-5xl flex justify-center">
          {storyPages.length > 0 ? (
            <HTMLFlipBook
              width={450}
              height={450}
              size="stretch"
              showCover={true}
              mobileScrollSupport={true}
              maxShadowOpacity={0.5}
              drawShadow={true}
              useMouseEvents={true}
              className="shadow-xl rounded-lg border border-gray-300 bg-white"
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
              {/* الغلاف */}
              <div className="w-full h-full bg-white p-0 m-0 overflow-hidden">
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* صفحات القصة */}
              {storyPages.map((page, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 shadow-inner p-6 flex flex-col items-center justify-start gap-4"
                  style={{ minHeight: 450 }}
                >
                  <img
                    src={page.imageUrl}
                    alt={`page-${index}`}
                    className="w-full max-h-64 object-contain rounded shadow"
                  />
                  <p className="pt-10 text-gray-900 text-lg leading-relaxed text-justify">
                    {page.text}
                  </p>
                </div>
              ))}

              {/* صفحة النهاية */}
              <div className="bg-green-100 border shadow-inner flex flex-col items-center justify-center text-2xl font-bold text-green-800 rounded-xl select-none p-8">
                <p>✅ The End</p>
                <p className="text-base mt-3 font-semibold">
                  Thank you for reading!
                </p>
              </div>
            </HTMLFlipBook>
          ) : (
            <p className="text-white text-xl font-semibold mt-10">
              📖 جاري تحميل القصة...
            </p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
