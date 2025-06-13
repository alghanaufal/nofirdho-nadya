import React, { useState, useEffect } from "react";
import mandiriLogo from "undangan/public/mandiri.png";
import bsiLogo from "undangan/public/bsi.png";
import { LuCopy } from "react-icons/lu";

const GiftSection = ({
  ref11,
  inView11,
  bgImage,
  rec_name,
  rec_number,
  address,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={ref11}
      className="bg-orange-200 flex flex-col items-center justify-center text-center p-8 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="rounded-3xl border-4 border-white shadow-lg flex flex-col items-center justify-center text-center animate-fade-in w-full max-w-md p-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 0 10px #D9C3E6, 0 0 30px #FADADD",
        }}
      >
        <h1
          className={`text-2xl md:text-4xl charm-bold text-[#444444] drop-shadow-lg mb-2 ${
            inView11 ? "animate-letter-spacing delay-100" : "opacity-0"
          }`}
        >
          Wedding Gift
        </h1>
        <p
          className={`text-[#3A3A3A] text-xs hedvig-letters-serif-text p-2 rounded-lg ${
            inView11 ? "animate-fade-in-scale delay-200" : "opacity-0"
          }`}
        >
          Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
          kasih untuk mempelai, dapat melalui virtual account atau E-wallet
        </p>
        <div
          className={`mb-6 p-4 rounded-md ${
            inView11 ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <img src={mandiriLogo} alt="Mandiri Logo" className="h-10 mb-2" />
          <p className="mb-1 hedvig-letters-serif-text">{rec_name[1]}</p>
          <p className="mb-3 hedvig-letters-serif-text">{rec_number[1]}</p>
          <button
            className="px-4 py-2 bg-[#D9C5B2] text-white rounded hover:bg-amber-700 transition-colors flex items-center gap-2"
            onClick={() => copyToClipboard(rec_number[1])}
          >
            Salin Rekening <LuCopy />
          </button>
        </div>
        <div
          className={`mb-6 p-4 rounded-md ${
            inView11 ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <img src={bsiLogo} alt="BSI Logo" className="h-10 mb-2" />
          <p className="mb-1 hedvig-letters-serif-text">{rec_name[0]}</p>
          <p className="mb-3 hedvig-letters-serif-text">{rec_number[0]}</p>
          <button
            className="px-4 py-2 bg-[#D9C5B2] text-white rounded hover:bg-amber-700 transition-colors flex items-center gap-2"
            onClick={() => copyToClipboard(rec_number[0])}
          >
            Salin Rekening <LuCopy />
          </button>
        </div>
        <div
          className={`mb-6 p-4 rounded-md ${
            inView11 ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-[#444444] mb-2 charm-bold">
            Rumah
          </h2>
          <p className="mb-3 text-xs hedvig-letters-serif-text">{address[0]}</p>
          <button
            className="px-4 py-2 bg-[#D9C5B2] text-white rounded hover:bg-amber-700 transition-colors flex items-center gap-2 justify-center mx-auto"
            onClick={() => copyToClipboard(address[0])}
          >
            Salin Alamat <LuCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
