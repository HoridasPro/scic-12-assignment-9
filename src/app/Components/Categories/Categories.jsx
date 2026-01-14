"use client";

import { useState } from "react";

const Categories = () => {
  /* ---------------- SERVICES ---------------- */
  const services = [
    {
      title: "Fresh Vegetable",
      icon: "🥬",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
    },
    {
      title: "Organic Fertilizer",
      icon: "🫙",
      img: "https://i.postimg.cc/8zdq40JF/fruits6.jpg",
    },
    {
      title: "Natural Fruits",
      icon: "🍎",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400",
    },
  ];

  /* ---------------- CATEGORIES ---------------- */
  const categories = [
    { name: "Fruit Juice", count: "05", icon: "🥤" },
    { name: "Salads", count: "05", icon: "🥗" },
    { name: "Vegetables", count: "06", icon: "🥦" },
    { name: "Fresh Fruits", count: "06", icon: "🍎" },
    { name: "Meat & Fish", count: "01", icon: "🐟" },
  ];

  /* ---------------- BLOG SLIDER ---------------- */
  const blogs = [
    {
      title: "Develop Your Health By Organic Eating",
      date: "01 Nov, 2023",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
    },
    {
      title: "Improve Your Health By Organic Eating",
      date: "16 Oct, 2023",
      img: "https://i.postimg.cc/8zdq40JF/fruits6.jpg",
    },
    {
      title: "Transform Your Nutrition with Organic",
      date: "16 Oct, 2023",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    },
    {
      title: "Fresh Farming Tips for 2026",
      date: "12 Jan, 2026",
      img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400",
    },
  ];

  const visibleCards = 3;
  const maxIndex = blogs.length - visibleCards;

  const [blogIndex, setBlogIndex] = useState(0);

  const nextBlog = () =>
    setBlogIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const prevBlog = () =>
    setBlogIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <main className="min-h-screen font-sans">
      {/* ================= SERVICES ================= */}
      {/* <section className="bg-[#fdfcf4] py-20 px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#1a2e24] mb-16">
          Our Organic Farming Service For You!
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <div key={i} className="relative group">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={s.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt=""
                />
              </div>
              <div className="bg-white -mt-20 mx-auto w-[85%] rounded-[45px] pt-14 pb-8 px-6 shadow-xl">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl shadow">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mt-6">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-3">
                  Inspections to ensure compliance with organic standards.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ================= CATEGORIES ================= */}
      <section className="py-20  bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-600">
          What We re Offering
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((c, i) => (
            <div
              key={i}
              className="bg-[#f7f9f2] p-8 rounded-2xl w-44 hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                {c.icon}
              </div>
              <p className="text-xs text-black">Products ({c.count})</p>
              <h4 className="font-bold text-black">{c.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BLOG SLIDER ================= */}
      <section className="bg-[#f7f9f2] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            <span className="text-green-600">Latest News & Articles</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${
                    blogIndex * (100 / visibleCards)
                  }%)`,
                }}
              >
                {blogs.map((b, i) => (
                  <div key={i} className="min-w-full md:min-w-[33.33%] px-4">
                    <div className="bg-white p-5 rounded-3xl shadow hover:shadow-xl transition-all">
                      <div className="h-52 rounded-2xl overflow-hidden mb-4">
                        <img
                          src={b.img}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          alt=""
                        />
                      </div>
                      <p className="text-xs text-black mb-2">{b.date}</p>
                      <h3 className="font-bold text-lg mb-4 text-black">
                        {b.title}
                      </h3>
                      <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-xs font-bold hover:bg-green-800 transition-all">
                        READ MORE »
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevBlog}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 text-white w-10 h-10 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextBlog}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white w-10 h-10 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
