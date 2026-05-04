import { Clock, MapPin, Sparkles } from 'lucide-react';
import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';

interface NightData {
  name: string;
  day: string;
  subtitle: string;
  description: string;
  time: string;
  venue: string;
  ambiance: string;
}

interface Props {
  night: NightData;
  variant: 'timbanight' | 'communale' | 'nochecubana' | 'quaisalsa';
  learnMoreLabel?: string;
}

const variantStyles = {
  timbanight: {
    accent: 'border-gold',
    badge: 'bg-gold/10 text-gold border border-gold/30',
    tag: 'TIMBANIGHT',
    summer: false,
  },
  communale: {
    accent: 'border-light/20',
    badge: 'bg-light/5 text-light/70 border border-light/10',
    tag: 'LA COMMUNALE',
    summer: false,
  },
  nochecubana: {
    accent: 'border-rose-700',
    badge: 'bg-rose-900/20 text-rose-300 border border-rose-700/30',
    tag: 'LA NOCHE CUBANA',
    summer: false,
  },
  quaisalsa: {
    accent: 'border-cyan-600',
    badge: 'bg-cyan-900/20 text-cyan-300 border border-cyan-600/30',
    tag: 'QUAI EN SALSA',
    summer: true,
  },
};

export default function NightCard({ night, variant, learnMoreLabel }: Props) {
  const styles = variantStyles[variant];

  return (
    <article
      className={`border-t-2 ${styles.accent} bg-dark p-8 hover:bg-light/2 transition-colors duration-300`}
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`inline-block text-xs font-bold tracking-[0.2em] px-3 py-1 ${styles.badge}`}>
            {styles.tag}
          </span>
          {styles.summer && (
            <span className="inline-block text-xs font-bold tracking-[0.2em] px-2 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30">
              ☀ ÉTÉ
            </span>
          )}
        </div>
        <h3 className="font-playfair text-3xl font-bold text-light mb-1">{night.name}</h3>
        <p className="text-gold text-sm uppercase tracking-widest">{night.day}</p>
      </div>

      <p className="font-playfair text-lg text-light/80 italic mb-4">{night.subtitle}</p>
      <p className="text-light/50 leading-relaxed mb-8">{night.description}</p>

      <div className="space-y-3 border-t border-light/5 pt-6">
        <div className="flex items-start gap-3">
          <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-light/30 uppercase tracking-wider block mb-0.5">Horaires</span>
            <span className="text-light/80 text-sm">{night.time}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-light/30 uppercase tracking-wider block mb-0.5">Lieu</span>
            <span className="text-light/80 text-sm">{night.venue}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Sparkles size={16} className="text-gold flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs text-light/30 uppercase tracking-wider block mb-0.5">Ambiance</span>
            <span className="text-light/80 text-sm">{night.ambiance}</span>
          </div>
        </div>
      </div>

      {learnMoreLabel && (
        <Link
          href="/events"
          className="inline-flex items-center gap-2 mt-8 text-gold text-sm font-medium hover:gap-3 transition-all duration-200"
        >
          {learnMoreLabel}
          <ArrowRight size={14} />
        </Link>
      )}
    </article>
  );
}
