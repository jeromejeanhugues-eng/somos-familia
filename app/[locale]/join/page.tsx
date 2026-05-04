import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { CheckCircle, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import JoinForm from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Nous rejoindre',
  description: "Devenez bénévole ou adhérent de l'association Somos Familia et participez à l'aventure.",
};

export default function JoinPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('join');

  const roles = [
    t('roles.communication'),
    t('roles.logistics'),
    t('roles.photo'),
    t('roles.animation'),
    t('roles.admin'),
  ];

  const benefits = [
    t('benefit_discount'),
    t('benefit_stages'),
    t('benefit_newsletter'),
    t('benefit_vote'),
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/sf-join-hero/1920/600"
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

      {/* ── BÉNÉVOLAT ── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <SectionTitle title={t('volunteer_title')} />
              <p className="text-light/60 leading-relaxed mb-8">
                {t('volunteer_description')}
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Users size={18} className="text-gold" />
                  <h3 className="font-semibold text-light text-sm uppercase tracking-widest">
                    {t('roles_title')}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {roles.map((role) => (
                    <li key={role} className="flex items-center gap-3 text-light/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/sf-volunteer/800/450"
                  alt="Bénévoles Somos Familia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="border border-light/5 p-8">
                <h2 className="font-playfair text-2xl font-bold text-light mb-2">{t('form_title')}</h2>
                <p className="text-light/40 text-sm mb-8">{t('form_subtitle')}</p>
                <JoinForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── ADHÉSION ── */}
      <section className="section-padding bg-dark border-t border-light/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionTitle title={t('membership_title')} />
              <p className="text-light/60 leading-relaxed mb-8">
                {t('membership_description')}
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-light/70">
                    <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="border border-gold/20 bg-gold/5 p-8 text-center">
                <p className="text-gold text-xs uppercase tracking-[0.2em] font-bold mb-4">Adhésion annuelle</p>
                <p className="font-playfair text-6xl font-bold text-light mb-2">20<span className="text-3xl text-light/60">€</span></p>
                <p className="text-light/40 text-sm mb-8">par saison (septembre – juin)</p>
                <a
                  href="mailto:contact@somosfamilia-salsa.fr?subject=Adhésion Somos Familia"
                  className="btn-primary w-full justify-center"
                >
                  Devenir adhérent
                </a>
                <p className="text-light/30 text-xs mt-4">
                  Contactez-nous par email pour adhérer.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
