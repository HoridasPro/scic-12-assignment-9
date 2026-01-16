"use client";

import Link from "next/link";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true); // Navbar visibility
  const [lastScroll, setLastScroll] = useState(0); // Track last scroll
  const [scrolled, setScrolled] = useState(false); // Shadow/bg after scroll
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Add shadow & background after scrolling a bit
      setScrolled(currentScroll > 50);

      // Show navbar if scroll up, hide if scroll down
      if (currentScroll <= 0) {
        setVisible(true); // Always show at top
      } else if (currentScroll > lastScroll) {
        setVisible(false); // Scrolling down → hide
      } else {
        setVisible(true); // Scrolling up → show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-transform duration-150 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[#3f4d3f] shadow-lg backdrop-blur-sm"
          : "bg-[#3f4d3f] shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-lime-400">
          FreshFruits
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link href="/home">HOME</Link>
          </li>
          <li>
            <Link href="/aboutSection">ABOUT</Link>
          </li>
          <li>
            <Link href="/contactPage">CONTACT</Link>
          </li>
          <li>
            <button className="btn bg-green-500 px-4 py-2 rounded-lg">
              <Link href="/login">LOGIN</Link>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          {/* <button
            className="text-white text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
