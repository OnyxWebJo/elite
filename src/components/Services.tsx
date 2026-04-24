"use client";

import { Search, PenTool, Truck, Ship, Box, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function Services({ dict }: { dict: any }) {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Search className="w-8 h-8 text-white" />;
      case 1: return <PenTool className="w-8 h-8 text-white" />;
      case 2: return <Truck className="w-8 h-8 text-white" />;
      case 3: return <Box className="w-8 h-8 text-white" />;
      case 4: return <Ship className="w-8 h-8 text-white" />;
      case 5: default: return <Bell className="w-8 h-8 text-white" />;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="bg-black text-white py-24 px-6 lg:px-12 border-t-4 border-red-600 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-4">{dict.label}</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">{dict.title}</h3>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dict.items.map((service: any, index: number) => (
            <motion.div 
              variants={item}
              key={index} 
              className="bg-[#111] p-8 border border-white/10 hover:border-red-600 transition-colors group cursor-pointer relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform relative z-10">
                {getIcon(index)}
              </div>
              <h4 className="text-xl font-bold uppercase mb-4 tracking-wider relative z-10">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed relative z-10">
                {service.description}
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/5 blur-3xl rounded-full group-hover:bg-red-600/20 transition-colors"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
