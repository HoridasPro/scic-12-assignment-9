"use client";

import { useEffect, useState } from "react";

export default function FruitsCards() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/fruitsCollection");
        const data = await res.json();
        if (data.success) {
          setFruits(data.data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchFruits();
  }, []);

  return (
    <section className="py-16 bg-[#F5F7EB]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">
            Fresh & Organic Fruits
          </h2>
          <p className="text-gray-600 mt-3">
            Handpicked fruits directly from local farms
          </p>
        </div>

        {/* Fruits Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {fruits.map((fruit) => (
            <div
              key={fruit._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-50 bg-green-100 flex items-center justify-center overflow-hidden">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {fruit.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Origin: {fruit.origin || "Unknown"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {fruit.description || "Delicious fresh fruit"}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-green-600">
                    ৳{fruit.price || 0}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      fruit.stock > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {fruit.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
