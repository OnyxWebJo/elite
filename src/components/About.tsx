"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="bg-white py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">{dict.label}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            {dict.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 font-medium">
            {dict.p1}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {dict.p2}
          </p>
          <button className="text-sm font-bold tracking-widest uppercase border-b-2 border-red-600 pb-1 text-gray-900 hover:text-red-600 transition-colors">
            {dict.readMore}
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[28rem] w-full flex items-center justify-center group"
        >
          <div className="absolute inset-0 border-4 border-red-600 rtl:-translate-x-4 ltr:translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-y-2 group-hover:rtl:-translate-x-2 group-hover:ltr:translate-x-2"></div>
          <div className="relative w-full h-full shadow-2xl overflow-hidden z-10">
             <Image 
               src="/images/about-shipping.png" 
               alt="Elite Cargo Global Shipping & Auctions" 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
