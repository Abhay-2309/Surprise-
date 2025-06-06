import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

// ✅ Image list (place actual files in /public/)
const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic5.jpg",
];

const Photogallery: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(images[index], {
    from: { opacity: 0, transform: "scale(0.8) rotate(-5deg)" },
    enter: { opacity: 1, transform: "scale(1) rotate(0deg)" },
    leave: { opacity: 0, transform: "scale(0.8) rotate(5deg)" },
    config: { duration: 800 },
  });

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-pink-600 mb-8 max-w-xl">
        🌸 Our Memories Together
      </h2>

      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
        {transitions((style, item) => (
          <animated.img
            key={item}
            src={item}
            alt="Memory"
            style={style}
            className="absolute w-full h-full object-cover rounded-3xl shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Photogallery;
