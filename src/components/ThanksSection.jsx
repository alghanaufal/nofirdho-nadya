import React from "react";

const ThaksSection = ({ ref10, inView10, bgImage }) => {
  return (
    <>
      <div
        className="bg-orange-200 flex flex-col items-center justify-center text-center p-8 relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="rounded-3xl border-4 border-white shadow-lg flex flex-col items-center justify-center text-center animate-fade-in w-full max-w-md p-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            boxShadow: "0 0 10px #FF8C00, 0 0 30px #FFD700",
          }}
        >
          <img
            src="/bunga4.png"
            alt="Bunga"
            className={`absolute top-12 -left-6 w-24 h-24 transform rotate-32 scale-x-[-1] animate-sway ${
              inView10 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />
          <img
            src="/bunga4.png"
            alt="Bunga"
            className={`absolute top-12 -right-6 w-24 h-24 transform -rotate-32 animate-sway ${
              inView10 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />
          <img
            src="/bunga7.png"
            alt="Bunga"
            className={`absolute -right-2 w-24 h-24 transform rotate-12 animate-sway ${
              inView10 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />
          <img
            src="/bunga7.png"
            alt="Bunga"
            className={`absolute -left-2 w-24 h-24 transform -rotate-12 scale-x-[-1] animate-sway ${
              inView10 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />
          <div ref={ref10}>
            <div className="flex justify-center items-center">
              <div
                className={`w-40 h-60 border border-white rounded-full overflow-hidden relative ${
                  inView10 ? "animate-zoom-in" : "opacity-0"
                }`}
              >
                <img
                  src="/2.jpeg"
                  alt="Nofridho & Nadya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-2 pt-6">
              <p
                ref={ref10}
                className={`text-xs charm-regular text-gray-700 mb-4 ${
                  inView10 ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                berkenan hadir dalam hari bahagia ini. Terimakasih atas segala
                ucapan,doa dan perhatian yang diberikan. See you in our big day
                !
              </p>
              <h2
                className={`text-4xl tangerine-bold text-orange-700 mb-2 ${
                  inView10 ? "animate-letter-spacing" : "opacity-0"
                }`}
              >
                Nadya & Nofridho
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThaksSection;
