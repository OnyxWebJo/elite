"use client";

import { MapPin, Phone, Mail, FileText } from "lucide-react";
import Link from "next/link";

const InstagramLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const XLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.964H5.078z"></path>
  </svg>
);

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
            <a href="#" className="p-3 bg-[#111] hover:bg-red-600 transition-colors rounded-full group flex items-center justify-center">
              <InstagramLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 bg-[#111] hover:bg-red-600 transition-colors rounded-full group flex items-center justify-center">
              <FacebookLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 bg-[#111] hover:bg-red-600 transition-colors rounded-full group flex items-center justify-center">
              <XLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
