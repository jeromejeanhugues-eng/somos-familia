import Image from 'next/image';
import { Instagram } from 'lucide-react';
import type { TeamMember } from '@/data/team';
import type { Locale } from '@/navigation';

interface Props {
  member: TeamMember;
  locale: Locale;
}

export default function TeamCard({ member, locale }: Props) {
  const role =
    locale === 'fr' ? member.roleFr : locale === 'es' ? member.roleEs : member.roleEn;
  const bio =
    locale === 'fr' ? member.bioFr : locale === 'es' ? member.bioEs : member.bioEn;

  return (
    <article className="group text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
          sizes="128px"
        />
        <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-gold transition-all duration-300" />
      </div>

      <h3 className="font-playfair text-lg font-bold text-light mb-1">{member.name}</h3>
      <p className="text-gold text-xs uppercase tracking-widest mb-3">{role}</p>
      <p className="text-light/50 text-sm leading-relaxed max-w-xs mx-auto">{bio}</p>

      {member.instagram && (
        <a
          href={`https://instagram.com/${member.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram de ${member.name}`}
          className="inline-flex items-center gap-1 mt-4 text-light/30 hover:text-gold transition-colors duration-200 text-xs"
        >
          <Instagram size={14} />
          <span>{member.instagram}</span>
        </a>
      )}
    </article>
  );
}
