"use client";

const FancyButton = () => {
  return (
    <button className="group relative isolate overflow-hidden rounded-full px-8 py-3.5 font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
                      bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
                      dark:from-purple-700 dark:to-blue-600 dark:hover:from-purple-800 dark:hover:to-blue-700
                      scale-100 hover:scale-105 active:scale-95
                      shadow-lg hover:shadow-xl dark:shadow-purple-900/30">
      
      {/* Gradient overlay animation */}
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 
                      group-hover:opacity-30 group-active:opacity-20
                      bg-[radial-gradient(circle_at_var(--x)_var(--y),#fff_10%,transparent_70%)]"
           style={{ 
             // Track mouse position for dynamic gradient
             ['--x' as any]: '0px', 
             ['--y' as any]: '0px' 
           }}
           onMouseMove={(e) => {
             const rect = e.currentTarget.getBoundingClientRect();
             e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
             e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
           }}>
      </div>

      {/* Button content */}
      <span className="relative flex items-center gap-2 text-white dark:text-gray-100">
        <span className="translate-y-0.5">🌟</span>
        <span className="tracking-wide">Magic Button</span>
        <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 
                        group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </span>

      {/* Ambient animation */}
      <div className="absolute -inset-4 -z-20 opacity-0 group-hover:opacity-40 
                      transition-opacity duration-500 blur-xl
                      bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#8b5cf6_50%,#fff_100%)] 
                      dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#8b5cf6_50%,#000_100%)]">
      </div>
    </button>
  );
};

export default FancyButton;