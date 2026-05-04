'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { GalleryImage } from '@/data/gallery';
import type { Locale } from '@/navigation';

interface Props {
  images: GalleryImage[];
  locale: Locale;
}

export default function GalleryGrid({ images, locale }: Props) {
  return (
    <div className="masonry-grid">
      {images.map((img, i) => {
        const alt =
          locale === 'fr' ? img.altFr : locale === 'es' ? img.altEs : img.altEn;

        return (
          <motion.div
            key={img.id}
            className="masonry-item relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={alt}
                width={img.width}
                height={img.height}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-light/0 group-hover:text-light text-sm font-medium transition-colors duration-300 text-center px-4">
                  {alt}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
