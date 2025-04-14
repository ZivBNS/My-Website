import { useState } from "react";
import { links } from "../data";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setActiveSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (text) => {
    setActiveSection(text);
    setIsOpen(false);
  };
  return (
    <nav className="accent shadow-sm animate-navbar-slide w-full">
      <div className="mx-auto max-w-7xl px-5 py-3 flex items-center justify-start gap-x-6 sm:gap-x-10 transition-all duration-500 overflow-x-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 whitespace-nowrap">
          Software Engineer
        </h1>
        <div className="hidden sm:flex flex-wrap items-center gap-x-4 sm:gap-x-6 whitespace-nowrap">
          {links.map(({ id, text }) => {
            const isActive = activeSection === text;
            return (
              <button
                key={id}
                onClick={() => setActiveSection(text)}
                className={`capitalize text-lg sm:text-xl tracking-wide transition duration-300 ${
                  isActive
                    ? "text-green-700 underline underline-offset-4 font-semibold"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                {text}
              </button>
            );
          })}
        </div>
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-green-700"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-y-2 py-3 bg-green-50 shadow-inner">
          {links.map(({ id, text }) => {
            const isActive = activeSection === text;
            return (
              <button
                key={id}
                onClick={() => handleLinkClick(text)}
                className={`capitalize text-lg tracking-wide transition duration-300 ${
                  isActive
                    ? "text-green-700 underline underline-offset-4 font-semibold"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                {text}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
