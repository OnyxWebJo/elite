"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/images/auction-logos/copart.png", alt: "Copart" },
  { src: "/images/auction-logos/iaai.jpg", alt: "IAAI" },
  { src: "/images/auction-logos/manhaiem.jpeg", alt: "Manheim" },
  { src: "/images/auction-logos/adesa.png", alt: "Adesa" },
  { src: "/images/auction-logos/maersk.png", alt: "Maersk" },
  { src: "/images/auction-logos/msc.png", alt: "MSC" },
  { src: "/images/auction-logos/logo_HLAG.png", alt: "Hapag-Lloyd" },
];

export default function PartnerMarquee({ dict }: { dict: any }) {
  // We duplicate the array to ensure seamless looping
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-16 border-t border-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <h2 className="text-center text-sm font-bold text-gray-400 tracking-widest uppercase">
          {dict.partners?.title || "Trusted Partners & Auctions"}
        </h2>
      </div>

      <div className="relative w-full flex items-center overflow-hidden h-32" dir="ltr">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex items-center gap-16 md:gap-32 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative w-32 h-16 md:w-48 md:h-24 transition-transform duration-300 flex-shrink-0"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                fill 
                className="object-contain" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
