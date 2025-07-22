import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/4143793/pexels-photo-4143793.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    subtitle: "Welcome to KidsScholar",
    title: ["Learn", "With Joy"],
    buttonText: "Get Started",
    buttonLink: "/login",
  },
  {
    image:
      "https://images.pexels.com/photos/4143798/pexels-photo-4143798.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    subtitle: "Play and Grow Together",
    title: ["Play", "and Learn"],
    buttonText: "JGet Started",
    buttonLink: "/login",
  },
  {
    image:
      "https://images.pexels.com/photos/3662668/pexels-photo-3662668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    subtitle: "Explore and Discover",
    title: ["Explore", "and Learn"],
    buttonText: "Get Started",
    buttonLink: "/login",
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen"
      style={{ maxHeight: "100vh" }}
    >
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-screen max-h-[100vh]">
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="w-full h-full object-cover object-center"
              style={{ maxHeight: "100vh" }}
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-6 md:px-16">
              <p className="bg-white text-[#bb4fa9] px-3 py-1 rounded mb-3 font-medium">
                {slide.subtitle}
              </p>
              <h2 className="text-white text-3xl sm:text-5xl font-bold mb-4">
                {slide.title[0]}{" "}
                <span className="text-pink-300">{slide.title[1]}</span>
              </h2>
              <a
                href={slide.buttonLink}
                className="bg-[#bb4fa9] hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded shadow transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
