import React from "react";

const Letter: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-pink-200 rounded-2xl shadow-xl p-6 text-center max-w-md">
        <h2 className="text-4xl font-semibold text-pink-700 mb-4">
          Hello Priya 🎂
        </h2>
        <p className="text-gray-800 text-lg mb-4 whitespace-pre-line">
          {"Once again, happy birthday!\n\nTum chahe kitni bhi badi ho jao lekin tumhara bachpan jana nahi chaiya jisse tumhe log jante ha. Vohi masumiyat, vohi bolapan asa hi rehena chaiya.\n\nHa, lekin thoda strong toh ho jana bade hone ke sath. Pata chale asai thodi se lagi me roo gyi.\n\nOr asaha karta hu ki tumhara ane vala time aacha ho, hamesha tum khush raho.\n\nBye!"}
        </p>
      </div>
    </div>
  );
};

export default Letter;
