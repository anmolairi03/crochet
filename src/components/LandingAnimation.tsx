import { useState, useEffect } from 'react';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation: React.FC<LandingAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'logo' | 'text' | 'fade'>('logo');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Logo animation phase
    const timer1 = setTimeout(() => {
      setPhase('text');
    }, 2000);

    // Text animation phase
    const timer2 = setTimeout(() => {
      setPhase('fade');
    }, 3500);

    // Fade out and complete
    const timer3 = setTimeout(() => {
      setShowContent(true);
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (showContent) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-primary-100 via-accent-100 to-warm-100 flex items-center justify-center overflow-hidden">
      {/* Animated Logo/Yarn Ball */}
      <div
        className={`absolute transition-all duration-1000 ease-in-out ${
          phase === 'logo'
            ? 'scale-100 opacity-100'
            : phase === 'text'
            ? 'scale-150 opacity-0'
            : 'scale-200 opacity-0'
        }`}
      >
        <div className="relative">
          {/* Crochet hook and yarn animation */}
          <div className="w-40 h-40 mx-auto relative">
            {/* Yarn ball */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 shadow-2xl animate-spin-slow relative">
                <div className="absolute inset-2 rounded-full bg-pink-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white opacity-80"></div>
              </div>
            </div>
            {/* Crochet hook */}
            <svg
              className="absolute top-0 right-0 w-16 h-16 text-purple-700 animate-fade-in-up"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17c-.74-.31-1.54-.5-2.42-.5-2.21 0-4.17 1.12-5.31 2.82L3 10h2v10h2v-8h2l2 2v6h2v-6l2-2h2V8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text Animation */}
      <div
        className={`absolute transition-all duration-1000 ease-in-out ${
          phase === 'text'
            ? 'opacity-100 translate-y-0'
            : phase === 'fade'
            ? 'opacity-0 -translate-y-8'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-gray-800 mb-4 animate-fade-in-up">
            Crocsets
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Handmade with Love
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Beautiful Yarn Creations
          </p>
        </div>
      </div>

      {/* Floating yarn elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 rounded-full bg-pink-400 opacity-20 animate-float"
            style={{
              left: `${15 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative stitches */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-30">
        <svg width="200" height="40" viewBox="0 0 200 40" className="text-pink-600">
          <path
            d="M 10 20 Q 30 10, 50 20 T 90 20 T 130 20 T 170 20 T 190 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
};

export default LandingAnimation;

