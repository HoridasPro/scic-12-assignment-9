"use client";

import { useEffect, useState } from "react";

export default function DetailsPage({ params }) {
  const { id } = params;
  const [fruit, setFruit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFruit = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/fruitsCollection/${id.toString()}`
        );
        const data = await res.json();
        if (data.success) setFruit(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFruit();
  }, [id]);

  if (loading) return <h1 className="p-10">Loading...</h1>;
  if (!fruit) return <h1 className="p-10 text-red-500">Fruit not found</h1>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-green-700 mb-4">{fruit.name}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Origin:</strong> {fruit.origin}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Price:</strong> ৳{fruit.price}
      </p>
      <p className="text-gray-600 mb-6">{fruit.description}</p>
    </div>
  );
}
