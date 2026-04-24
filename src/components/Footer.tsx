"use client";

import { MapPin, Phone, Mail, FileText, Camera, Share2, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Footer({ lang, dict }: { lang?: string, dict: any }) {
  const currentLang = lang || 'en';
  const isAr = currentLang === 'ar';
  
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-12 border-t-8 border-red-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left rtl:sm:text-right">
        
        {/* Brand */}
        <div>
          <Link href={`/${currentLang}`} className="flex flex-col group mb-6 inline-flex">
            <span className="text-2xl font-black tracking-widest text-white uppercase group-hover:text-red-500 transition-colors">
              ELITE <span className="font-light">النخبة</span>
            </span>
            <span className="text-xs tracking-[0.3em] text-red-500 uppercase mt-1">
              {dict.brandSubtitle}
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
            {dict.brandDesc}
          </p>
          <div className="flex justify-center sm:justify-start rtl:sm:justify-start gap-4">
            <a href="#" className="p-3 bg-[#111] hover:bg-red-600 transition-colors rounded-full group">
              <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </a>
            <a href="#" className="p-3 bg-[#111] hover:bg-red-600 transition-colors rounded-full group">
              <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </a>
            <a href="#" className="p-3 bg-[#111] hover:bg-red-600 transition-colors rounded-full group">
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-6 tracking-wider">{dict.contact}</h4>
          <ul className="space-y-4">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-gray-400 text-sm hover:text-white transition-colors">
              <MapPin className="text-red-600 w-5 h-5 flex-shrink-0" />
              <span>{dict.location}</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
              <Phone className="text-red-600 w-5 h-5 flex-shrink-0" />
              <span>{dict.phone}</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
              <Mail className="text-red-600 w-5 h-5 flex-shrink-0" />
              <span>{dict.email}</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-6 tracking-wider">{dict.quickLinks}</h4>
          <ul className="space-y-3">
            <li><Link href={`/${currentLang}#about`} className="text-gray-400 text-sm hover:text-red-500 transition-colors uppercase">About Us</Link></li>
            <li><Link href={`/${currentLang}#services`} className="text-gray-400 text-sm hover:text-red-500 transition-colors uppercase">Our Services</Link></li>
            <li><Link href={`/${currentLang}#process`} className="text-gray-400 text-sm hover:text-red-500 transition-colors uppercase">The Process</Link></li>
            <li><Link href={`/${currentLang}/offers`} className="text-gray-400 text-sm hover:text-red-500 transition-colors uppercase font-bold text-red-500">Latest Deals</Link></li>
          </ul>
        </div>
        
        {/* Newsletter/CTAs */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-6 tracking-wider">{dict.subscribe}</h4>
          <p className="text-gray-400 text-sm mb-4 font-light">{dict.subscribeP}</p>
          <div className="flex border border-gray-800 focus-within:border-red-600 transition-colors">
            <input 
              type="email" 
              placeholder={dict.placeholder} 
              className="bg-[#111] text-white px-4 py-3 outline-none text-sm w-full"
            />
            <button className="bg-red-600 px-4 flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors group">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 text-xs uppercase tracking-widest text-center md:text-left rtl:md:text-right">
          &copy; {new Date().getFullYear()} {dict.rights}
        </p>
        <p className="text-gray-600 text-xs uppercase tracking-widest mt-4 md:mt-0 text-center md:text-right rtl:md:text-left font-bold">
          <a href="https://onyyx.tech/en/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
            {dict.designedBy}
          </a>
        </p>
      </div>
    </footer>
  );
}
