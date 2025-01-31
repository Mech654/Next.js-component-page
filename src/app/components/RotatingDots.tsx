export default function RotatingDots() {
    return (
      <div className="w-12 h-12 flex justify-center items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    );
  }
  