import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import NightCard from '@/components/NightCard';
import EventCard from '@/components/EventCard';
import { upcomingEvents } from '@/data/events';
import type { Locale } from '@/navigation';

export const metadata: Metadata = {
  title: 'Soirées & Événements',
  description:
    'Timbanight le mardi, La Communale le jeudi — retrouvez tous les événements de Somos Familia.',
};

export default function EventsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('events');
  const tn = useTranslations('nights');
  const typedLocale = locale as Locale;

  const timbanight = {
    name: tn('timbanight.name'),
    day: tn('timbanight.day'),
    subtitle: tn('timbanight.subtitle'),
    description: tn('timbanight.description'),
    time: tn('timbanight.time'),
    venue: tn('timbanight.venue'),
    ambiance: tn('timbanight.ambiance'),
  };

  const communale = {
    name: tn('communale.name'),
    day: tn('communale.day'),
    subtitle: tn('communale.subtitle'),
    description: tn('communale.description'),
    time: tn('communale.time'),
    venue: tn('communale.venue'),
    ambiance: tn('communale.ambiance'),
  };

  const nocheCubana = {
    name: tn('nochecubana.name'),
    day: tn('nochecubana.day'),
    subtitle: tn('nochecubana.subtitle'),
    description: tn('nochecubana.description'),
    time: tn('nochecubana.time'),
    venue: tn('nochecubana.venue'),
    ambiance: tn('nochecubana.ambiance'),
  };

  const quaiSalsa = {
    name: tn('quaisalsa.name'),
    day: tn('quaisalsa.day'),
    subtitle: tn('quaisalsa.subtitle'),
    description: tn('quaisalsa.description'),
    time: tn('quaisalsa.time'),
    venue: tn('quaisalsa.venue'),
    ambiance: tn('quaisalsa.ambiance'),
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/sf-events-hero/1920/600"
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

      {/* ── SOIRÉES RÉGULIÈRES ── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={t('regular_title')}
              subtitle={t('regular_subtitle')}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-px bg-light/5">
            <AnimatedSection delay={0.1}>
              <NightCard night={timbanight} variant="timbanight" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <NightCard night={communale} variant="communale" />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <NightCard night={nocheCubana} variant="nochecubana" />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <NightCard night={quaiSalsa} variant="quaisalsa" />
            </AnimatedSection>
          </div>

          {/* Détail Timbanight */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-light/5 pt-16">
            <AnimatedSection direction="left" className="flex justify-center">
              <div className="group relative max-w-xs w-full">
                <div className="absolute -inset-1 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                <a
                  href="/flyers/Timbanight.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir le flyer Timbanight en grand"
                  className="relative block border border-light/10 group-hover:border-gold/40 transition-colors duration-300 overflow-hidden"
                >
                  <Image
                    src="/flyers/Timbanight.jpeg"
                    alt="Flyer officiel Timbanight"
                    width={400}
                    height={566}
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 80vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark/80 text-light text-xs font-semibold uppercase tracking-widest px-4 py-2 border border-light/20">
                      Voir en grand
                    </span>
                  </div>
                </a>
                <p className="text-center text-light/30 text-xs mt-3 uppercase tracking-widest">Affiche officielle</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="text-gold text-xs uppercase tracking-[0.2em] font-bold">Timbanight</span>
              <h2 className="font-playfair text-3xl font-bold text-light mt-3 mb-4">
                La soirée Timba & Salsa Cubaine
              </h2>
              <p className="text-light/50 leading-relaxed mb-6">
                Chaque mardi dès le 19 mai, la Timba Night transforme le 10e arrondissement en temple de la salsa cubaine avec des cours tous niveaux et un mix survolté.
              </p>
              <ul className="space-y-2 text-light/50 text-sm">
                <li>🎵 70% Salsa Cubaine, 30% Bachata</li>
                <li>🎧 DJ YugoBeats & Guests</li>
                <li>💃 Cours Débutant & Intermédiaire</li>
                <li>🚪 Entrée : 5€ (Cours + Soirée + Vestiaire inclus)</li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Détail La Communale */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-light/5 pt-16">
            <AnimatedSection direction="right" className="order-first lg:order-last flex justify-center">
              <div className="group relative max-w-xs w-full">
                <div className="absolute -inset-1 bg-light/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                <a
                  href="/flyers/Communale.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir le flyer La Communale en grand"
                  className="relative block border border-light/10 group-hover:border-light/30 transition-colors duration-300 overflow-hidden"
                >
                  <Image
                    src="/flyers/Communale.jpeg"
                    alt="Flyer officiel La Communale Salsa Party"
                    width={400}
                    height={566}
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 80vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark/80 text-light text-xs font-semibold uppercase tracking-widest px-4 py-2 border border-light/20">
                      Voir en grand
                    </span>
                  </div>
                </a>
                <p className="text-center text-light/30 text-xs mt-3 uppercase tracking-widest">Affiche officielle</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="order-last lg:order-first">
              <span className="text-gold text-xs uppercase tracking-[0.2em] font-bold">La Communale</span>
              <h2 className="font-playfair text-3xl font-bold text-light mt-3 mb-4">
                La Salsa Cubaine pour tous
              </h2>
              <p className="text-light/50 leading-relaxed mb-6">
                Chaque mardi soir, La Communale rassemble les passionnés de danse autour d&apos;un cours de salsa animé par Ibra et d&apos;un mix latino éclectique. Profitez d&apos;une ambiance chaleureuse au cœur du plus grand food court de la région pour vibrer au rythme de la Havane.
              </p>
              <ul className="space-y-2 text-light/50 text-sm">
                <li>🎵 Salsa Cubaine, Bachata, Zouk, Kompa</li>
                <li>🎧 Ibra (Cours) + DJ YugoBeats</li>
                <li>💃 Cours tous niveaux (Salsa)</li>
                <li>🚪 Entrée : 5€ le cours / Soirée Gratuite</li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Détail La Noche Cubana */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-light/5 pt-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/sf-nochecubana/800/450"
                  alt="La Noche Cubana"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-rose-700 text-light text-xs font-bold uppercase tracking-widest px-3 py-1">
                  Mensuel
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="text-rose-400 text-xs uppercase tracking-[0.2em] font-bold">La Noche Cubana</span>
              <h2 className="font-playfair text-3xl font-bold text-light mt-3 mb-4">
                La grande soirée du mois
              </h2>
              <p className="text-light/50 leading-relaxed mb-6">
                Chaque 2e samedi du mois, la Noche Cubana rassemble les passionnés de culture cubaine au Jo&amp;Joe Gentilly pour une soirée intense et conviviale. Entre cours de salsa et mix survoltés, vibrez au rythme de la famille Somos Familia jusqu&apos;au bout de la nuit.
              </p>
              <ul className="space-y-2 text-light/50 text-sm">
                <li>🎵 70% Salsa Cubaine, 30% Bachata &amp; autres</li>
                <li>🎧 DJ Gilles Tumbao &amp; DJ YugoBeats</li>
                <li>💃 Cours de Salsa Cubaine (Jorry &amp; Fédé)</li>
                <li>🚪 Tarif unique : 12€</li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Détail Quai en Salsa */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-light/5 pt-16">
            <AnimatedSection direction="right" className="order-first lg:order-last">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/sf-quaisalsa/800/450"
                  alt="Quai en Salsa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-dark/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-amber-400 text-dark text-xs font-bold uppercase tracking-widest px-3 py-1">
                  ☀ Été 2024
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="order-last lg:order-first">
              <span className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-bold">Quai en Salsa</span>
              <h2 className="font-playfair text-3xl font-bold text-light mt-3 mb-4">
                La Salsa Cubaine en plein air
              </h2>
              <p className="text-light/50 leading-relaxed mb-6">
                Du 25 juin à fin août, profitez de chaque dimanche soir pour danser sur les quais de Paris au coucher du soleil. Une soirée conviviale, gratuite et accessible à tous — le rendez-vous incontournable de l&apos;été parisien.
              </p>
              <ul className="space-y-2 text-light/50 text-sm">
                <li>☀ Tous les dimanches · 25 juin – fin août</li>
                <li>🕖 19h00 – 23h00</li>
                <li>🌊 En plein air, au bord de la Seine</li>
                <li>🎉 Entrée gratuite — venez comme vous êtes !</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── ÉVÉNEMENTS EXCEPTIONNELS ── */}
      <section className="section-padding bg-dark border-t border-light/5">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={t('exceptional_title')}
              subtitle={t('exceptional_subtitle')}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={(i % 3) * 0.1}>
                <EventCard
                  event={event}
                  locale={typedLocale}
                  learnMoreLabel={t('learn_more')}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
