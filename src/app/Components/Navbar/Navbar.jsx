"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      if (currentScroll <= 0) setVisible(true);
      else if (currentScroll > lastScroll) setVisible(false);
      else setVisible(true);

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-transform duration-150 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-[#3f4d3f] shadow-lg backdrop-blur-sm" : "bg-[#3f4d3f] shadow-lg backdrop-blur-sm"}`}
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
            {isLoggedIn ? (
              <Link
                href="/allcards"
                className="bg-green-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-green-600 transition"
              >
                ALL CARDS
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-green-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-green-600 transition"
              >
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
