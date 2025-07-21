import { Theme } from "../../../theme";

const books = [
  {
    title: "رحلة الأرنب الفضولي",
    cover: "/images/back.jpeg",
  },
  {
    title: "الكنز المفقود",
    cover: "/images/ee.webp",
  },
  {
    title: "مغامرات في الغابة",
    cover: "/images/qqq.png",
  },
  {
    title: "القط المغامر",
    cover: "/images/rr.png",
  },
  {
    title: "رحلة إلى القمر",
    cover: "/images/ttt.jpg",
  },
];

export default function Books() {
  return (
    <div className={`min-h-screen ${Theme.primaryLightBlue} p-6`}>
      <h2 className="text-3xl font-bold text-center mb-10">📘 مكتبة القصص</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {books.map((book, index) => (
          <div key={index} className="group perspective w-44 h-64">
            <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:-rotate-y-6 group-hover:-translate-y-1">
              {/* Spine - الحافة الجانبية */}
              <div className="absolute left-0 top-0 h-full w-4 bg-gray-700 rounded-l-md shadow-inner z-0"></div>

              {/* الغلاف */}
              <div className="relative z-10 w-full h-full rounded-md overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20 z-20 rounded-md"></div>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-60 text-white text-center w-full text-sm py-2 z-30">
                  {book.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
