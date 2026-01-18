"use client";
import { useEffect, useState } from "react";
import FruitCard from "../Components/FruitCard/FruitCard.jsx";

export default function FruitsCards() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/fruitsCollection");
        console.log(res);
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
            <FruitCard key={fruit._id} fruit={fruit}></FruitCard>
          ))}
        </div>
      </div>
    </section>
  );
}
