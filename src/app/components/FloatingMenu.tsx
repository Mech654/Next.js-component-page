"use client";

import { useState } from "react";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Menu items with icons
  const actions = [
    { id: 1, label: "New File", icon: "📄" },
    { id: 2, label: "Upload", icon: "📤" },
    { id: 3, label: "Share", icon: "🔗" },
    { id: 4, label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="relative z-50">
      {/* Main floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300
          ${isOpen ? 
            "bg-gray-800 dark:bg-gray-200 rotate-45 scale-110" : 
            "bg-blue-600 dark:bg-blue-500 rotate-0"}
        `}
      >
        <span className={`transition-transform ${isOpen ? "scale-75" : ""}`}>
          {isOpen ? "×" : "+"}
        </span>
      </button>

      {/* Action buttons */}
      <div className="absolute bottom-full right-0 mb-4">
        {actions.map((action, index) => (
          <div
            key={action.id}
            className={`absolute right-0 flex items-center gap-3 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${isOpen ? 
                "opacity-100 translate-y-0" : 
                "opacity-0 translate-y-10 pointer-events-none"
            }`}
            style={{
              bottom: `${index * 60}px`,
              transitionDelay: isOpen ? `${index * 75}ms` : "0ms"
            }}
          >
            <span className="text-sm bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-3 py-1 rounded-lg shadow-md">
              {action.label}
            </span>
            <button
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-transform
                bg-blue-600 dark:bg-blue-500 hover:scale-110`}
            >
              {action.icon}
            </button>
          </div>
        ))}
      </div>

      {/* Backdrop (without blur effect on menu) */}
      <div
        className={`fixed inset-0 bg-black/10 dark:bg-white/5 transition-opacity
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default FloatingMenu;
