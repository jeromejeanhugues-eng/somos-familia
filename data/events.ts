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

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatDate(d: Date): string {
  return d.toISOString().split('T')[0]; // "YYYY-MM-DD"
}

function getNextWeekdays(dayOfWeek: number, count: number, startDate?: Date): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const from = startDate && startDate > today ? startDate : today;
  const d = new Date(from);
  // Avance jusqu'au bon jour
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

// ─── Génération des événe