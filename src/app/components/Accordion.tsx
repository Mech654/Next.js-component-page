"use client";

import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Default accordion items
  const items = [
    {
      id: 1,
      question: "What is Tailwind CSS?",
      answer: "A utility-first CSS framework for rapidly building custom designs."
    },
    {
      id: 2,
      question: "How do I use dark mode?",
      answer: "Add 'darkMode: \"class\"' to tailwind.config.js and toggle the 'dark' class on the HTML element."
    },
    {
      id: 3,
      question: "Is this component responsive?",
      answer: "Yes! It's built with mobile-first Tailwind classes."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {items.map((item, index) => (
        <div 
          key={item.id}
          className="mb-3 border rounded-lg m-10 dark:border-gray-700 overflow-hidden"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-5 py-4 text-left flex justify-between items-center 
                      bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
                      transition-colors duration-200"
          >
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {item.question}
            </h3>
            <span className={`transform transition-transform duration-300 
                            ${openIndex === index ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {/* Accordion Content */}
          <div
            className={`transition-all duration-300 ease-in-out 
                      ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="px-5 pb-4 pt-1 text-gray-600 dark:text-gray-300">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;