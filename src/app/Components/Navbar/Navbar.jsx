"use client";

import Link from "next/link";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#3f4d3f]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-lime-400">
          Frutin
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link href="/">HOME +</Link>
          </li>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li>
            <Link href="/services">SERVICE +</Link>
          </li>
          <li>
            <Link href="/pages">PAGES +</Link>
          </li>
          <li>
            <Link href="/blog">BLOG +</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <button className="text-white text-xl">
            <FiSearch />
          </button>

          <div className="relative text-white text-xl">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>

          <Link
            href="/shop"
            className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2"
          >
            SHOP NOW <span>»</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
