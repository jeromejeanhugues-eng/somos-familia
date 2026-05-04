import Image from 'next/image';
import { Link } from '@/navigation';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import type { Event } from '@/data/events';
import type { Locale } from '@/navigation';

interface Props {
  event: Event;
  locale: Locale;
  learnMoreLabel: string;
}

const categoryColors: Record<Event['category'], string> = {
  stage: 'bg-blue-900/60 text-blue-300',
  concert: 'bg-purple-900/60 text-purple-300',
  special: 'bg-gold/20 text-gold',
  anniversary: 'bg-red-900/60 text-red-300',
};

const categoryLabels: Record<Event['category'], string> = {
  stage: 'Stage',
  concert: 'Concert',
  special: 'Spécial',
  anniversary: 'Anniversaire',
};

export default function EventCard({ event, locale, learnMoreLabel }: Props) {
  const title = locale === 'fr' ? event.titleFr : locale === 'es' ? event.titleEs : event.titleEn;
  const venue = locale === 'fr' ? event.venueFr : locale === 'es' ? event.venueEs : event.venueEn;
  const description = locale === 'fr' ? event.descriptionFr : locale === 'es' ? event.descriptionEs : event.descriptionEn;

  const date = new Date(event.date);
  const day = date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="group bg-dark border border-light/8 hover:border-gold/30 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
        <span
          className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-sm ${categoryColors[event.category]}`}
        >
          {categoryLabels[event.category]}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-gold text-xs mb-3">
          <Calendar size={12} />
          <time dateTime={event.date}>{day}</time>
        </div>

        <h3 className="font-playfair text-xl font-bold text-light mb-3 leading-tight group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>

        <p className="text-light/50 text-sm leading-relaxed mb-4 flex-1">{description}</p>

        <div className="space-y-2 mb-5 border-t border-light/5 pt-4">
          <div className="flex items-center gap-2 text-light/40 text-xs">
            <Clock size={12} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-light/40 text-xs">
            <MapPin size={12} />
            <span>{venue}</span>
          </div>
        </div>

        <Link
          href={`/events`}
          className="flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all duration-200"
          aria-label={`${learnMoreLabel} — ${title}`}
        >
          {learnMoreLabel}
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
