import React from "react";

const Letter: React.FC = () => {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="bg-pink-200 rounded-3xl shadow-xl p-8 max-w-md text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-6">
          Hello Priya 🎂
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
          {`Once again, happy birthday!

Tum chahe kitni bhi badi ho jao lekin tumhara bachpan jana nahi chaiya jisse tumhe log jante ha. Vohi masumiyat, vohi bolapan asa hi rehena chaiya.

Ha, lekin thoda strong toh ho jana bade hone ke sath. Pata chale asai thodi se lagi me roo gyi.

Or asaha karta hu ki tumhara ane vala time aacha ho, hamesha tum khush raho.

Bye!`}
        </p>
      </div>
    </div>
  );
};

export default Letter;
