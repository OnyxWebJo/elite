import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OffersGrid from "@/components/OffersGrid";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function OffersPage({ params }: { params: Promise<{ lang: 'en' | 'ar' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <main className={`min-h-screen bg-[#EAECEF] ${lang === 'ar' ? 'font-cairo' : 'font-outfit'}`}>
      <Header lang={lang} dict={dict.header} />
      
      {/* Page Header */}
      <section className="bg-black pt-40 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/10 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-4">{dict.offersPage.subtitle}</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6">{dict.offersPage.title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-light">{dict.offersPage.description}</p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-24 px-6 lg:px-12 overflow-hidden">
        <OffersGrid lang={lang} dict={dict} />
      </section>

      <Footer lang={lang} dict={dict.footer} />
    </main>
  );
}
