import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/thumbs";

const GallerySection = ({ ref9, inView9, images1, images2, bgImage }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);

  return (
    <div className="p-10 bg-[#FDFBF7]" ref={ref9}>
      <h2
        className={`text-2xl md:text-4xl charm-bold text-[#444444] drop-shadow-lg mb-6 text-center ${
          inView9 ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        Tabbed Gallery
      </h2>

      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
        <TabList className="flex gap-4 justify-center mb-6">
          <Tab className="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none">
            Gallery 1
          </Tab>
          <Tab className="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none">
            Gallery 2
          </Tab>
        </TabList>

        {/* ========== Gallery 1 ========== */}
        <TabPanel forceRender>
          <div className="w-full max-w-4xl mx-auto">
            <Swiper
              key={`gallery1-${!!thumbsSwiper1}`}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper1 }}
              modules={[Thumbs]}
              className="rounded-xl overflow-hidden mb-4"
            >
              {images1.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Slide 1-${idx}`}
                    className="w-full object-cover rounded-lg h-[400px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper1}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              modules={[Thumbs]}
              className="rounded-md"
            >
              {images1.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Thumb 1-${idx}`}
                    className="w-full h-24 object-cover cursor-pointer rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>

        {/* ========== Gallery 2 ========== */}
        <TabPanel forceRender>
          <div className="w-full max-w-4xl mx-auto">
            <Swiper
              key={`gallery2-${!!thumbsSwiper2}`}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper2 }}
              modules={[Thumbs]}
              className="rounded-xl overflow-hidden mb-4"
            >
              {images2.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Slide 2-${idx}`}
                    className="w-full object-cover rounded-lg h-[400px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper2}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              modules={[Thumbs]}
              className="rounded-md"
            >
              {images2.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Thumb 2-${idx}`}
                    className="w-full h-24 object-cover cursor-pointer rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
      </Tabs>
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
