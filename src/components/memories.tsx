import React from "react";

const images = [
  "/pic7.jpg",
  "/pic8.jpg",
  "/pic9.jpg",
  "/pic10.jpg",
  "/pic11.jpg",
  "/pic12.jpg",
  "/pic13.jpg",
  "/pic14.jpg",
  "/pic15.jpg",
  "/pic16.jpg",
  "/pic17.jpg",
  "/pic18.jpg",
  "/pic19.jpg",
  "/pic20.jpg",
  "/pic21.jpg",
  "/pic22.jpg",
  "/pic23.jpg",
  "/pic24.jpg",
];

const quantity = images.length;

const Banner3D: React.FC = () => {
  return (
    <>
      <div className="banner bg-pink-100 flex justify-center items-center min-h-screen relative overflow-hidden">
        <div
          className="slider"
          style={{ "--quantity": quantity } as React.CSSProperties}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="item"
              style={{ "--position": idx + 1 } as React.CSSProperties}
            >
              <img src={src} alt={`dragon_${idx + 1}`} />
            </div>
          ))}
        </div>

        <div className="content">{/* No text as requested */}</div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
          height: 100vh;
          position: relative;
          font-family: 'Poppins', sans-serif;
        }

        body::before {
          content: "";
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: transparent;
          pointer-events: none;
          z-index: 0;
          box-shadow:
            20px 30px 1px 0px white,
            40px 80px 1px 0px white,
            90px 60px 1px 0px white,
            120px 150px 1px 0px white,
            160px 200px 1px 0px white,
            200px 50px 1px 0px white,
            240px 120px 1px 0px white,
            280px 90px 1px 0px white,
            320px 180px 1px 0px white,
            360px 110px 1px 0px white,
            400px 140px 1px 0px white,
            440px 70px 1px 0px white,
            480px 200px 1px 0px white,
            520px 150px 1px 0px white,
            560px 90px 1px 0px white,
            600px 130px 1px 0px white;
          animation: twinkle 4s infinite alternate;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }

        .banner {
          width: 100%;
          height: 100vh;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .banner .slider {
          position: absolute;
          width: 220px;
          height: 280px;
          top: 10%;
          left: calc(50% - 110px);
          transform-style: preserve-3d;
          transform: perspective(1000px);
          animation: autoRun 20s linear infinite;
          z-index: 2;
          --quantity: ${quantity};
        }

        @keyframes autoRun {
          from {
            transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
          }
        }

        .banner .slider .item {
          position: absolute;
          inset: 0 0 0 0;
          transform:
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(600px);
        }

        .banner .slider .item img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Changed from cover to contain */
          border-radius: 10px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.6);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .banner .slider .item img:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(255,255,255,0.8);
        }

        .banner .content {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(1400px, 100vw);
          height: max-content;
          padding-bottom: 100px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          z-index: 11;
          color: #eee;
        }

        /* Responsive adjustments */

        @media screen and (max-width: 1023px) {
          .banner .slider {
            width: 180px;
            height: 230px;
            left: calc(50% - 90px);
          }
          .banner .slider .item {
            transform:
              rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
              translateZ(400px);
          }
        }

        @media screen and (max-width: 767px) {
          .banner .slider {
            width: 140px;
            height: 180px;
            left: calc(50% - 70px);
          }
          .banner .slider .item {
            transform:
              rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
              translateZ(280px);
          }
        }

        @media screen and (max-width: 480px) {
          .banner .slider {
            width: 110px;
            height: 140px;
            left: calc(50% - 55px);
          }
          .banner .slider .item {
            transform:
              rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
              translateZ(220px);
          }
        }
      `}</style>
    </>
  );
};

export default Banner3D;
