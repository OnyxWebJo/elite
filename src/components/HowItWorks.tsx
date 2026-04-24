"use client";

import { motion, Variants } from "framer-motion";

export default function HowItWorks({ dict }: { dict: any }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
  };

  return (
    <section id="process" className="bg-[#EAECEF] py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4 text-center"
        >
          {dict.label}
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-gray-900 mb-16 uppercase tracking-tight text-center"
        >
          {dict.title}
        </motion.h3>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px" }}
          className="flex flex-col xl:flex-row justify-between items-start gap-8 relative"
        >
          {/* Connector Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden xl:block absolute top-12 left-0 right-0 w-full h-[2px] bg-gray-300 origin-left -z-10"
          ></motion.div>
          
          {dict.steps && dict.steps.map((step: string, index: number) => (
            <motion.div 
              variants={item}
              key={index} 
              className="flex-1 w-full bg-white p-6 shadow-md border-t-4 border-red-600 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="text-3xl font-black text-gray-300 mb-4 group-hover:text-red-500 transition-colors text-gradient">
                0{index + 1}.
              </div>
              <h4 className="text-base font-bold uppercase text-gray-900 leading-snug">
                {step}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
