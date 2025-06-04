import React from "react";

const Surprise: React.FC = () => {
  return (
    <div
      id="surprise"
      className="min-h-screen bg-pink-100 grid grid-cols-3 gap-4 items-center justify-center p-8"
    >
      {/* 🌸 Left - Priya Image */}
      <div className="flex justify-center">
        <img
          src="/Priya.jpg"
          alt="Priya"
          className="w-full max-w-xs rounded-3xl object-cover shadow-2xl border-4 border-white"
        />
      </div>

      {/* 💌 Center - Message */}
      <div className="flex justify-center">
        <div className="bg-pink-200 rounded-2xl shadow-xl p-6 text-center max-w-md">
          <h2 className="text-4xl font-semibold text-pink-700 mb-4">
            To My Favorite Person 🎂
          </h2>
          <p className="text-gray-800 text-lg mb-4">
            I can’t express how lucky I am to have you. Your smile lights up my world.
            You deserve all the love, joy, and happiness in the universe.
          </p>
          <p className="text-pink-600 font-bold text-xl">
            Happy Birthday again! 💖
          </p>
        </div>
      </div>

      {/* 🎂 Right - Cake Image */}
      <div className="flex justify-center">
        <img
          src="/cake.jpg"
          alt="Cake"
          className="w-full max-w-xs rounded-3xl object-cover shadow-2xl border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Surprise;
