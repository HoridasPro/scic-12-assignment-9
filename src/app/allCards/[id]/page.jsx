const getFruit = async (id) => {
  const res = await fetch(`http://localhost:3000/api/fruitsCollection/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();s
};

const FruitDetailsPage = async ({ params }) => {
  const { id } = await params;

  const fruit = await getFruit(id);

  if (!fruit) {
    return (
      <h1 className="p-10 text-center text-red-500 text-xl">Fruit not found</h1>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={fruit.realImage}
          alt={fruit.name}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            {fruit.name}
          </h1>

          <p className="text-gray-600 mb-2">
            <strong>Origin:</strong> {fruit.origin || "Unknown"}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Price:</strong> ৳{fruit.price}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Stock:</strong>{" "}
            {fruit.stock > 0 ? "Available" : "Out of Stock"}
          </p>

          <p className="text-gray-700 mt-4">{fruit.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitDetailsPage;
