'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <span>{count}</span>;
};

const ScannerAnimation: React.FC = () => {
  return (
    <motion.div className="w-full max-w-[480px] mx-auto">
      <div className="bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-lg p-3 flex items-center gap-3 border border-slate-300 border-b-0">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
        </div>
        <div className="flex-1 text-center text-[13px] text-slate-600 font-medium">
          APIsec Scanner Dashboard
        </div>
      </div>

      <motion.div
        className="bg-slate-800 rounded-b-lg p-6 text-white border border-slate-300 border-t-0"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-6">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#06D6A0]/15 text-[#06D6A0] px-4 py-2 rounded-md font-semibold text-sm mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8, type: 'spring' }}
          >
            <span className="text-base">✓</span> Scan Complete
          </motion.div>
          <div className="text-slate-400 text-[13px] mt-2">
            <span className="text-[#0B8A9F] font-semibold text-lg">
              <CountUp end={47} duration={1.2} delay={1} />
            </span> Endpoints Tested
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-5">
          {[
            { severity: 'Critical', count: 3, color: '#E63946', icon: '⚠️', textDark: false },
            { severity: 'High', count: 5, color: '#FF9F1C', icon: '⚠️', textDark: false },
            { severity: 'Medium', count: 8, color: '#FFD60A', icon: '⚠️', textDark: true },
            { severity: 'Passed', count: 31, color: '#06D6A0', icon: '✓', textDark: false }
          ].map((vuln, index) => (
            <motion.div
              key={vuln.severity}
              className="flex items-center justify-between p-3 bg-white/5 rounded-md hover:bg-white/8 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.2 + (index * 0.15)
              }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[13px] font-semibold"
                style={{
                  backgroundColor: vuln.color,
                  color: vuln.textDark ? '#1a1a1a' : '#ffffff'
                }}
              >
                <span className="text-sm">{vuln.icon}</span>
                {vuln.severity}
              </span>
              <span className="text-xl font-bold text-white">
                <CountUp end={vuln.count} duration={0.8} delay={1.2 + (index * 0.15)} />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center text-[#0B8A9F] font-semibold cursor-pointer p-3 rounded-md hover:bg-[#0B8A9F]/10 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          View Details →
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const BoltAnimation: React.FC = () => {
  const endpoints = [
    { method: 'GET', path: '/api/users' },
    { method: 'POST', path: '/api/auth/login' },
    { method: 'PUT', path: '/api/profile' },
    { method: 'DELETE', path: '/api/sessions' }
  ];

  const getMethodStyles = (method: string): string => {
    const styles: Record<string, string> = {
      'GET': 'bg-blue-100 text-blue-900',
      'POST': 'bg-green-100 text-green-900',
      'PUT': 'bg-orange-200 text-orange-900',
      'DELETE': 'bg-red-100 text-red-900'
    };
    return styles[method] || 'bg-gray-100 text-gray-900';
  };

  return (
    <motion.div className="w-full max-w-[480px] mx-auto">
      <motion.div
        className="bg-white rounded-lg overflow-visible shadow-lg"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-lg p-3 flex items-center gap-3 border border-slate-300">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-2 flex items-center gap-2 border border-slate-200">
            <span className="text-sm">🔒</span>
            <span className="flex-1 text-slate-600 text-[13px]">example.com/api</span>

            <motion.div
              className="w-6 h-6 bg-gradient-to-br from-[#0B8A9F] to-sky-500 rounded-md flex items-center justify-center text-sm shadow-md shadow-[#0B8A9F]/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                delay: 0.8
              }}
            >
              ⚡
            </motion.div>
          </div>
        </div>

        <div className="p-5 pb-5 min-h-[280px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-b-lg relative">
          <motion.div
            className="absolute top-[60px] right-6 w-[280px] bg-white rounded-lg shadow-2xl shadow-black/15 overflow-hidden"
            initial={{
              scale: 0,
              transformOrigin: 'top right',
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              type: 'spring'
            }}
          >
            <div className="bg-gradient-to-br from-[#0B8A9F] to-sky-500 text-white px-4 py-3.5 font-semibold text-sm flex items-center gap-2">
              <span className="text-base">🔍</span>
              Discovered APIs
            </div>

            <div className="p-3 max-h-[180px] overflow-hidden relative">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={`${endpoint.method}-${endpoint.path}`}
                  className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-md mb-2 hover:bg-slate-100 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.6 + (index * 0.2)
                  }}
                >
                  <span className={`px-2 py-1 rounded text-[11px] font-bold tracking-wide ${getMethodStyles(endpoint.method)}`}>
                    {endpoint.method}
                  </span>
                  <span className="flex-1 text-xs text-slate-600 font-mono">{endpoint.path}</span>
                </motion.div>
              ))}

              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0B8A9F] to-transparent opacity-50"
                initial={{ y: 0 }}
                animate={{ y: [0, 120, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2.5,
                  ease: 'linear'
                }}
              />
            </div>

            <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 text-[13px] text-slate-600 text-center font-medium">
              <span className="text-[#0B8A9F] font-bold">
                <CountUp end={endpoints.length} duration={0.5} delay={2.3} />
              </span> endpoints found
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LearningAnimation: React.FC = () => {
  const codeLines = [
    '$ curl -X POST \\',
    '  https://api.example.com/login \\',
    '  -H "Content-Type: application/json"',
    '',
    'Response: 200 OK'
  ];

  return (
    <motion.div
      className="w-full mx-auto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-4 shadow-md">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg h-[180px] flex items-center justify-center overflow-hidden">
            <div className="text-center text-white">
              <div className="text-5xl mb-3 opacity-50">📹</div>
              <div className="text-[13px] font-semibold opacity-80">API Penetration Testing</div>
            </div>
            <motion.button
              className="absolute w-[60px] h-[60px] rounded-full bg-[#0B8A9F]/95 text-white border-3 border-white text-xl flex items-center justify-center pl-1 cursor-pointer shadow-lg shadow-black/30 hover:bg-sky-500 transition-colors"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.8
              }}
            >
              ▶
            </motion.button>
          </div>

          <div className="p-3 bg-slate-800 rounded-md">
            <div className="text-xs text-slate-600 mb-2 font-medium">Course Progress</div>
            <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0B8A9F] to-sky-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                  ease: 'easeOut'
                }}
              />
            </div>
          </div>
        </motion.div>

        <div className="bg-slate-800 rounded-lg overflow-hidden flex flex-col">
          <div className="bg-slate-700 px-4 py-2.5 border-b border-slate-600">
            <span className="text-xs text-slate-400 font-semibold">Lab Terminal</span>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed text-slate-200 flex-1">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                className="mb-1 text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: 0.8 + (index * 0.3)
                }}
              >
                {line}
              </motion.div>
            ))}

            <motion.div
              className="mt-3 text-[#06D6A0] flex items-center gap-2 font-semibold"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 2.8
              }}
            >
              <motion.span
                className="inline-flex items-center justify-center w-5 h-5 bg-[#06D6A0]/20 rounded-full text-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  delay: 2.8
                }}
              >
                ✓
              </motion.span>
              Authentication successful
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface Slide {
  id: string;
  component: React.FC;
  caption: string;
  label: string;
}

const ProductShowcase: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 'scanner',
      component: ScannerAnimation,
      caption: 'Scan your APIs in 5 minutes. Trusted by Fortune 100 companies.',
      label: 'Scanner'
    },
    {
      id: 'bolt',
      component: BoltAnimation,
      caption: 'Discover API endpoints in real-time. Available for Chrome & Firefox.',
      label: 'Bolt Extension'
    },
    {
      id: 'learning',
      component: LearningAnimation,
      caption: 'Learn by doing. 120,000+ students mastering API security.',
      label: 'Learning Platform'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="w-full max-w-[600px] mx-auto font-sans">
      <div
        className="rounded-2xl p-10 pb-8 shadow-lg shadow-black/8 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-3 justify-center mb-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`w-2.5 h-2.5 rounded-full border-0 cursor-pointer transition-all relative p-0 ${
                index === currentSlide
                  ? 'bg-[#0B8A9F] w-3 h-3'
                  : 'bg-slate-400 hover:bg-slate-600 hover:scale-110'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to ${slide.label} slide`}
              title={slide.label}
            >
              {index === currentSlide && !isPaused && (
                <svg className="absolute -top-1.5 -left-1.5 w-6 h-6 -rotate-90 text-[#0B8A9F] opacity-50" viewBox="0 0 20 20">
                  <motion.circle
                    cx="10"
                    cy="10"
                    r="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        <button
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 border border-slate-200 cursor-pointer flex items-center justify-center text-xs text-slate-600 hover:bg-white hover:scale-110 hover:shadow-md transition-all backdrop-blur-sm"
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
        >
          {isPaused ? '▶' : '⏸'}
        </button>

        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full"
            >
              <div className="rounded-xl mb-8 shadow-md min-h-[400px] flex items-center justify-center">
                <CurrentSlideComponent />
              </div>

              <p className="text-center text-slate-600 text-[15px] leading-relaxed m-0 font-medium">
                {slides[currentSlide].caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
