"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero({ dict }: { dict: any }) {
  const [current, setCurrent] = useState(0);

  // We map the images sequentially to the dictionary slides
  const images = ["/images/car.png", "/images/cargo.png", "/images/car.png", "/images/cargo.png"];

  const nextSlide = () => {
    setCurrent((prev) => (prev === dict.slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? dict.slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [dict]);

  const slide = dict.slides[current];

  return (
    <div className="relative w-full h-[100svh] min-h-[600px] bg-black overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Cinematic Scale */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={images[current]}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
          </motion.div>

          {/* Large background typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-32 select-none pointer-events-none z-10">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 0.1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-[15vw] sm:text-[14vw] font-black uppercase text-white tracking-widest break-words text-center px-4"
            >
              {slide.subtitle}
            </motion.h1>
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 0.1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-[15vw] sm:text-[14vw] font-black uppercase text-white tracking-widest break-words text-center px-4"
            >
              {slide.textBg}
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative lines */}
      <div className="absolute left-[10%] rtl:right-[10%] rtl:left-auto top-0 bottom-0 w-px bg-white/10 z-20 pointer-events-none hidden md:block"></div>
      <div className="absolute right-[15%] rtl:left-[15%] rtl:right-auto top-0 bottom-0 w-px bg-white/10 z-20 pointer-events-none hidden md:block"></div>

      {/* Foreground Content */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-end pb-24 border-b border-white/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-text"}
            initial={{ opacity: 0, x: -30 }} // should animate according to rtl/ltr later
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:w-1/2"
          >
            {/* Red Accent Line */}
            <div className="w-12 h-1 bg-red-600 mb-6"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide leading-snug">
              {slide.title}
            </h2>
            <p className="text-gray-200 font-light text-base md:text-lg leading-relaxed mb-8 max-w-md drop-shadow-md">
              {slide.description}
            </p>
            <div className="flex items-center gap-6">
              <button className="group relative flex items-center gap-2 text-sm font-bold tracking-widest uppercase border border-red-600 bg-red-600 text-white px-8 py-4 hover:bg-white hover:text-red-600 hover:border-white transition-all duration-300 overflow-hidden">
                <span className="relative z-10">{dict.discover}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 ltr:ml-2 rtl:mr-2 relative z-10 transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-10 right-6 lg:right-12 rtl:left-6 rtl:right-auto rtl:lg:left-12 z-30 flex items-center gap-4">
        <button 
          onClick={prevSlide}
          className="p-3 border border-white/30 rounded-full hover:bg-red-600 hover:border-red-600 transition-colors text-white"
        >
          <ArrowLeft className="w-5 h-5 rtl:hidden" />
          <ArrowRight className="w-5 h-5 hidden rtl:block" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 border border-white/30 rounded-full hover:bg-red-600 hover:border-red-600 transition-colors text-white"
        >
          <ArrowRight className="w-5 h-5 rtl:hidden" />
          <ArrowLeft className="w-5 h-5 hidden rtl:block" />
        </button>
      </div>
    </div>
  );
}
