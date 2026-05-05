import type { Metadata } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/navigation';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import NightCard from '@/components/NightCard';
import EventCard from '@/components/EventCard';
import { upcomingEvents } from '@/data/events';
import type { Locale } from '@/navigation';

export const metadata: Metadata = {
  title: 'Somos Familia — Salsa Cubaine à Paris',
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();
  const currentLocale = (useLocale() || locale) as Locale;

  const timbanight = {
    name: t('nights.timbanight.name'),
    day: t('nights.timbanight.day'),
    subtitle: t('nights.timbanight.subtitle'),
    description: t('nights.timbanight.description'),
    time: t('nights.timbanight.time'),
    venue: t('nights.timbanight.venue'),
    ambiance: t('nights.timbanight.ambiance'),
  };

  const communale = {
    name: t('nights.communale.name'),
    day: t('nights.communale.day'),
    subtitle: t('nights.communale.subtitle'),
    description: t('nights.communale.description'),
    time: t('nights.communale.time'),
    venue: t('nights.communale.venue'),
    ambiance: t('nights.communale.ambiance'),
  };

  const nocheCubana = {
    name: t('nights.nochecubana.name'),
    day: t('nights.nochecubana.day'),
    subtitle: t('nights.nochecubana.subtitle'),
    description: t('nights.nochecubana.description'),
    time: t('nights.nochecubana.time'),
    venue: t('nights.nochecubana.venue'),
    ambiance: t('nights.nochecubana.ambiance'),
  };

  const quaiSalsa = {
    name: t('nights.quaisalsa.name'),
    day: t('nights.quaisalsa.day'),
    subtitle: t('nights.quaisalsa.subtitle'),
    description: t('nights.quaisalsa.description'),
    time: t('nights.quaisalsa.time'),
    venue: t('nights.quaisalsa.venue'),
    ambiance: t('nights.quaisalsa.ambiance'),
  };

  const previewImages = [
    'https://picsum.photos/seed/sf-prev-1/600/400',
    'https://picsum.photos/seed/sf-prev-2/600/600',
    'https://picsum.photos/seed/sf-prev-3/600/400',
    'https://picsum.photos/seed/sf-prev-4/600/700',
    'https://picsum.photos/seed/sf-prev-5/600/400',
    'https://picsum.photos/seed/sf-prev-6/600/500',
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        aria-label="Hero"
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <span className="gold-line mx-auto" aria-hidden="true" />
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light leading-tight mb-6">
              {t('hero.title')}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="text-light/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join" className="btn-primary">
                {t('hero.cta_join')}
                <ArrowRight size={16} />
              </Link>
              <Link href="/events" className="btn-outline-light">
                {t('hero.cta_events')}
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <a
          href="#soirees"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-light/40 hover:text-gold transition-colors animate-bounce"
          aria-label="Défiler vers le bas"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ── SOIRÉES RÉGULIÈRES ── */}
      <section id="soirees" className="section-padding bg-dark">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={t('nights.title')}
              subtitle={t('nights.subtitle')}
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-px bg-light/5 mt-4">
            <AnimatedSection delay={0.1}>
              <NightCard
                night={timbanight}
                variant="timbanight"
                learnMoreLabel={t('upcoming_events.learn_more')}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <NightCard
                night={communale}
                variant="communale"
                learnMoreLabel={t('upcoming_events.learn_more')}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <NightCard
                night={nocheCubana}
                variant="nochecubana"
                learnMoreLabel={t('upcoming_events.learn_more')}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <NightCard
                night={quaiSalsa}
                variant="quaisalsa"
                learnMoreLabel={t('upcoming_events.learn_more')}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROCHAINS ÉVÉNEMENTS ── */}
      <section className="section-padding bg-dark border-t border-light/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <SectionTitle
                title={t('upcoming_events.title')}
                subtitle={t('upcoming_events.subtitle')}
              />
              <Link
                href="/events"
                className="flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all duration-200 flex-shrink-0 pb-3"
              >
                {t('upcoming_events.see_all')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(0, 3).map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.1}>
                <EventCard
                  event={event}
                  locale={currentLocale}
                  learnMoreLabel={t('upcoming_events.learn_more')}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUI SOMMES-NOUS ── */}
      <section className="section-padding bg-dark border-t border-light/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/sf-about/800/600"
                  alt="L'équipe Somos Familia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-gold text-dark px-4 py-2">
                  <p className="font-bold text-2xl font-playfair">+200</p>
                  <p className="text-xs font-semibold uppercase tracking-widest">membres actifs</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <SectionTitle title={t('about_preview.title')} />
              <p className="text-light/60 leading-relaxed mb-8 text-lg">
                {t('about_preview.text')}
              </p>
              <Link href="/about" className="btn-outline">
                {t('about_preview.cta')}
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── GALERIE APERÇU ── */}
      <section className="section-padding bg-dark border-t border-light/5">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={t('gallery_preview.title')}
              subtitle={t('gallery_preview.subtitle')}
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {previewImages.map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.08}>
                <Link href="/gallery" className="group relative block overflow-hidden aspect-square">
                  <Image
                    src={src}
                    alt={`Somos Familia — photo ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300" />
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link href="/gallery" className="btn-outline">
              Voir toute la galerie
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
