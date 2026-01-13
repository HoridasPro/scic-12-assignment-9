import Footer from "../Components/Footer/Footer";
import HeroSlider from "../Components/HeroSlider/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider></HeroSlider>

      2️⃣ Why Choose Us
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose FreshFruits
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 border rounded">🍎 100% Fresh</div>
          <div className="p-6 border rounded">🚚 Fast Delivery</div>
          <div className="p-6 border rounded">🌱 Organic</div>
          <div className="p-6 border rounded">💰 Affordable</div>
        </div>
      </section>

      {/* 3️⃣ Categories */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Fruit Categories
        </h2>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          <div className="bg-white p-4 rounded">🍊 Citrus</div>
          <div className="bg-white p-4 rounded">🍓 Berries</div>
          <div className="bg-white p-4 rounded">🥭 Tropical</div>
          <div className="bg-white p-4 rounded">🍏 Seasonal</div>
          <div className="bg-white p-4 rounded">🍉 Melons</div>
        </div>
      </section>

      {/* 4️⃣ Featured Fruits */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Fruits</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Apple", "Banana", "Mango", "Orange"].map((fruit) => (
            <div key={fruit} className="border p-4 rounded text-center">
              <h3 className="font-semibold">{fruit}</h3>
              <p>$3.50</p>
              <button className="mt-2 text-green-600">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ How It Works */}
      <section className="bg-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>1️⃣ Browse Fruits</div>
          <div>2️⃣ Select Items</div>
          <div>3️⃣ Place Order</div>
          <div>4️⃣ Fast Delivery</div>
        </div>
      </section>

      {/* 6️⃣ Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-4 rounded">
            ⭐⭐⭐⭐⭐ <br /> Very fresh fruits!
          </div>
          <div className="border p-4 rounded">
            ⭐⭐⭐⭐⭐ <br /> Fast delivery!
          </div>
          <div className="border p-4 rounded">
            ⭐⭐⭐⭐⭐ <br /> Highly recommended!
          </div>
        </div>
      </section>

      {/* 7️⃣ Newsletter */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Fresh Fruit Updates</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded text-black"
        />
        <button className="ml-2 bg-white text-green-600 px-4 py-2 rounded">
          Subscribe
        </button>
      </section>

      <Footer />
    </>
  );
}
