"use client";

import Image from "next/image";
import aboutImg from "./../../../public/assets/fruits1.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#E9EBDE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={aboutImg}
            alt="Fresh Fruits About Us"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
            About FreshFruits
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-lime-500">FreshFruits</span>,
            we believe that healthy living starts with fresh and organic fruits.
            Handpicked from trusted farms, our fruits are 100% natural,
            chemical-free, and delivered directly to your doorstep.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Our mission is to bring the taste of nature to your home, ensuring
            every bite is juicy, nutritious, and full of flavor. Experience
            freshness like never before with FreshFruits!
          </p>

          <button className="w-max bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-transform hover:scale-105">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
