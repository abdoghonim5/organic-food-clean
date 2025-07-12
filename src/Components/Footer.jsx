import {
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-green-950 text-white h-16 mt-6 shadow-inner flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <span className="font-bold text-lg tracking-wide">Organic Food</span>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61576700668720"
              className="hover:text-green-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/theghonim/"
              className="hover:text-green-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/theghonim/"
              className="hover:text-green-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
          <span className="text-xs text-gray-300">© 2025 | Abdo Ghonim</span>
        </div>
      </footer>
      {/* Fixed Arrow Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center bg-green-700 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition opacity-60 hover:opacity-100"
          aria-label="Go to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Footer;
