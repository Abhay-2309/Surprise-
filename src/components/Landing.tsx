import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-5 md:mb-6 animate-bounce">
        🎉 Happy Birthday, My Love ❤️
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-7 md:mb-8 max-w-xl">
        On this special day, I’ve created something just for you...
      </p>
      <a href="#surprise" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition text-lg sm:text-base md:text-lg">
          See My Surprise
        </button>
      </a>
    </div>
  );
};

export default Home;
