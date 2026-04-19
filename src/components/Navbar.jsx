import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Why Us", path: "/whychooseus" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass =
    "relative text-slate-800 font-semibold text-base lg:text-lg px-2 transition duration-300 hover:text-blue-600";

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img
            src={logo}
            alt="Mahion Tech Solutions Logo"
            className="h-10 sm:h-12 w-auto object-contain"
            loading="eager"
          />
          <span className="text-base sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
            Mahion Tech Solutions
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link, i) => (
            <li key={i} className="relative group">
              <Link to={link.path} className={navLinkClass}>
                {link.name}
              </Link>

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-2xl sm:text-3xl text-slate-800 p-2 touch-manipulation active:bg-gray-100 rounded"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 sm:w-72 h-full bg-white p-4 sm:p-6 z-50 shadow-lg overflow-y-auto"
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-slate-800 p-2 touch-manipulation active:bg-gray-100 rounded"
              >
                ✕
              </button>
            </div>

            <ul className="space-y-4 sm:space-y-6">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="text-lg sm:text-xl font-medium text-slate-800 hover:text-blue-600 transition block py-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;