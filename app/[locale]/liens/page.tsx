// app/liens/page.tsx
// ─────────────────────────────────────────────
// Page de liens DJ YugoBeats × Somos Familia
// Déployer sur : somosfamilia.paris/liens
// ─────────────────────────────────────────────

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ YugoBeats × Somos Familia — Nos liens",
  description:
    "Toutes nos soirées salsa cubaine à Paris : Timba Night, La Communale, Quais de Seine, Cuban Day 2026.",
};

// ── DONNÉES — modifie ici sans toucher au design ──
const SOIREES = [
  {
    icon: "🔥",
    title: "Timba Night — Mardi",
    sub: "Generator Paris · 9 Place Colonel Fabien · M° Ligne 2",
    href: "https://www.instagram.com/somosfamilia_paris",
    badge: "Nouveau",
    featured: true,
  },
  {
    icon: "🎶",
    title: "La Communale — Jeudi",
    sub: "Saint-Ouen · Cours 19h · Mix YugoBeats 20h30",
    href: "https://www.instagram.com/somosfamilia_paris",
    badge: null,
    featured: false,
  },
    {
    icon: "🌊",
    title: "Quais de Seine — Dimanche",
    sub: "L'Alvéole n°2 · Dès le 25 juin",
    href: "https://www.instagram.com/somos_familiaparis?igsh=OTN4Y3Z1ZGJvbGxk",
    badge: "Été 2026",
    featured: false,
  },
  {
    icon: "🎉",
    title: "La Noche Cubana — 2e Samedi",
    sub: "Jo&Joe Gentilly · 12€ · DJ Tumbao + YugoBeats",
    href: "https://www.instagram.com/somosfamilia_paris",
    badge: null,
    featured: false,
  },
];

const SERVICES = [
  {
    icon: "🎧",
    title: "Réserver DJ YugoBeats",
    sub: "Mariage · Anniversaire · Soirée privée · Événement",
    href: "mailto:somosfamilia.paris@gmail.com",
  },
  {
    icon: "💃",
    title: "Cours de Salsa Cubaine",
    sub: "Initiation & Évolutif · Particuliers & Groupes",
    href: "mailto:somosfamilia.paris@gmail.com",
  },
  {
    icon: "📩",
    title: "Nous contacter",
    sub: "somosfamilia.paris@gmail.com",
    href: "mailto:somosfamilia.paris@gmail.com",
  },
];

const SOCIALS = [
  { label: "Insta DJ YugoBeats", icon: "📸", href: "https://www.instagram.com/jeanhughes_971/" },
  { label: "Insta Somos Familia", icon: "🎭", href: "https://www.instagram.com/somos_familiaparis?igsh=OTN4Y3Z1ZGJvbGxk" },
  { label: "Facebook Communale", icon: "📘", href: "https://facebook.com/events/s/communale-salsa-party-ibra-dj-/2115929309156599/" },
];
// ─────────────────────────────────────────────

export default function LiensPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F5F0E8] font-sans">
      <div className="max-w-[520px] mx-auto px-6 py-16">

        {/* ── HEADER ── */}
        <header className="text-center mb-12">
          <div className="w-20 h-20 rounded-full border-2 border-[#C9A84C] p-[3px] mx-auto mb-5">
            <div className="w-full h-full rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#C9A84C] text-2xl font-bold tracking-wider">
              YB
            </div>
            {/*
              Pour mettre ta photo, remplace le div ci-dessus par :
              <img src="/photo-dj.jpg" alt="DJ YugoBeats"
                   className="w-full h-full rounded-full object-cover" />
              Et place ta photo dans /public/photo-dj.jpg
            */}
          </div>
          <h1 className="text-5xl tracking-[3px] leading-none font-black uppercase">
            DJ YugoBeats
          </h1>
          <p className="italic text-[#C9A84C] text-sm mt-2 tracking-widest">
            × Somos Familia Paris
          </p>
          <p className="text-xs font-light text-white/40 mt-2 tracking-[2px] uppercase">
            DJ · Salsa Cubaine · Événements Afro-Latino
          </p>
        </header>

        {/* ── SOIRÉES ── */}
        <Section label="Nos Soirées" />
        <div className="flex flex-col gap-3 mb-2">
          {SOIREES.map((item) => (
            <LinkCard key={item.title} {...item} />
          ))}
        </div>

        {/* ── FLAGSHIP ── */}
        <Section label="Événement Annuel" />
        <div className="flex flex-col gap-3 mb-2">
          <LinkCard
            icon="🇨🇺"
            title="Cuban Day 2026 — 14 novembre"
            sub="La Communale · Saint-Ouen · Billetterie bientôt"
            href="https://www.instagram.com/somosfamilia_paris"
            badge="Save the date"
            featured={true}
          />
        </div>

        {/* ── SERVICES ── */}
        <Section label="Services" />
        <div className="flex flex-col gap-3 mb-2">
          {SERVICES.map((item) => (
            <LinkCard key={item.title} {...item} featured={false} badge={null} />
          ))}
        </div>

        {/* ── SOCIALS ── */}
        <div className="flex justify-center gap-3 mt-10">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="w-12 h-12 rounded-full bg-[#2a2a2a] border border-[#C9A84C]/20 flex items-center justify-center text-xl hover:border-[#C9A84C] hover:bg-[#3a3a3a] transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <footer className="text-center mt-12 text-xs tracking-widest uppercase text-white/20">
          <p>© 2026 <span className="text-[#C9A84C]/60">Somos Familia Paris</span></p>
          <p className="mt-1">¡Vamos a bailar!</p>
        </footer>

      </div>
    </main>
  );
}

// ── COMPOSANTS INTERNES ──

function Section({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      <span className="text-[11px] tracking-[3px] text-[#C9A84C] whitespace-nowrap uppercase font-semibold">
        {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
    </div>
  );
}

function LinkCard({
  icon,
  title,
  sub,
  href,
  badge,
  featured,
}: {
  icon: string;
  title: string;
  sub: string;
  href: string;
  badge: string | null;
  featured: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-4 px-5 py-4 rounded-xl border text-[#F5F0E8]
        transition-all duration-200 hover:translate-x-1
        ${featured
          ? "bg-gradient-to-br from-[#1a1500] to-[#2a2000] border-[#C9A84C]"
          : "bg-[#2a2a2a] border-[#C9A84C]/15 hover:bg-[#3a3a3a] hover:border-[#C9A84C]/40"
        }
      `}
    >
      <span className="text-2xl w-8 text-center flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-[15px] leading-tight">{title}</p>
        <p className="text-xs text-white/40 font-light mt-1">{sub}</p>
      </div>
      {badge ? (
        <span className="text-[11px] tracking-[1.5px] bg-[#C9A84C] text-[#0a0a0a] px-3 py-1 rounded-full flex-shrink-0 font-bold uppercase">
          {badge}
        </span>
      ) : (
        <span className="text-[#C9A84C]/60 text-sm flex-shrink-0">›</span>
      )}
    </a>
  );
}
