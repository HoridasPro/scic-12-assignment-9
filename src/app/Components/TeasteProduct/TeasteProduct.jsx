"use client";

import Image from "next/image";

const TeasteProduct = ({ icon, title, desc, align = "left" }) => (
  <div
    className={`flex gap-3 ${
      align === "right" ? "flex-row-reverse text-right" : ""
    }`}
  >
    <div className="text-yellow-400 text-lg">{icon}</div>
    <div>
      <h4 className="text-white font-semibold text-sm">{title}</h4>
      <p className="text-gray-300 text-xs leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0b2a12] py-20 px-4">
      <div className="max-w-7xl mx-auto rounded-3xl p-12 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-xs uppercase tracking-widest mb-3">
            ✨ Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Savor The Purity, Taste The <br className="hidden md:block" />
            Difference!
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <TeasteProduct
              icon="🌿"
              title="100% Organic"
              desc="Our products are certified by reputable organic."
            />
            <TeasteProduct
              icon="⚡"
              title="Fresh Products"
              desc="Directly sourced from local farms."
            />
            <TeasteProduct
              icon="🍃"
              title="Biodynamic Food"
              desc="Respecting nature and soil health."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full border-4 border-yellow-400/30 overflow-hidden">
              <Image
                src="/assets/allFruits.jpg"
                alt="Fresh Vegetables"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <TeasteProduct
              icon="💳"
              title="Secured Payment"
              desc="Multiple secure payment gateways."
              align="right"
            />
            <TeasteProduct
              icon="💧"
              title="Neat & Clean"
              desc="High hygiene packaging process."
              align="right"
            />
            <TeasteProduct
              icon="✨"
              title="Daily Fresh"
              desc="Fresh & nutrient-rich every day."
              align="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
