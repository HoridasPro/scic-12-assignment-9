"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      email === "programinghero1.com" &&
      password === "123456"
    ) {
      // store auth in cookie
      document.cookie = "auth=true; path=/";

      // redirect after login
      router.push("/itemsPage");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7EB]">
      <div className="bg-white p-8 rounded-xl w-80 text-black">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded text-black  border border-gray-300"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 rounded text-black  border border-gray-300"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-emerald-500 py-2 rounded hover:bg-emerald-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
