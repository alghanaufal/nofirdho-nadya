import React from "react";

const CountdownSection = ({ ref5, inView5, timeLeft, bgImage }) => {
  return (
    <div
      ref={ref5}
      className="pt-8 pb-12 text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2
        className={`text-2xl md:text-4xl charm-bold text-yellow-700 drop-shadow-lg ${
          inView5 ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        Wedding Day
      </h2>
      <p
        className={`text-sm md:text-lg tangerine-regular text-yellow-800 mt-1 tracking-wide drop-shadow-md ${
          inView5 ? "animate-fade-in-up delay-100" : "opacity-0"
        }`}
      >
        03.05.2025
      </p>

      <div className="grid grid-cols-4 gap-2 md:gap-4 mt-6 justify-center">
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center bg-white shadow-md ${
            inView5 ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <span className="text-xl md:text-3xl charm-bold text-yellow-900 drop-shadow-lg">
            {timeLeft.days}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-yellow-800 drop-shadow-md">
            Days
          </p>
        </div>
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center bg-white shadow-md ${
            inView5 ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <span className="text-xl md:text-3xl charm-bold text-yellow-900 drop-shadow-lg">
            {timeLeft.hours}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-yellow-800 drop-shadow-md">
            Hours
          </p>
        </div>
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center bg-white shadow-md ${
            inView5 ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <span className="text-xl md:text-3xl charm-bold text-yellow-900 drop-shadow-lg">
            {timeLeft.minutes}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-yellow-800 drop-shadow-md">
            Minutes
          </p>
        </div>
        <div
          className={`px-3 py-2 md:px-6 md:py-3 rounded-md text-center bg-white shadow-md ${
            inView5 ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <span className="text-xl md:text-3xl charm-bold text-yellow-900 drop-shadow-lg">
            {timeLeft.seconds}
          </span>
          <p className="text-xs md:text-sm mt-1 uppercase tracking-wider text-yellow-800 drop-shadow-md">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
