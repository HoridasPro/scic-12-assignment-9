"use client";

import { useEffect, useState } from "react";

const mockData = [
  {
    id: 1,
    icon: "🍎",
    title: "100% Fresh",
    description: "All our fruits are handpicked and fresh from farms",
  },
  {
    id: 2,
    icon: "🚚",
    title: "Fast Delivery",
    description: "Get your fruits delivered to your doorstep quickly",
  },
  {
    id: 3,
    icon: "🌱",
    title: "Organic",
    description: "Healthy and organic fruits for you and your family",
  },
  {
    id: 4,
    icon: "💰",
    title: "Affordable",
    description: "High quality fruits at the best prices",
  },
];

export default function WhyChooseUsPage() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      await new Promise((resolve) => setTimeout(resolve, 200)); // simulate delay
      setFeatures(mockData);
    };

    fetchFeatures();
  }, []);

  return (
    <main className="py-15 px-6 bg-[#F0FDF4]  ">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700">
            Why Choose FreshFruits
          </h1>
          <p className="text-gray-600 mt-3">
            Discover why customers love shopping with us
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {features.map((item) => (
            <div
              key={item.id}
              className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition bg-white"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-black">{item.title}</h3>

              <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
