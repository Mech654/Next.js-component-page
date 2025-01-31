"use client";

const HoverTiltButton = () => {
  return (
    <button className="group relative rounded-lg px-8 py-3 overflow-hidden 
                      border-2 border-gray-300 hover:border-gray-400
                      dark:border-gray-600 dark:hover:border-gray-500
                      bg-transparent transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
      
      {/* Animated text content */}
      <div className="flex items-center">
        <span className="inline-block text-gray-800 dark:text-gray-200">
          <span className="block transition-transform duration-500 
                          group-hover:rotate-3 group-hover:translate-x-2">
            Sneak Away
          </span>
        </span>
      </div>

      {/* Animated underline */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-600
                     transform origin-left scale-x-0 transition-transform duration-500
                     group-hover:scale-x-100">
      </div>

      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-30
                      transition-opacity duration-300
                      [background:radial-gradient(circle_at_center,_#64748b22_0%,_transparent_60%)]">
      </div>
    </button>
  );
};

export default HoverTiltButton;