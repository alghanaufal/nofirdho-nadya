import React from "react";

const CountdownSection = ({ ref5, inView5, timeLeft, bgImage }) => {
  return (
    <div
      ref={ref5}
      className="pt-8 pb-12 text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2
        className={`text-2xl md:text-4xl charm-bold text-[#444444] drop-shadow-lg ${
          inView5 ? "animate-letter-spacing" : "opacity-0"
        }`}
      >
        Wedding Day
      </h2>
      <p
        className={`text-6xl md:text-4xl tangerine-bold text-[#3A3A3A] mt-3 tracking-wide drop-shadow-md mx-4 rounded-lg ${
          inView5 ? "animate-letter-spacing delay-100" : "opacity-0"
        }`}
      >
        Sabtu
      </p>
      <p
        className={`text-3xl md:text-4xl tangerine-bold text-[#3A3A3A] mt-1 tracking-wide drop-shadow-md mx-4 rounded-lg ${
          inView5 ? "animate-fade-in-scale delay-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        03.05.2025
      </p>

      <div className="grid grid-cols-4 gap-2 md:gap-4 mt-6 mx-4 justify-center">
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center shadow-md ${
            inView5 ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <span className="text-xl md:text-3xl charm-bold text-[#444444] drop-shadow-lg">
            {timeLeft.days}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-[#3A3A3A] drop-shadow-md">
            Days
          </p>
        </div>
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center shadow-md ${
            inView5 ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <span className="text-xl md:text-3xl charm-bold text-[#444444] drop-shadow-lg">
            {timeLeft.hours}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-[#3A3A3A] drop-shadow-md">
            Hours
          </p>
        </div>
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center shadow-md ${
            inView5 ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <span className="text-xl md:text-3xl charm-bold text-[#444444] drop-shadow-lg">
            {timeLeft.minutes}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-[#3A3A3A] drop-shadow-md">
            Minutes
          </p>
        </div>
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center shadow-md ${
            inView5 ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <span className="text-xl md:text-3xl charm-bold text-[#444444] drop-shadow-lg">
            {timeLeft.seconds}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-[#3A3A3A] drop-shadow-md">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
