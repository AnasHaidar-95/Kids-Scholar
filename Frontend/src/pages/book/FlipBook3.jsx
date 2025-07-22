import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import { sinseStory } from "../../../storyData";
import { Theme } from "../../../theme";

export default function FlipBook3() {
  const bookRef = useRef();
  const audioRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [voices, setVoices] = useState([]);
  const [audioStarted, setAudioStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
        if (bookRef.current) {
          bookRef.current.pageFlip().flipNext();
        }
      }, 1000);
      return;
    }

    if (index === 0) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(texts[index]);

    const femaleEnglishVoice =
      voices.find(
        (v) =>
          v.lang.startsWith("en") && v.name.toLowerCase().includes("female")
      ) ||
      voices.find((v) => v.name.includes("Google UK English Female")) ||
      voices.find((v) => v.lang.startsWith("en"));

    if (femaleEnglishVoice) {
      utterance.voice = femaleEnglishVoice;
    }

    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.onend = () => readAllTexts(texts, index + 1);
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (currentPage === 0 || voices.length === 0) return;

    const leftPage = currentPage;
    const rightPage = currentPage + 1;
    const textsToRead = [];

    if (leftPage - 1 < sinseStory.length) {
      textsToRead.push(sinseStory[leftPage - 1].text);
    }
    if (rightPage - 1 < sinseStory.length) {
      textsToRead.push(sinseStory[rightPage - 1].text);
    }

    if (textsToRead.length > 0 && voices.length > 0) {
      readAllTexts(textsToRead);
    }
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
      audio.volume = 0.02;
      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.warn("تحتاج تفاعل المستخدم لتشغيل الصوت");
      });
    }

    setAudioStarted(true);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center p-10 px-4 overflow-hidden bg-blue-500 min-h-screen">
      {/* زر تشغيل/إيقاف الموسيقى */}
      <button
        onClick={handleToggleAudio}
        className="mb-4 px-5 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
      >
        {isPlaying ? "🔇 Pause Music" : "🔊 Play Music"}
      </button>

      {/* الكتاب */}
      <div className="border-blue-500 border w-full max-w-5xl flex justify-center">
        <HTMLFlipBook
          width={350}
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

            if (newPage >= sinseStory.length + 1 && audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              setIsPlaying(false);
            }
          }}
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {/* الغلاف */}
          <div className="w-full h-full bg-[url('/images/story/sinse/sinse.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center text-white font-bold text-3xl border border-gray-300 shadow-inner"></div>

          {/* صفحات القصة */}
          {sinseStory.map((page, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-300 shadow-inner p-6 flex flex-col items-center justify-start gap-4`}
              style={{ minHeight: 450 }}
            >
              <img
                src={page.image}
                alt={`page-${index}`}
                className="w-full max-h-64 object-contain rounded shadow"
              />
              <p className="pt-10 text-gray-900 text-lg leading-relaxed text-justify">
                {page.text}
              </p>
            </div>
          ))}

          {/* النهاية */}
          <div className="bg-green-100 border border-green-300 shadow-inner flex flex-col items-center justify-center text-2xl font-bold text-green-800 rounded-xl select-none p-8">
            <p>✅ The End</p>
            <p className="text-base mt-3 font-semibold">
              Thank you for reading!
            </p>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
