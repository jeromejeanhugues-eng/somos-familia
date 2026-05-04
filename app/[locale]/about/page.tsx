import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Heart, Flame, Star } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import TeamCard from '@/components/TeamCard';
import { teamMembers } from '@/data/team';
import type { Locale } from '@/navigation';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "Découvrez l'histoire, les valeurs et l'équipe de l'association Somos Familia, dédiée à la Salsa Cubaine à Paris.",
};

const valueIcons = [Heart, Flame, Star];

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('about');
  const typedLocale = locale as Locale;

  const values = [
    { key: 'community', Icon: valueIcons[0] },
    { key: 'passion', Icon: valueIcons[1] },
    { key: 'authenticity', Icon: valueIcons[2] },
  ] as const;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/sf-about-hero/1920/600"
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

      {/* ── HISTOIRE ── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionTitle title={t('history_title')} />
              <div className="space-y-5 text-light/60 leading-relaxed">
                <p>{t('history_p1')}</p>
                <p>{t('history_p2')}</p>
                <p>{t('history_p3')}</p>
              </div>

              {/* Paragraphes poétiques */}
              <div className="mt-8 space-y-6 border-l-2 border-gold/30 pl-6">
                <p className="text-light/80 leading-loose whitespace-pre-line italic font-playfair">
                  {t('history_p4')}
                </p>
                <p className="text-light/60 leading-relaxed">
                  {t('history_p5')}
                </p>
                <p className="text-gold font-playfair font-semibold text-lg leading-loose whitespace-pre-line">
                  {t('history_p6')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 border-t border-light/5 pt-8">
                {[
                  { num: '2018', label: 'Année de création' },
                  { num: '200+', label: 'Membres actifs' },
                  { num: '6', label: 'Années d\'existence' },
                ].map(({ num, label }) => (
                  <div key={num} className="text-center">
                    <p className="font-playfair text-3xl font-bold text-gold">{num}</p>
                    <p className="text-light/40 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/sf-history/600/800"
                    alt="Somos Familia — histoire"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 border border-gold/20" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold opacity-20" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="section-padding bg-dark border-t border-light/5">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={t('values_title')}
              subtitle={t('values_subtitle')}
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {values.map(({ key, Icon }, i) => (
              <AnimatedSection key={key} delay={i * 0.15}>
                <div className="border border-light/5 hover:border-gold/20 transition-colors duration-300 p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/30 text-gold mb-6 group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-light mb-3">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-light/50 text-sm leading-relaxed">
                    {t(`values.${key}.description`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="section-padding bg-dark border-t border-light/5">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={t('team_title')}
              subtitle={t('team_subtitle')}
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-4">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <TeamCard member={member} locale={typedLocale} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
