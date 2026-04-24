import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import PartnerMarquee from "@/components/PartnerMarquee";
import ContactSection from "@/components/ContactSection";

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'ar' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <main className={`min-h-screen bg-[#EAECEF] ${lang === 'ar' ? 'font-cairo' : 'font-outfit'}`}>
      <Header lang={lang} dict={dict.header} />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Services dict={dict.services} />
      <HowItWorks dict={dict.howItWorks} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <PartnerMarquee dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict.footer} />
    </main>
  );
}
