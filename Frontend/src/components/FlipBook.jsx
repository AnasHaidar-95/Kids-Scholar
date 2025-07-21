import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import { storyPages } from "../../storyData";
import { Theme } from "../../theme";
export default function FlipBook() {
  const bookRef = useRef();
  const audioRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [voices, setVoices] = useState([]);
  const [audioStarted, setAudioStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  // دالة القراءة النصية
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

  // تشغيل القراءة عند تغيير الصفحة
  useEffect(() => {
    if (currentPage === 0 || voices.length === 0) return;

    const leftPage = currentPage;
    const rightPage = currentPage + 1;
    const textsToRead = [];

    if (leftPage - 1 < storyPages.length) {
      textsToRead.push(storyPages[leftPage - 1].text);
    }
    if (rightPage - 1 < storyPages.length) {
      textsToRead.push(storyPages[rightPage - 1].text);
    }

    if (textsToRead.length > 0 && voices.length > 0) {
      readAllTexts(textsToRead);
    }
  }, [currentPage, voices, audioStarted]);

  // إيقاف الصوت عند تفكيك المكون
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // تشغيل أو إيقاف الصوت عند النقر على الزر
  const handleToggleAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio("/sounds/22.mp3");
      audio.loop = true;
      audio.volume = 0.08;
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
    <div className="flex flex-col items-center mt-10 px-4">
      {/* زر تشغيل/إيقاف الموسيقى */}
      <button
        onClick={handleToggleAudio}
        className="mb-4 px-5 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
      >
        {isPlaying ? "🔇 Pause Music" : "🔊 Play Music"}
      </button>

      {/* كتاب القصة */}
      <HTMLFlipBook
        width={100}
        height={100}
        size="stretch"
        showCover={true}
        mobileScrollSupport={true}
        maxShadowOpacity={0.7}
        className="shadow-2xl rounded-xl border border-gray-300 bg-white"
        ref={bookRef}
        onFlip={(e) => {
          const newPage = e.data;
          setCurrentPage(newPage);

          // إيقاف الصوت عند نهاية القصة
          if (newPage >= storyPages.length + 1 && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
          }
        }}
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        {/* الغلاف */}
        <div className="bg-[url('/images/back.jpeg')] bg-no-repeat bg-cover bg-center">
          {/* محتوى الغلاف */}
        </div>

        {/* صفحات القصة */}
        {storyPages.map((page, index) => (
          <div
            key={index}
            className={`${Theme.paimary} p-6 text-lg flex flex-col md:flex-row items-center gap-6 rounded-xl border border-yellow-300 shadow-inner `}
            style={{ lineHeight: 1.8 }}
          >
            <img
              src={page.image}
              alt={`page-${index}`}
              className="w-full h-52 rounded shadow mb-20"
            />
            <p className="text-gray-900 leading-relaxed text-justify md:w-2/3">
              {page.text}
            </p>
          </div>
        ))}

        {/* صفحة النهاية */}
        <div className="bg-green-100 flex flex-col items-center justify-center text-2xl font-bold text-green-800 rounded-xl select-none p-8">
          <p>✅ The End</p>
          <p className="text-base mt-3 font-semibold">Thank you for reading!</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
