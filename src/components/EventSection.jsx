import React from "react";

const EventSection = ({ ref6, inView6, bgImage }) => {
  return (
    <div
      ref={ref6}
      className="flex flex-col items-center p-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Bagian Akad Nikah */}
      <div
        className={`w-full max-w-md rounded-t-full shadow-lg relative text-center px-6 p-28 ${
          inView6 ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0 0 15px #FFD700, 0 0 40px #FF8C00",
        }}
      >
        <img
          src="/bunga6.png"
          alt="Bunga"
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-88 h-44"
        />
        <img
          src="/bunga5.png"
          alt="Bunga"
          className={`absolute -top-4 -left-4 w-44 h-44 transform -rotate-12 scale-x-[-1] animate-sway ${
            inView6 ? "animate-fade-in-up delay-200" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <img
          src="/bunga5.png"
          alt="Bunga"
          className={`absolute -top-4 -right-4 w-44 h-44 transform rotate-12 animate-sway ${
            inView6 ? "animate-fade-in-up delay-400" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <h2 className="text-lg charm-bold text-yellow-800 mt-2 drop-shadow-lg">
          AKAD NIKAH
        </h2>
        <p className="text-gray-700 mt-2 tangerine-regular text-xl font-medium">
          Sabtu, 03 Mei 2025
        </p>
        <p className="text-gray-700 tangerine-regular text-lg">
          10.00 WIB - Selesai
        </p>
        <p className="text-gray-600 text-sm font-serif">
          Perumahan Pondok Timur Indah 1, jalan Harimau III no.81A RT/RW 009/017
          Kel.Jatimulya Kec.Tambun Selatan Bekasi Timur 17510
        </p>

        {/* Lokasi Map */}
        <div className="mt-4 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/nT3LnFo4xuWo3gMA8"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-amber-500 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-300 transition ${
              inView6 ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            Lokasi
          </a>
        </div>
      </div>

      {/* Bagian Resepsi Nikah */}
      <div
        className={`w-full max-w-md rounded-b-full shadow-lg relative text-center px-6 pb-26 pt-4 ${
          inView6 ? "animate-fade-in-up delay-200" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0 0 15px #FFD700, 0 0 40px #FF8C00",
        }}
      >
        <img
          src="/bunga1.png"
          alt="Bunga"
          className={`absolute -bottom-14 -left-6 w-54 h-54 transform rotate-34 scale-x-[-1] animate-sway ${
            inView6 ? "animate-fade-in-up delay-200" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <img
          src="/bunga1.png"
          alt="Bunga"
          className={`absolute -bottom-14 -right-6 w-54 h-54 transform -rotate-34 animate-sway ${
            inView6 ? "animate-fade-in-up delay-400" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <h2 className="text-lg charm-bold text-yellow-800 mt-2 drop-shadow-lg">
          RESEPSI NIKAH
        </h2>
        <p className="text-gray-700 mt-2 tangerine-regular text-xl font-medium">
          Sabtu, 03 Mei 2025
        </p>
        <p className="text-gray-700 tangerine-regular text-lg">
          12.30 WIB - Selesai
        </p>
        <p className="text-gray-600 text-sm font-serif">
          Perumahan Pondok Timur Indah 1, jalan Harimau III no.81A RT/RW 009/017
          Kel.Jatimulya Kec.Tambun Selatan Bekasi Timur 17510
        </p>

        {/* Lokasi Map */}
        <div className="mt-4 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/nT3LnFo4xuWo3gMA8"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-amber-500 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-300 transition ${
              inView6 ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            Lokasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
