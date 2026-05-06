export interface Event {
  id: string;
  titleFr: string;
  titleEs: string;
  titleEn: string;
  date: string;
  time: string;
  venueFr: string;
  venueEs: string;
  venueEn: string;
  descriptionFr: string;
  descriptionEs: string;
  descriptionEn: string;
  image: string;
  category: 'stage' | 'concert' | 'special' | 'anniversary' | 'weekly' | 'monthly' | 'summer';
}

function getNextWeekdays(dayOfWeek: number, count: number, startDate?: Date): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const from = startDate && startDate > today ? startDate : today;
  const d = new Date(from);
  while (d.getDay() !== dayOfWeek) d.setDate(d.getDate() + 1);
  while (dates.length < count) {
    dates.push(new Date(d));
    d.setDate(d.getDate() + 7);
  }
  return dates;
}

function getNext2ndSaturdays(count: number): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let month = today.getMonth();
  let year = today.getFullYear();
  while (dates.length < count) {
    const d = new Date(year, month, 1);
    let samediCount = 0;
    while (samediCount < 2) {
      if (d.getDay() === 6) samediCount++;
      if (samediCount < 2) d.setDate(d.getDate() + 1);
    }
    if (d >= today) dates.push(new Date(d));
    month++;
    if (month > 11) { month = 0; year++; }
  }
  return dates;
}

function getDimanchesEte(count: number, startDate: Date): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const from = startDate > today ? startDate : today;
  const d = new Date(from);
  while (d.getDay() !== 0) d.setDate(d.getDate() + 1);
  while (dates.length < count) {
    const month = d.getMonth();
    if (month >= 5 && month <= 7) {
      dates.push(new Date(d));
      d.setDate(d.getDate() + 7);
    } else if (month > 7) {
      break;
    } else {
      d.setDate(d.getDate() + 7);
    }
  }
  return dates;
}

function fmt(d: Date): string {
  return d.toISOString().split('T')[0];
}

const timbanightDates = getNextWeekdays(2, 4, new Date('2025-05-19'));
const communaleDates = getNextWeekdays(4, 4);
const nocheDates = getNext2ndSaturdays(3);
const quaiDates = getDimanchesEte(4, new Date('2025-06-25'));

const timbanightEvents: Event[] = timbanightDates.map((d, i) => ({
  id: `timbanight-${fmt(d)}`,
  titleFr: 'Timbanight',
  titleEs: 'Timbanight',
  titleEn: 'Timbanight',
  date: fmt(d),
  time: '19h00 – 00h00',
  venueFr: 'Colonel Fabien, Paris 10e',
  venueEs: 'Colonel Fabien, París 10',
  venueEn: 'Colonel Fabien, Paris 10th',
  descriptionFr: 'Cours de salsa cubaine tous niveaux + mix 70% cubaine / 30% bachata. 5€ tout compris.',
  descriptionEs: 'Clase de salsa cubana todos los niveles + mix 70% cubana / 30% bachata. 5€ todo incluido.',
  descriptionEn: 'Cuban salsa class all levels + 70% Cuban / 30% bachata mix. €5 all inclusive.',
  image: '/flyers/Timbanight.jpeg',
  category: 'weekly',
}));

const communaleEvents: Event[] = communaleDates.map((d, i) => ({
  id: `communale-${fmt(d)}`,
  titleFr: 'La Communale Salsa Party',
  titleEs: 'La Communale Salsa Party',
  titleEn: 'La Communale Salsa Party',
  date: fmt(d),
  time: '19h00 – 00h00',
  venueFr: 'Communale Saint-Ouen',
  venueEs: 'Communale Saint-Ouen',
  venueEn: 'Communale Saint-Ouen',
  descriptionFr: 'Cours de salsa par Ibra + soirée mix latino gratuite. 5€ le cours.',
  descriptionEs: 'Clase de salsa por Ibra + velada mix latino gratuita. 5€ la clase.',
  descriptionEn: 'Salsa class by Ibra + free latin mix night. €5 for the class.',
  image: '/flyers/Communale.jpeg',
  category: 'weekly',
}));

const nocheEvents: Event[] = nocheDates.map((d, i) => ({
  id: `nochecubana-${fmt(d)}`,
  titleFr: 'La Noche Cubana',
  titleEs: 'La Noche Cubana',
  titleEn: 'La Noche Cubana',
  date: fmt(d),
  time: '20h00 – 01h30',
  venueFr: 'Jo&Joe Gentilly, 89-93 Av. Paul Vaillant Couturier, 94250 Gentilly',
  venueEs: 'Jo&Joe Gentilly, 89-93 Av. Paul Vaillant Couturier, 94250 Gentilly',
  venueEn: 'Jo&Joe Gentilly, 89-93 Av. Paul Vaillant Couturier, 94250 Gentilly',
  descriptionFr: 'Cours de salsa cubaine + mix cubano explosif. 12€ tout compris.',
  descriptionEs: 'Clase de salsa cubana + mix cubano explosivo. 12€ todo incluido.',
  descriptionEn: 'Cuban salsa class + explosive Cuban mix. €12 all inclusive.',
  image: 'https://picsum.photos/seed/sf-nochecubana/800/450',
  category: 'monthly',
}));

const quaiEvents: Event[] = quaiDates.map((d, i) => ({
  id: `quaisalsa-${fmt(d)}`,
  titleFr: 'Quai en Salsa',
  titleEs: 'Quai en Salsa',
  titleEn: 'Quai en Salsa',
  date: fmt(d),
  time: '19h00 – 23h00',
  venueFr: 'Les Quais de Paris (lieu à confirmer)',
  venueEs: 'Los Muelles de París (lugar por confirmar)',
  venueEn: 'Paris riverbanks (venue TBC)',
  descriptionFr: 'Salsa cubaine en plein air au bord de la Seine. Entrée gratuite.',
  descriptionEs: 'Salsa cubana al aire libre junto al Sena. Entrada gratuita.',
  descriptionEn: 'Cuban salsa outdoors by the Seine. Free entry.',
  image: 'https://picsum.photos/seed/sf-quaisalsa/800/450',
  category: 'summer',
}));

export const upcomingEvents: Event[] = [
  ...timbanightEvents,
  ...communaleEvents,
  ...nocheEvents,
  ...quaiEvents,
].sort((a, b) => a.date.localeCompare(b.date));
