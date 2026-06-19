import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', damping: 12, stiffness: 100 } },
};

export default function Hero() {
  const scrollToRegistration = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleWords1 = "Ignite Your Child's".split(' ');
  const titleWords2 = "Future in AI & Robotics".split(' ');

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-ai-light.png" alt="Background Light" className="w-full h-full object-cover opacity-50 dark:hidden" />
        <img src="/hero-ai.png" alt="Background Dark" className="w-full h-full object-cover hidden dark:block opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-[#03030a]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 border border-primary-100 dark:border-primary-800/50 shadow-sm backdrop-blur-md"
            >
              <Sparkles size={16} className="animate-pulse" />
              <span>Summer 2026 Admissions Open</span>
            </motion.div>
            
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 md:gap-x-4">
                {titleWords1.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 md:gap-x-4 mt-2">
                {titleWords2.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 animate-gradient">
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A 4-week immersive online workshop where kids aged 8-14 learn to build their own robots, understand AI, and code the future.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center lg:justify-start"
            >
              {/* Magic Shimmer Button */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-shimmer bg-[length:200%_100%]"></div>
                <button
                  onClick={scrollToRegistration}
                  className="relative w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-slate-950 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Enroll Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <a
                href="#details"
                className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-700 dark:text-white rounded-full font-semibold text-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                View Details
              </a>
            </motion.div>
          </div>

          {/* Empty right column */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
