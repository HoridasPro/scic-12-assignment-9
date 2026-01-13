"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  return (
    <section id="contact" className="py-20 bg-[#E9F5E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We would love to hear from you! Reach out with any questions or feedback about our fresh fruits.
          </p>

          <div className="flex flex-col gap-4 mt-4 text-gray-700">
            <div className="flex items-center gap-4">
              <FiPhone className="text-lime-500 text-xl" />
              <span>+880 1234 567 890</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-lime-500 text-xl" />
              <span>info@freshfruits.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-lime-500 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-[#DFF5D8] shadow-lg rounded-xl p-6 md:p-10">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white text-black border border-lime-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white text-black border border-lime-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition placeholder:text-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-white text-black border border-lime-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition placeholder:text-gray-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 w-max"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
