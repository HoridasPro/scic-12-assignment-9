"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    id: 1,
    title: "Develop Your Health By Organic Eating",
    author: "Themehou_WPTIfruitin",
    date: "01 November, 2023",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Improve Your Health By Organic Eating",
    author: "Themehou_WPTIfruitin",
    date: "16 October, 2023",
    image: "https://i.postimg.cc/8zdq40JF/fruits6.jpg",
  },
  {
    id: 3,
    title: "Transform Your Nutrition with Organic Meal",
    author: "Themehou_WPTIfruitin",
    date: "16 October, 2023",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Fresh Fruits Boost Your Immunity",
    author: "Themehou_WPTIfruitin",
    date: "20 September, 2023",
    image:
      "https://i.postimg.cc/BQ1WLCTn/vasylyna-kucherepa-o-MOQXo-V8Hf-A-unsplash.jpg",
  },
  {
    id: 5,
    title: "Organic Lifestyle for Healthy Living",
    author: "Themehou_WPTIfruitin",
    date: "10 September, 2023",
    image: "https://i.postimg.cc/WpYjJ3xM/jeremy-yap-ZZU9Wqzpj-M-unsplash.jpg",
  },
  {
    id: 6,
    title: "Daily Fruits for Strong Body",
    author: "Themehou_WPTIfruitin",
    date: "05 September, 2023",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#F0FDF4] py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#74b32e] font-medium italic text-lg">Our Blog</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Latest News & <span className="text-[#74b32e]">Articles</span>
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-4 h-52">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-[#74b32e]">👤</span> {blog.author}
                  </div>
                  <div className="flex items-center gap-1 border-l pl-4">
                    <span className="text-[#74b32e]">📅</span> {blog.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 leading-snug mb-5 hover:text-[#74b32e] cursor-pointer">
                  {blog.title}
                </h3>

                {/* Button */}
                <button className="bg-[#3b4335] text-white text-xs font-bold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#74b32e] transition-colors">
                  READ MORE <span>»</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
