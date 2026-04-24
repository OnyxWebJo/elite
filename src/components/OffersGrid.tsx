"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OffersGrid({ dict, CARS }: { dict: any, CARS: any[] }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
    >
      {CARS.map((car) => (
        <motion.div 
          variants={item}
          key={car.id} 
          className="bg-white group overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-b-4 border-transparent hover:border-red-600"
        >
          <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
            <Image 
              src={car.img} 
              alt={car.name} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
              {car.auction}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight leading-snug h-14 overflow-hidden">{car.name}</h3>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{dict.offersPage.location}:</span>
                <span className="font-bold text-gray-900">{car.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{dict.offersPage.miles}:</span>
                <span className="font-bold text-gray-900">{car.miles}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-gray-100 mt-2 pt-2">
                <span className="text-gray-500 uppercase tracking-widest">{dict.offersPage.price}:</span>
                <span className="font-black text-red-600 text-lg">{car.price}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="text-center bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 text-sm font-bold uppercase tracking-wider transition-colors">
                {dict.offersPage.viewDetails}
              </button>
              <button className="text-center bg-black hover:bg-red-600 text-white py-3 text-sm font-bold uppercase tracking-wider transition-colors">
                {dict.offersPage.inquire}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
