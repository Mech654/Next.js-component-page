"use client"; // Mark this as a Client Component

import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Default menu items
  const menuItems = [
    { id: 1, label: "Home", link: "#" },
    { id: 2, label: "About", link: "#" },
    { id: 3, label: "Services", link: "#" },
    { id: 4, label: "Contact", link: "#" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="flex flex-col space-y-1.5 p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-1 w-6 bg-black dark:bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-black dark:bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-black dark:bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>

      {/* Menu Items */}
      <div
        className={`absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <ul className="p-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;