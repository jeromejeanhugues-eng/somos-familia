import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');

  const navLinks = [
    { href: '/', label: tn('home') },
    { href: '/about', label: tn('about') },
    { href: '/events', label: tn('events') },
    { href: '/gallery', label: tn('gallery') },
    { href: '/join', label: tn('join') },
    { href: '/contact', label: tn('contact') },
  ];

  return (
    <footer className="bg-dark border-t border-light/5">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Somos Familia"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-playfair font-bold text-xl text-light">
                Somos <span className="text-gold">Familia</span>
              </span>
            </Link>
            <p className="text-light/50 text-sm leading-relaxed max-w-xs">
              {t('description')}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/somosfamilia.salsa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-light/40 hover:text-gold transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/somosfamiliasalsa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-light/40 hover:text-gold transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:somosfamilia9575@gmail.com"
                aria-label="Email"
                className="text-light/40 hover:text-gold transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-light mb-4 text-sm uppercase tracking-widest">
              {t('quick_links')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-light/50 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-light mb-4 text-sm uppercase tracking-widest">
              {t('contact_us')}
            </h3>
            <ul className="space-y-2 text-light/50 text-sm">
              <li>Paris, Île-de-France</li>
              <li>
                <a
                  href="mailto:somosfamilia9575@gmail.com"
                  className="hover:text-gold transition-colors duration-200"
                >
                  somosfamilia9575@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-gold text-xs uppercase tracking-widest">Timbanight</span>
                <br />Chaque mardi · 19h00
              </li>
              <li>
                <span className="text-gold text-xs uppercase tracking-widest">La Communale</span>
                <br />Chaque jeudi · 19h00
              </li>
              <li>
                <span className="text-rose-400 text-xs uppercase tracking-widest">La Noche Cubana</span>
                <br />2e samedi du mois · 20h00
              </li>
              <li>
                <span className="text-cyan-400 text-xs uppercase tracking-widest">Quai en Salsa ☀</span>
                <br />Dim. · 25 juin – fin août · 19h00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-light/30 text-xs">{t('copyright')}</p>
          <Link
            href="/legal"
            className="text-light/30 hover:text-light/60 text-xs transition-colors duration-200"
          >
            {t('legal')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
