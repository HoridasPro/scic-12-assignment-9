"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Fresh & Organic Fruits",
    desc: "Handpicked fruits from trusted farms",
    img: "/assets/fruits1.jpg",
  },
  {
    id: 2,
    title: "Healthy Life Starts Here",
    desc: "100% natural and chemical-free fruits",
    img: "/assets/fruits2.jpg",
  },
  {
    id: 3,
    title: "Best Quality Apples",
    desc: "Directly sourced from farmers",
    img: "/assets/fruits3.jpg",
  },
  {
    id: 4,
    title: "Seasonal Fresh Fruits",
    desc: "Taste the freshness of nature",
    img: "/assets/fruits4.jpg",
  },
  {
    id: 5,
    title: "Fast & Safe Delivery",
    desc: "Delivered fresh at your doorstep",
    img: "/assets/fruits5.jpg",
  },
];

const HeroSlider = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] md:h-[90vh] pt-[73px]"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover z-0"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-black/0 z-10" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-20">
                <div className="text-white max-w-2xl animate-fadeUp">
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md">
                    {slide.desc}
                  </p>
                  <button className="bg-gradient-to-r from-lime-400 to-lime-600 hover:scale-105 transition-transform text-black font-semibold px-8 py-3 rounded-full shadow-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
