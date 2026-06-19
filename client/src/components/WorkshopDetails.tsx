import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, Laptop, Users } from 'lucide-react';
import React, { useRef, useState } from 'react';

const details = [
  {
    title: 'Age Group',
    value: '8–14 Years',
    icon: Users,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    title: 'Duration',
    value: '4 Weeks',
    icon: Clock,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  },
  {
    title: 'Mode',
    value: 'Online',
    icon: Laptop,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    title: 'Fee',
    value: '₹2,999',
    icon: CreditCard,
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
  },
  {
    title: 'Start Date',
    value: '15 July 2026',
    icon: Calendar,
    color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
  },
];

const SpotlightCard = ({ item, index }: { item: any, index: number }) => {
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
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative glass-card rounded-3xl p-6 flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer group overflow-hidden border border-slate-200/50 dark:border-white/10"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-3xl z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(139,92,246,0.15), transparent 40%)`,
        }}
      />
      <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg ${item.color}`}>
        <Icon size={26} />
      </div>
      <h3 className="relative z-10 text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 tracking-wider uppercase text-xs">
        {item.title}
      </h3>
      <p className="relative z-10 text-2xl font-bold text-slate-900 dark:text-white">
        {item.value}
      </p>
    </motion.div>
  );
};

export default function WorkshopDetails() {
  return (
    <section id="details" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Workshop Overview
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about the upcoming summer batch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {details.map((item, index) => (
            <SpotlightCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
