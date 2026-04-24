import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Elite Cargo | النخبة",
  description: "Elite Global Cargo: Shipping performance machines and freight from USA auctions directly to Iraq, Jordan, and Dubai.",
  keywords: "Elite, Cars, Shipping, Cargo, USA, Copart, IAAI, Adesa, Iraq, Dubai, Jordan, النخبة, شحن, سيارات, استيراد سيارات من أمريكا للعراق, شراء سيارات من Copart العراق, شحن سيارات من أمريكا إلى النجف, مزادات السيارات الأمريكية, Car import from USA to Iraq, Copart Iraq shipping, IAAI car export to Middle East",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir} className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </head>
      <body className={`antialiased bg-[#EAECEF] text-gray-900 ${lang === 'ar' ? 'font-cairo' : 'font-outfit'}`}>
        {children}
      </body>
    </html>
  );
}
