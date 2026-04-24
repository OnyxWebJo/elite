"use client";

import { MessageSquare, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header({ lang, dict }: { lang?: string, dict?: any }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const currentLang = lang || 'en';
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    if (!pathname) return;
    const newPath = pathname.replace(`/${currentLang}`, `/${nextLang}`);
    router.push(newPath || `/${nextLang}`);
  };

  const navLinks = [
    { name: dict?.links?.home || "Home", href: `/${lang}` },
    { name: dict?.links?.about || "About", href: `/${lang}#about` },
    { name: dict?.links?.services || "Services", href: `/${lang}#services` },
    { name: dict?.links?.process || "Process", href: `/${lang}#process` },
    { name: dict?.links?.offers || "Offers", href: `/${lang}/offers` },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-red-600' : 'bg-transparent py-8 border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href={`/${lang}`} className="flex flex-col group relative z-50">
            <span className="text-2xl font-black tracking-widest text-white uppercase group-hover:text-red-500 transition-colors drop-shadow-lg">
              ELITE <span className="font-light">النخبة</span>
            </span>
            <span className="text-xs tracking-[0.3em] text-red-500 uppercase mt-1 drop-shadow-md">
              {dict?.global || "Global Cargo"}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.href}
                className="text-sm text-gray-300 font-bold uppercase tracking-wider hover:text-red-500 transition-colors drop-shadow-md"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#chat" className="flex items-center gap-2 text-sm font-bold text-white uppercase hover:text-red-500 transition-colors drop-shadow-md">
              <MessageSquare className="w-5 h-5 text-red-600" />
              {dict?.chat || "CHAT 24/7"}
            </a>
            
            <div className="h-6 w-px bg-white/20"></div>

            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors font-black uppercase tracking-widest text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:border-red-600"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'عربي' : 'EN'} 
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white relative z-50 hover:text-red-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col pt-32 px-6 pb-8`} style={{ height: '100svh' }}>
        <nav className="flex flex-col gap-8 mb-12">
          {navLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-black text-white uppercase tracking-wider hover:text-red-500 transition-colors border-b border-white/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto flex flex-col gap-6">
          <a href="#chat" className="flex items-center gap-4 text-xl font-bold text-white uppercase">
            <div className="p-3 bg-red-600 rounded-full">
              <MessageSquare className="w-6 h-6" />
            </div>
            {dict?.chat || "CHAT 24/7"}
          </a>
          <button 
            onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
            className="flex items-center justify-center gap-2 text-lg font-black uppercase tracking-widest text-white bg-white/10 py-5 rounded-xl border border-white/20"
          >
            <Globe className="w-6 h-6" />
            Switch to {lang === 'en' ? 'عربي' : 'English'} 
          </button>
        </div>
      </div>
    </>
  );
}
