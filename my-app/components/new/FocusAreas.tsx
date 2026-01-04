'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Rocket, ArrowUpRight } from 'lucide-react';

const focusData = [
  {
    id: 1,
    title: "Core Vision",
    desc: "Desire of Rural Women Upliftment Association “Establishment of Quality and Equitable and Prosperous Society.",
    metric: "1,200+ Students",
    icon: <Globe className="w-6 h-6" />,
    color: "from-[#4C1D95] to-[#6D28D9]",
    glow: "bg-[#4C1D95]/5",
    shadow: "shadow-[#4C1D95]/20",
    border: "group-hover:border-[#4C1D95]/40"
  },
  {
    id: 2,
    title: "Core Mission",
    desc: "To transform the community by mobilizing and empowering the target group, improving economic and social life.",
    metric: "45+ Cooperatives",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-[#C2410C] to-[#EA580C]",
    glow: "bg-[#C2410C]/5",
    shadow: "shadow-[#C2410C]/20",
    border: "group-hover:border-[#C2410C]/40"
  },
  {
    id: 3,
    title: "Core Goal",
    desc: "A dignified life will be built by improving the quality of education healthy life and income of the Community.",
    metric: "5k+ Lives",
    icon: <Target className="w-6 h-6" />,
    color: "from-[#D97706] to-[#F59E0B]",
    glow: "bg-[#D97706]/5",
    shadow: "shadow-[#D97706]/20",
    border: "group-hover:border-[#D97706]/40"
  }
];

export const FocusAreas: React.FC = () => {
  return (
    <section className="py-32 bg-[#ffffff] text-slate-900 overflow-hidden relative">
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4C1D95]/5 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C2410C]/5 rounded-full blur-[100px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section - Adjusted for Single Line */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end gap-8 justify-between border-b border-slate-100 pb-16">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#C2410C]" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Strategic Framework</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[110px] font-black tracking-tighter leading-none uppercase text-[#1e293b] whitespace-nowrap">
              Pillars of <span className="text-[#4C1D95] italic font-serif lowercase px-2 lg:px-4">Impact.</span>
            </h2>
          </div>

          <div className="max-w-[320px] lg:mb-4">
            <div className="h-[2px] w-12 bg-[#D97706] mb-6 hidden lg:block" />
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium opacity-80">
              Nurturing rural potential through education, healthcare, and economic empowerment initiatives.
            </p>
          </div>
        </div>

        {/* The Warp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.02, rotateY: 8, rotateX: 2 }} 
              className="group relative"
              style={{ perspective: '1200px' }}
            >
              <div className={`h-full bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-500 ${item.border} hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]`}>
                
                <div className={`absolute inset-0 ${item.glow} opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500 -z-10`} />

                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-10 shadow-xl ${item.shadow} group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold tracking-tighter text-slate-800 transition-colors group-hover:text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <div className="px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-0.5">Reach</span>
                    <span className="text-sm font-bold text-slate-700 uppercase">{item.metric}</span>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-gradient-to-br ${item.color} group-hover:text-white transition-all duration-500`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className={`absolute bottom-0 left-12 right-12 h-[3px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};