import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Somos Familia — Salsa Cubaine à Paris',
    template: '%s | Somos Familia',
  },
  description:
    'Somos Familia est une association de Salsa Cubaine à Paris. Rejoignez nos soirées Timbanight (mardi) et La Communale (jeudi).',
  keywords: ['salsa cubaine', 'paris', 'somos familia', 'timba', 'danse', 'association'],
  openGraph: {
    title: 'Somos Familia — Salsa Cubaine à Paris',
    description: 'Une communauté passionnée au cœur de Paris.',
    type: 'website',
    locale: 'fr_FR',
  },
};

const locales = ['fr', 'es', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-inter bg-dark text-light antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
