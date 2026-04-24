import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OffersGrid from "@/components/OffersGrid";

// Placeholder car data for the offers page
const CARS = [
  { id: 1, name: "2023 Dodge Charger SRT Hellcat", auction: "Copart", location: "TX, USA", miles: "12,000", price: "$45,000", img: "/images/car.png" },
  { id: 2, name: "2022 Ford Mustang GT Premium", auction: "IAAI", location: "CA, USA", miles: "8,500", price: "$32,000", img: "/images/car.png" },
  { id: 3, name: "2024 Chevrolet Camaro ZL1 1LE", auction: "Manheim", location: "FL, USA", miles: "3,000", price: "$65,000", img: "/images/car.png" },
  { id: 4, name: "2021 BMW M4 Competition G82", auction: "Copart", location: "NY, USA", miles: "22,000", price: "$58,000", img: "/images/car.png" },
];

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
        <OffersGrid dict={dict} CARS={CARS} />
      </section>

      <Footer dict={dict.footer} />
    </main>
  );
}
