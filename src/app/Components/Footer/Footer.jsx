import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#021f1a] via-[#043d34] to-[#021f1a] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">🍏 FreshFruits</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Delivering fresh, organic, and healthy fruits directly from farms to
            our doorstep.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Social Links
          </h3>
          <div className="flex gap-4 text-xl">
            <Link
              href="https://www.facebook.com/horidas.sarker.1"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/haridas-sarker-658970288/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/HoridasPro"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition"
            >
              <FaGithub />
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Savar, Dhaka, Bangladesh</li>
            <li>horidassarker6@gmail.com</li>
            <li>+880 181 655 3754</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © 2026 <span className="text-white font-semibold">FreshFruits</span>.
        All rights reserved by{" "}
        <span className="text-green-500">Haridas Sarker</span>
      </div>
    </footer>
  );
};

export default Footer;
