// components/Loader.jsx
import React from 'react';

const companyName = 'SRBHANJA';

const Loader1 = ({ isFadingOut }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-700 ease-in-out
        ${isFadingOut ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}
      `}
    >
      {/* Background with animated zoom/pan */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-pan"
        style={{ backgroundImage: 'url("/loader-bg.gif")' }}
      ></div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>

      {/* Foreground */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full space-y-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 text-green-400 animate-spin-slow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full"
            >
              <circle cx="32" cy="32" r="10" />
              <path d="M32 2v8M32 54v8M2 32h8M54 32h8M11.3 11.3l5.7 5.7M47 47l5.7 5.7M11.3 52.7l5.7-5.7M47 17l5.7-5.7" />
              <path d="M38 26l-6 12 12-6-6-6z" fill="currentColor" className="text-yellow-400 animate-ping" />
            </svg>
          </div>

          {/* Letters */}
          <div className="flex space-x-1">
            {companyName.split('').map((char, index) => (
              <span
                key={index}
                className="text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-lg opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.02}s`,
                  animationFillMode: 'forwards',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-green-400 rounded-full animate-spin shadow-lg"></div>

        {/* Text */}
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default Loader1;
