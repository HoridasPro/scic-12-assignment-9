// import Link from "next/link";
// import React from "react";

// const FruitCard = ({ fruit }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
//       <div className="w-full h-50 bg-green-100 flex items-center justify-center overflow-hidden">
//         <img
//           src={fruit.realImage}
//           alt={fruit.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{fruit.name}</h3>
//         <p className="text-sm text-gray-500 mt-1">
//           Origin: {fruit.origin || "Unknown"}
//         </p>
//         <p className="text-sm text-gray-500 mt-1">
//           {fruit.description || "Delicious fresh fruit"}
//         </p>

//         <div className="flex items-center justify-between mt-4">
//           <span className="text-lg font-bold text-green-600">
//             ৳{fruit.price || 0}
//           </span>
//           <span
//             className={`text-sm font-medium ${
//               fruit.stock > 0 ? "text-green-600" : "text-red-500"
//             }`}
//           >
//             {fruit.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>

//         <Link
//           href={`/allCards`}
//           className="mt-5 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FruitCard;

import Link from "next/link";
import React from "react";

const FruitCard = ({ fruit }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <div className="w-full h-52 bg-green-100 overflow-hidden">
        <img
          src={fruit.realImage}
          alt={fruit.name}
          className="w-full h-full object-cover"
        />
      </div>

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

        {/* ✅ FIXED VIEW DETAILS */}
        <Link
          href={`/allCards/${fruit._id}`}
          className="mt-5 block text-center w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FruitCard;

