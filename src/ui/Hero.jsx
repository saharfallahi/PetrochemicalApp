import Navbar from "./Navbar";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const heroImages = [
  {
    src: "./petro-sunrise.jpg",
    alt: "Petrochemical Sunrise",
  },
  {
    src: "./manandpetro.jpg",
    alt: "Petrochemical Plant",
  },
  {
    src: "./purplepetro.jpg",
    alt: "Petrochemical Night View",
  },
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const nextImage = () => {
    setSlideDirection("right");
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setSlideDirection("left");
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToImage = (index) => {
    setSlideDirection(index > currentImageIndex ? "right" : "left");
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-[1000px] overflow-hidden">
      {heroImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out
            ${
              index === currentImageIndex
                ? "translate-x-0 z-10"
                : index < currentImageIndex
                ? "translate-x-full"
                : "-translate-x-full"
            }
            ${
              slideDirection === "right"
                ? index === currentImageIndex
                  ? "animate-slideFromRight"
                  : "animate-slideToLeft"
                : index === currentImageIndex
                ? "animate-slideFromLeft"
                : "animate-slideToRight"
            }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-30 backdrop-blur-sm transition-all"
        aria-label="Previous image"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-30 backdrop-blur-sm transition-all"
        aria-label="Next image"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 h-full z-30 ">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full text-secondary-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-20">
            پتروشیمی ایران زمین
          </h1>
          <div className="flex gap-4">
            <button className="bg-primary-900 text-secondary-0 hover:bg-secondary-0 hover:text-primary-900 font-bold px-8 py-3 rounded-sm transition-colors">
              خدمات ما
            </button>
            <button className="bg-secondary-0 text-primary-900 hover:bg-primary-900 hover:text-secondary-0 font-bold px-8 py-3 rounded-sm transition-colors">
              تماس با ما
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
