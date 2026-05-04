'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/events', label: t('events') },
    { href: '/gallery', label: t('gallery') },
    { href: '/join', label: t('join') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-sm border-b border-light/5' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Somos Familia"
              fill
              className="object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <span className="font-playfair font-bold text-lg text-light">
            Somos <span className="text-gold">Familia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === href ? 'text-gold' : 'text-light/70 hover:text-light'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/join"
            className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
          >
            {t('join')}
          </Link>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-light hover:text-gold transition-colors"
            aria-label={menuOpen ? tc('close_menu') : tc('open_menu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-dark z-40 flex flex-col">
          <nav className="flex flex-col px-6 pt-8 gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-2xl font-playfair py-3 border-b border-light/5 transition-colors duration-200 ${
                  pathname === href ? 'text-gold' : 'text-light hover:text-gold'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-8">
            <Link href="/join" className="btn-primary w-full justify-center">
              {t('join')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
