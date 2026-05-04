import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import GalleryGrid from '@/components/GalleryGrid';
import { galleryImages } from '@/data/gallery';
import type { Locale } from '@/navigation';

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Photos et souvenirs des soirées, stages et événements de Somos Familia.',
};

export default function GalleryPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('gallery');
  const typedLocale = locale as Locale;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/sf-gallery-hero/1920/600"
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

      {/* ── GALERIE ── */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={t('hero_title')}
              subtitle={`${galleryImages.length} photos`}
            />
          </AnimatedSection>

          <GalleryGrid images={galleryImages} locale={typedLocale} />
        </div>
      </section>
    </>
  );
}
