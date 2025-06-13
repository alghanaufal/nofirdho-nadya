import React from "react";
import { RiScrollToBottomLine } from "react-icons/ri";

const LandingSection = ({ guestName, handleScroll, DataName }) => {
  return (
    // Bagian Landing
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center p-4 w-full relative">
      <div
        className="rounded-3xl border-4 border-white shadow-lg flex flex-col items-center justify-center text-center animate-fade-in w-full max-w-md p-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 0 30px #FADADD, 0 0 50px #D9C3E6",
        }}
      >
        <div
          className="w-42 md:w-58 max-w-md bg-white rounded-t-full shadow-lg relative"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            boxShadow: "0 0 30px #FADADD, 0 0 50px #D9C3E6",
          }}
        >
          <img
            src="/chibi.PNG"
            alt="Nofridho & Nadya"
            className="w-full h-full object-cover animate-pull-in block mx-auto"
          />
        </div>
        <h2 className="text-[#444444] m-2 animate-fade-in-up charm-bold">
          THE WEDDING OF
        </h2>
        <h1 className="text-4xl md:text-5xl tangerine-bold mb-4 animate-fade-in-scale animate-letter-spacing text-[#3A3A3A]">
          {DataName[1]} <br />&<br /> {DataName[0]}
        </h1>
        <p
          className="text-gray-800 mb-4 animate-fade-in-up charm-regular"
          style={{ animationDelay: "0.8s", zIndex: 100 }}
        >
          Kepada Yth.
          <br />
          <span className="tangerine-bold text-[#444444] text-2xl">
            {guestName}
          </span>
        </p>
        <p
          className="text-xs text-[#3A3A3A] mb-6 mx-2 animate-fade-in-up hedvig-letters-serif-text"
          style={{ animationDelay: "0.6s" }}
        >
          Dengan hormat, kami mengundang Anda untuk menghadiri pernikahan kami.
        </p>
        <button
          onClick={handleScroll}
          className="bg-[#D9C5B2] text-white hover:bg-white hover:text-[#D9C5B2] px-6 py-2 rounded-full transition animate-fade-in-up z-[9999] charm-bold flex items-center gap-2"
          style={{ animationDelay: "0.8s" }}
        >
          <span>Buka Undangan</span>
          <RiScrollToBottomLine />
        </button>
      </div>
      <img
        src="/rumahgadang2.png"
        alt="Nofridho & Nadya"
        className="w-52 md:w-64 md:h-32 absolute -bottom-18 md:-bottom-16 left-1/2 transform -translate-x-1/2 animate-zoom-in"
      />
    </div>
  );
};

export default LandingSection;
