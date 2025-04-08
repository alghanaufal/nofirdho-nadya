import React from "react";

const GallerySection = ({ ref9, inView9, images, bgImage }) => {
  return (
    <div
      className="p-10 bg-[#FDFBF7]"
      // style={{ backgroundImage: `url(${bgImage})` }}
      ref={ref9}
    >
      <h2
        className={`text-2xl md:text-4xl charm-bold text-[#444444] drop-shadow-lg mb-6 ${
          inView9 ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        Gallery
      </h2>
      <div
        className={`gallery ${inView9 ? "animate-fade-in-up" : ""}`} // Tambahkan class animasi saat inView true
      >
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Foto ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
