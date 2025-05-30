import React from 'react';

const Loader: React.FC<{ message?: string }> = ({ message }) => {
  // Decide animation type
  const isLanding = message && message.toLowerCase().includes('out');
  // Rocket launch for login/register, landing for logout
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/20">
      <div className="relative h-32 w-32 flex items-end justify-center">
        {/* Rocket SVG */}
        <svg
          className={`absolute left-1/2 -translate-x-1/2 ${isLanding ? 'animate-rocket-land' : 'animate-rocket-launch'}`}
          width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect x="28" y="48" width="8" height="12" rx="4" fill="#FACC15" opacity=".7" />
            <path d="M32 8C38 16 44 40 32 56C20 40 26 16 32 8Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
            <rect x="29.5" y="38" width="5" height="10" rx="2.5" fill="#1D4ED8" />
            <ellipse cx="32" cy="18" rx="2" ry="4" fill="#60A5FA" />
            <rect x="30" y="54" width="4" height="6" rx="2" fill="#F59E42" />
          </g>
        </svg>
        {/* Rocket smoke/flame */}
        {!isLanding ? (
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">
            <div className="w-6 h-6 bg-yellow-400 rounded-full opacity-70 animate-pulse mb-1"></div>
            <div className="w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
          </div>
        ) : (
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">
            <div className="w-6 h-2 bg-gray-300 rounded-full opacity-60 animate-bounce"></div>
          </div>
        )}
      </div>
      <div className="mt-8 text-lg font-medium text-primary-700 animate-pulse">{message || 'Loading...'}</div>
      <style>{`
        @keyframes rocket-launch {
          0% { transform: translate(-50%, 60px); }
          60% { transform: translate(-50%, -40px); }
          80% { transform: translate(-50%, 0); }
          100% { transform: translate(-50%, -32px); }
        }
        .animate-rocket-launch {
          animation: rocket-launch 1s cubic-bezier(.4,2,.6,1) infinite alternate;
        }
        @keyframes rocket-land {
          0% { transform: translate(-50%, -32px); }
          60% { transform: translate(-50%, 60px); }
          80% { transform: translate(-50%, 0); }
          100% { transform: translate(-50%, 8px); }
        }
        .animate-rocket-land {
          animation: rocket-land 1s cubic-bezier(.4,2,.6,1) infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Loader;
