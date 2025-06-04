import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-pink-600 mb-6 animate-bounce">
        🎉 Happy Birthday, My Love ❤️
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        On this special day, I’ve created something just for you...
      </p>
      <a href="#surprise">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition">
          See My Surprise
        </button>
      </a>
    </div>
  );
};

export default Home;
