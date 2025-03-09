/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/image/Black and Red Y2k Modern Professional Fashion Logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
  };

  return (
    <nav className="w-full bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="" className="w-18 object-cover" />

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.829 4.828 4.829 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          {/* <Link to={"/"}> */}
            <button href="#" className="btn text-gray-300 hover:text-white">
              Home
            </button>
          {/* </Link> */}
          {/* <Link to={"/about"}> */}
            <button href="#" className="btn text-gray-300 hover:text-white">
              About
            </button>
          {/* </Link> */}
          {/* <Link to={"/services"}> */}
            <button href="#" className="btn text-gray-300 hover:text-white">
              Services
            </button>
          {/* </Link> */}
          {/* <Link to={"/contact"}> */}
            <button href="#" className="btn text-gray-300 hover:text-white">
              Contact
            </button>
          {/* </Link> */}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden mt-2"
          >
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-white block py-2">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white block py-2">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white block py-2">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white block py-2">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
