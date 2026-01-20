import { useRouter } from "next/navigation";
import React from "react";

const FruitCard = ({ fruit }) => {
  const router = useRouter();

  const handleDetails = (id) => {
    router.push(`/allCards/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      {/* Image */}
      <div className="w-full h-52 bg-green-100 overflow-hidden">
        <img
          src={fruit.realImage}
          alt={fruit.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{fruit.name}</h3>

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

        {/* ✅ FULL WIDTH BUTTON */}
        <div className="-mx-5 mt-4">
          <button
            onClick={() => handleDetails(fruit._id)}
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 font-semibold transition rounded-xl cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;
