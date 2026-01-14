import React from "react";
// Swiper React components ebong styles
 
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
 
 

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
    title: "Tips for Growing Your Own Kitchen Garden",
    author: "Themehou_WPTIfruitin",
    date: "20 December, 2023",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Why Fresh Fruits Are Essential Daily",
    author: "Themehou_WPTIfruitin",
    date: "05 January, 2024",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Benefits of Organic Farming in 2026",
    author: "Themehou_WPTIfruitin",
    date: "12 January, 2026",
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=400&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#f7f9f2] py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block pointer-events-none">
        <img
          src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-ginger-and-green-basil-leaves-png-image_10203598.png"
          alt="ginger-basil"
          className="w-64"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#74b32e] font-medium italic text-lg">Our Blog</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Latest News & <span className="text-[#74b32e]">Articles</span>
          </h2>
        </div>

        {/* Swiper Slider Section */}
        <div className="relative group px-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                  {/* Blog Image */}
                  <div className="rounded-xl overflow-hidden mb-4 h-52">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Blog Meta */}
                  <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-[#74b32e]">👤</span> {blog.author}
                    </div>
                    <div className="flex items-center gap-1 border-l pl-4">
                      <span className="text-[#74b32e]">📅</span> {blog.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 leading-snug mb-5 hover:text-[#74b32e] cursor-pointer min-h-[56px]">
                    {blog.title}
                  </h3>

                  {/* Read More Button */}
                  <button className="bg-[#3b4335] text-white text-xs font-bold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#74b32e] transition-colors">
                    READ MORE <span>»</span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#74b32e] rounded-full flex items-center justify-center text-white shadow-md hover:bg-green-700 transition-all active:scale-95 disabled:opacity-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button className="button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#74b32e] rounded-full flex items-center justify-center text-white shadow-md hover:bg-green-700 transition-all active:scale-95 disabled:opacity-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
