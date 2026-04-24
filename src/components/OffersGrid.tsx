"use client";

import { motion, Variants } from "framer-motion";
import { Gauge, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CARS = [
  { id: 1, name: "2024 Porsche 911 GT3", price: "$198,000", auction: "Copart", loc: "Florida, USA", miles: "1,200", img: "/images/car.png" },
  { id: 2, name: "2023 Mercedes-AMG G63", price: "$185,000", auction: "IAAI", loc: "California, USA", miles: "5,400", img: "/images/car.png" },
  { id: 3, name: "2024 BMW M4 Competition", price: "$84,500", auction: "Manheim", loc: "Texas, USA", miles: "800", img: "/images/car.png" },
  { id: 4, name: "2023 Audi RS7 Sportback", price: "$114,000", auction: "Adesa", loc: "New York, USA", miles: "3,200", img: "/images/car.png" },
];

export default function OffersGrid({ lang, dict }: { lang: string, dict: any }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px" }}
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
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              {car.auction}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight truncate">
              {car.name}
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-black text-red-600">{car.price}</span>
            </div>

            <div className="grid grid-cols-2 gap-y-3 mb-8">
              <div className="flex items-center gap-2 text-gray-500 text-xs uppercase font-medium">
                <Gauge className="w-3 h-3 text-red-600" />
                {car.miles} MI
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs uppercase font-medium">
                <Calendar className="w-3 h-3 text-red-600" />
                2024
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs uppercase font-medium col-span-2">
                <ShieldCheck className="w-3 h-3 text-red-600" />
                {car.loc}
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-4 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-colors group/btn">
              {dict.inquire}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
