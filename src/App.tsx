import React, { useRef, useState } from "react";

// 📦 Components
import Home from "./components/Landing";
import Surprise from "./components/surprise";
import Photogallery from "./components/photogallary";
import Memories from "./components/memories";
import Diary from "./components/Diary";

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play(); // play returns a Promise
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Playback failed:", error);
    }
  };

  return (
    <div className="font-sans bg-pink-100 relative min-h-screen">
      {/* 🎉 Landing Page */}
      <Home />

      {/* 🎁 Birthday Message Section */}
      <Surprise />

      {/* 📸 Photo Gallery Section */}
      <Photogallery />

      {/* 🖼️ Slideshow of Memories */}
      <Memories />

      {/* 💌 Heartfelt Letter Section */}
      <Diary />

      {/* 🎵 Background Music */}
      <audio
        ref={audioRef}
        src="/birthday-song.mp3"
        loop
        style={{ display: "none" }}
      />

      {/* 🎵 Play/Pause Music Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default App;
