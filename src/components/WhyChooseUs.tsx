"use client";

import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs({ dict }: { dict: any }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white py-24 px-6 lg:px-12 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full"
        >
          {/* Abstract Image container */}
          <div className="relative h-[32rem] w-full bg-black flex items-center justify-center overflow-hidden group shadow-2xl rounded-sm">
            <Image 
               src="/images/why-choose-us.png" 
               alt="Elite Cargo Trust & Reliability" 
               fill 
               className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-red-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            
            {/* Dark gradient vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/80 z-20 pointer-events-none"></div>
          </div>
        </motion.div>
        
        <div className="md:w-1/2 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4"
          >
            {dict.label}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tight"
          >
            {dict.title}
          </motion.h3>
          <motion.ul 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {dict.points.map((point: string, i: number) => (
              <motion.li variants={item} key={i} className="flex items-start gap-4 text-gray-700 text-lg group">
                <CheckCircle className="text-red-600 w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium uppercase tracking-wide group-hover:text-red-600 transition-colors">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
