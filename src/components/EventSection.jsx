import React from "react";

const EventSection = ({ ref6, inView6, bgImage }) => {
  return (
    <div
      ref={ref6}
      className="flex flex-col items-center p-12 bg-[#D9C5B2]"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Bagian Akad Nikah */}
      <div
        className={`w-full max-w-md rounded-t-full rounded-b-2xl shadow-lg relative text-center px-6 pt-24 pb-6 ${
          inView6 ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0 0 15px #FADADD, 0 0 40px #D9C3E6",
        }}
      >
        <img
          src="/bunga5.png"
          alt="Bunga"
          className={`absolute -top-8 -left-4 w-44 h-44 transform -rotate-12 scale-x-[-1] animate-sway ${
            inView6 ? "animate-fade-in-up delay-200" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <img
          src="/bunga5.png"
          alt="Bunga"
          className={`absolute -top-8 -right-4 w-44 h-44 transform rotate-12 animate-sway ${
            inView6 ? "animate-fade-in-up delay-400" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <h2 className="text-xl charm-bold text-[#444444] mt-2 drop-shadow-lg">
          AKAD NIKAH
        </h2>
        <p className="text-[#3A3A3A] mt-2 charm-bold text-lg font-medium">
          Sabtu, 03 Mei 2025
        </p>
        <p className="text-[#3A3A3A] charm-bold text-base">
          10.00 WIB - Selesai
        </p>
        <p className="text-gray-600 text-xs hedvig-letters-serif-text">
          Perumahan Pondok Timur Indah 1, jalan Harimau III no.81A RT/RW 009/017
          Kel.Jatimulya Kec.Tambun Selatan Bekasi Timur 17510
        </p>

        {/* Lokasi Map */}
        <div className="mt-4 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/nT3LnFo4xuWo3gMA8"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#D9C5B2] text-[#FDFBF7] px-6 py-2 rounded-full transition ${
              inView6 ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            Lokasi
          </a>
        </div>
      </div>
      <div className="h-6" />

      {/* Bagian Akad Nikah */}
      <div
        className={`w-full max-w-md rounded-2xl shadow-lg relative text-center px-6 p-6 ${
          inView6 ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0 0 15px #FADADD, 0 0 40px #D9C3E6",
        }}
      >
        <img
          src="/bunga4.png"
          alt="Bunga"
          className={`absolute -left-32 w-44 h-44 transform rotate-34 scale-x-[-1] animate-sway ${
            inView6 ? "animate-fade-in-up delay-200" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <img
          src="/bunga4.png"
          alt="Bunga"
          className={`absolute -right-32 w-44 h-44 transform -rotate-34 animate-sway ${
            inView6 ? "animate-fade-in-up delay-400" : "opacity-0"
          } transition-opacity duration-500`}
        />
        <h2 className="text-xl charm-bold text-[#444444] mt-2 drop-shadow-lg">
          RESEPSI NIKAH 1
        </h2>
        <p className="text-[#3A3A3A] mt-2 charm-bold text-lg font-medium">
          Sabtu, 03 Mei 2025
        </p>
        <p className="text-[#3A3A3A] charm-bold text-base">
          12.30 WIB - Selesai
        </p>
        <p className="text-gray-600 text-xs hedvig-letters-serif-text">
          Perumahan Pondok Timur Indah 1, jalan Harimau III no.81A RT/RW 009/017
          Kel.Jatimulya Kec.Tambun Selatan Bekasi Timur 17510
        </p>

        {/* Lokasi Map */}
        <div className="mt-4 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/nT3LnFo4xuWo3gMA8"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#D9C5B2] text-[#FDFBF7] px-6 py-2 rounded-full transition ${
              inView6 ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            Lokasi
          </a>
        </div>
      </div>
      <div className="h-6" />

      {/* Bagian Resepsi Nikah */}
      <div
        className={`w-full max-w-md rounded-b-full shadow-lg relative text-center px-6 pb-24 pt-4 ${
          inView6 ? "animate-fade-in-up delay-200" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0 0 15px #FADADD, 0 0 40px #D9C3E6",
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
        <h2 className="text-xl charm-bold text-[#444444] mt-2 drop-shadow-lg">
          RESEPSI NIKAH 2
        </h2>
        <p className="text-[#3A3A3A] mt-2 charm-bold text-lg font-medium">
          Senin, 19 Mei 2025
        </p>
        <p className="text-[#3A3A3A] charm-bold text-base">
          12.30 WIB - Selesai
        </p>
        <p className="text-gray-600 text-xs hedvig-letters-serif-text">
          Jl. H. Agus Salim, Gang Makmur No. 18, Kec. Pariaman Tengah, Kota
          Pariaman
        </p>

        {/* Lokasi Map */}
        <div className="mt-4 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/nT3LnFo4xuWo3gMA8"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#D9C5B2] text-[#FDFBF7] px-6 py-2 rounded-full transition ${
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
