import { motion } from 'framer-motion';
import { Bot, Code2, Lightbulb, Rocket, Zap } from 'lucide-react';
import React, { useRef, useState } from 'react';

const outcomes = [
  {
    title: 'Understand AI Fundamentals',
    description: 'Learn how artificial intelligence works and its real-world applications in a kid-friendly way.',
    icon: Lightbulb,
  },
  {
    title: 'Build Beginner Robotics Projects',
    description: 'Get hands-on experience building simple, interactive robots using basic components.',
    icon: Bot,
  },
  {
    title: 'Learn Programming Logic',
    description: 'Master the core concepts of coding through visual block-based programming and simple scripts.',
    icon: Code2,
  },
  {
    title: 'Explore Sensors & Automation',
    description: 'Understand how robots perceive their environment using light, sound, and motion sensors.',
    icon: Zap,
  },
  {
    title: 'Create a Final AI Project',
    description: 'Apply everything learned to design and build a final smart project to showcase.',
    icon: Rocket,
  },
];

const SpotlightOutcomeCard = ({ item, index }: { item: any, index: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = item.icon;

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card group p-8 rounded-3xl cursor-default relative overflow-hidden border border-slate-200/50 dark:border-white/10"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-3xl z-0"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.15), transparent 40%)`,
        }}
      />
      
      {/* Decorative background glow that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-gradient-to-tr group-hover:from-primary-600 group-hover:to-primary-400 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary-500/30 group-hover:shadow-lg">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function LearningOutcomes() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What Your Child Will Learn
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our curriculum is designed to be engaging, practical, and future-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, index) => (
            <SpotlightOutcomeCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
