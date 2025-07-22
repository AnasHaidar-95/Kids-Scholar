import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#bb4fa9] text-white pt-10 pb-6 px-6 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* ✅ About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About KidsScholar</h3>
          <p className="text-sm text-purple-100">
            KidsScholar is a fun and interactive platform that helps children
            learn through games, lessons, and quizzes.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-purple-100">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Games
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Lessons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Quizzes
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-3">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-purple-100">
            Email: contact@kidsscholar.com
          </p>
        </div>
      </div>

      {/* ✅ Bottom note */}
      <div className="mt-10 text-center text-sm text-purple-100">
        © {new Date().getFullYear()} KidsScholar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
