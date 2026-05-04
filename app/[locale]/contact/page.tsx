import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contactez l'association Somos Familia pour toute question sur nos soirées et événements.",
};

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('contact');

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/sf-contact-hero/1920/600"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="gold-line mx-auto" aria-hidden="true" />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-light mb-6 leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-light/60 text-lg md:text-xl max-w-2xl mx-auto">
              {t('hero_subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FORMULAIRE + INFOS ── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <SectionTitle title={t('form_title')} />
              <ContactForm />
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="font-playfair text-2xl font-bold text-light mb-8">
                {t('info_title')}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-light/40 text-xs uppercase tracking-widest mb-1">{t('address_label')}</p>
                    <p className="text-light/70 text-sm">{t('address_value')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-light/40 text-xs uppercase tracking-widest mb-1">Email</p>
                    <a
                      href={`mailto:${t('email_contact')}`}
                      className="text-light/70 hover:text-gold text-sm transition-colors duration-200"
                    >
                      {t('email_contact')}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-light/40 text-xs uppercase tracking-widest mb-4">
                    {t('social_title')}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/somosfamilia.salsa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex items-center gap-2 text-light/50 hover:text-gold transition-colors duration-200 text-sm"
                    >
                      <Instagram size={18} />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://facebook.com/somosfamiliasalsa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex items-center gap-2 text-light/50 hover:text-gold transition-colors duration-200 text-sm"
                    >
                      <Facebook size={18} />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

                <div className="border-t border-light/5 pt-8">
                  <p className="text-gold text-xs uppercase tracking-[0.2em] font-bold mb-3">
                    Nos soirées
                  </p>
                  <div className="space-y-3 text-light/50 text-sm">
                    <div>
                      <p className="font-semibold text-light/80">Timbanight</p>
                      <p>Chaque mardi · 21h00 – 02h00</p>
                    </div>
                    <div>
                      <p className="font-semibold text-light/80">La Communale</p>
                      <p>Chaque jeudi · 20h00 – 01h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
