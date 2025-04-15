import React, { useState, useRef } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { RiTreeFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

const GallerySection = ({ ref10, inView10, images1, images2, bgImage }) => {
  const [activeTab, setActiveTab] = useState("posts");
  const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);

  const getGalleryImages = () => {
    switch (activeTab) {
      case "posts":
        return images1;
      case "saved":
        return images2;
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
    <div
      className={`p-10 transition-colors duration-800 ease-in-out ${
        activeTab === "saved" ? "bg-[#FDFBF7]" : "bg-[#B6CFC4]"
      }`}
      ref={ref10}
    >
      <h2
        className={`text-2xl md:text-4xl charm-bold text-[#444444] drop-shadow-lg mb-6 text-center ${
          inView10 ? "animate-letter-spacing" : "opacity-0"
        }`}
      >
        Our Gallery
      </h2>
      <p
        className={`text-base md:text-4xl hedvig-letters-serif-text text-[#444444] drop-shadow-lg text-center ${
          inView10 ? "animate-letter-spacing" : "opacity-0"
        }`}
      >
        Choose a Theme
      </p>

      {/* Tab Buttons */}
      <div
        className={`flex justify-center border-t border-[#444444] pt-4 mb-4 ${
          inView10 ? "animate-fade-in-scale" : "opacity-0"
        }`}
      >
        <button
          className={`flex items-center gap-1 px-16 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-400 ease-in-out ${
            activeTab === "posts"
              ? "border-t-2 border-[#444444] text-[#444444]"
              : "opacity-50"
          } ${inView10 ? "animate-fade-in-up" : "opacity-0"}`}
          onClick={() => setActiveTab("posts")}
        >
          <RiTreeFill />
        </button>
        <button
          className={`flex items-center gap-1 px-16 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-400 ease-in-out ${
            activeTab === "saved"
              ? "border-t-2 border-[#444444] text-[#444444]"
              : "opacity-50"
          } ${inView10 ? "animate-fade-in-up" : "opacity-0"}`}
          onClick={() => setActiveTab("saved")}
        >
          <FaCameraRetro />
        </button>
      </div>

      {/* Gallery Content */}
      <div
        className={`w-full max-w-4xl mx-auto transition-all duration-500 ease-in-out ${
          inView10 ? "animate-fade-in-scale" : "opacity-0"
        }`}
      >
        <Swiper
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={activeIndex}
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
          slideToClickedSlide={true}
          modules={[Thumbs]}
          className="rounded-md"
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Thumb-${idx}`}
                className={`w-full h-24 object-cover cursor-pointer rounded-md ${
                  idx === activeIndex ? "ring-2 ring-[#D9C5B2]" : ""
                }`}
                onClick={() => {
                  setActiveIndex(idx);
                  mainSwiperRef.current?.slideTo(idx);
                }}
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
  className={`gallery ${inView10 ? "animate-fade-in-up" : ""}`} // Tambahkan class animasi saat inView true
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
