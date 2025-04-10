import React, { useState } from "react";
import { FaRegImages, FaBookmark, FaUserTag } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

const GallerySection = ({ ref9, inView9, images1, images2, bgImage }) => {
  const [activeTab, setActiveTab] = useState("posts");
  const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);

  const getGalleryImages = () => {
    switch (activeTab) {
      case "posts":
        return images1;
      case "saved":
        return images2;
      case "tagged":
        return images1.concat(images2); // atau konten lainnya
      default:
        return [];
    }
  };

  const getThumbSetter = () => {
    switch (activeTab) {
      case "posts":
        return setThumbsSwiper1;
      case "saved":
        return setThumbsSwiper2;
      default:
        return () => {};
    }
  };

  const getThumbsSwiper = () => {
    switch (activeTab) {
      case "posts":
        return thumbsSwiper1;
      case "saved":
        return thumbsSwiper2;
      default:
        return null;
    }
  };

  const galleryImages = getGalleryImages();
  const currentThumbsSwiper = getThumbsSwiper();
  const currentThumbSetter = getThumbSetter();

  return (
    <div className="p-10 bg-[#FDFBF7]" ref={ref9}>
      <h2
        className={`text-2xl md:text-4xl charm-bold text-[#444444] drop-shadow-lg mb-6 text-center ${
          inView9 ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        Tabbed Gallery
      </h2>

      {/* Tab Buttons */}
      <div className="flex justify-center border-t border-gray-700 pt-4 mb-6">
        <button
          className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-widest ${
            activeTab === "posts"
              ? "border-t-2 border-black text-black"
              : "opacity-50"
          }`}
          onClick={() => setActiveTab("posts")}
        >
          <FaRegImages />
          Posts
        </button>
        <button
          className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-widest ${
            activeTab === "saved"
              ? "border-t-2 border-black text-black"
              : "opacity-50"
          }`}
          onClick={() => setActiveTab("saved")}
        >
          <FaBookmark />
          Saved
        </button>
        <button
          className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-widest ${
            activeTab === "tagged"
              ? "border-t-2 border-black text-black"
              : "opacity-50"
          }`}
          onClick={() => setActiveTab("tagged")}
        >
          <FaUserTag />
          Tagged
        </button>
      </div>

      {/* Gallery Content */}
      <div className="w-full max-w-4xl mx-auto">
        <Swiper
          key={`gallery-${activeTab}-${!!currentThumbsSwiper}`}
          spaceBetween={10}
          thumbs={{ swiper: currentThumbsSwiper }}
          modules={[Thumbs]}
          className="rounded-xl overflow-hidden mb-4"
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide-${idx}`}
                className="w-full object-cover rounded-lg h-[400px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={currentThumbSetter}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          modules={[Thumbs]}
          className="rounded-md"
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Thumb-${idx}`}
                className="w-full h-24 object-cover cursor-pointer rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;

/* <div
  className={`gallery ${inView9 ? "animate-fade-in-up" : ""}`} // Tambahkan class animasi saat inView true
>
  {images1.map((img, index) => (
    <div key={index} className="gallery-item">
      <img src={img} alt={`Foto ${index + 1}`} className="gallery-img" />
    </div>
  ))}
</div>
<div className="w-full max-w-4xl mx-auto p-4">
  <Slider {...setting1}>
    {images1.map((src, idx) => (
      <div key={idx}>
        <img
          src={src}
          className="w-full h-full object-cover rounded-lg"
          alt={`slide-${idx}`}
        />
      </div>
    ))}
  </Slider>
</div>
<div className="w-full max-w-4xl mx-auto p-4">
  <Slider {...setting2}>
    {images2.map((src, idx) => (
      <div key={idx}>
        <img
          src={src}
          className="w-full h-full object-cover rounded-lg"
          alt={`slide-${idx}`}
        />
      </div>
    ))}
  </Slider>
</div> */
