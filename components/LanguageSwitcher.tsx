'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { locales, type Locale } from '@/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const labels: Record<Locale, string> = { fr: 'FR', es: 'ES', en: 'EN' };
const flags: Record<Locale, string> = { fr: '🇫🇷', es: '🇪🇸', en: '🇬🇧' };

export default function LanguageSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(next: Locale) {
    router.replace(pathname, { locale: next });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={t('change_language')}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-light/70 hover:text-gold transition-colors duration-200"
      >
        <span>{flags[locale]}</span>
        <span>{labels[locale]}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-8 bg-dark border border-light/10 shadow-lg z-50 min-w-[80px]">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-light/5 transition-colors duration-150 ${
                l === locale ? 'text-gold' : 'text-light/70'
              }`}
            >
              <span>{flags[l]}</span>
              <span>{labels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
