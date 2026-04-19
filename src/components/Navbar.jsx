import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

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
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 z-[50] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">

          {/* LOGO & COMPANY NAME */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-9 sm:h-12 w-auto object-contain rounded-md"
              loading="eager"
            />
            <span className="text-base sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mahion Tech Solutions
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link, i) => (
              <li key={i} className="relative group">
                <Link to={link.path} className={navLinkClass}>
                  {link.name}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-2xl sm:text-3xl text-slate-800 p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-[100] lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-[80%] max-w-[300px] h-full bg-white z-[110] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-100">
                <span className="font-bold text-slate-900">Navigation</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-3xl text-slate-800 p-1"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                <ul className="flex flex-col space-y-1">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className="text-xl font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 px-6 py-4 block transition-colors border-l-4 border-transparent hover:border-blue-600"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <p className="text-sm text-gray-500 font-medium text-center">
                  © 2026 Mahion Tech Solutions
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
