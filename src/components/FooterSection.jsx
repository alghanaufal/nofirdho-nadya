import React from "react";
import { RiInstagramFill, RiGithubFill } from "react-icons/ri";

const FooterSection = () => {
  return (
    <footer className="text-center py-6 border-t border-[#FADADD] bg-[#D9C5B2]">
      <div className="flex justify-center gap-8 mb-4 text-2xl">
        <a
          href="https://www.instagram.com/algha_jpg/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5C2A4C] transition-colors duration-300"
        >
          <RiInstagramFill />
        </a>
        <a
          href="https://github.com/alghanaufal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3A3A3A] transition-colors duration-300"
        >
          <RiGithubFill />
        </a>
      </div>
      <p className="text-sm text-[#FDFBF7]">
        &copy; 2025 by <span className="font-semibold">Algha</span>
      </p>
    </footer>
  );
};

export default FooterSection;
