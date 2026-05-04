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
  category: 'stage' | 'concert' | 'special' | 'anniversary';
}

export const upcomingEvents: Event[] = [
  {
    id: 'festival-salsa-paris-2024',
    titleFr: 'Festival Salsa Paris 2024',
    titleEs: 'Festival Salsa París 2024',
    titleEn: 'Paris Salsa Festival 2024',
    date: '2024-07-20',
    time: '18h00 – 02h00',
    venueFr: 'Parc de la Villette, Paris 19e',
    venueEs: 'Parc de la Villette, París 19',
    venueEn: 'Parc de la Villette, Paris 19th',
    descriptionFr: 'Le plus grand rassemblement de Salsa Cubaine de Paris ! Une nuit inoubliable avec des artistes cubains invités, des ateliers et une pista géante en plein air.',
    descriptionEs: '¡La mayor concentración de Salsa Cubana de París! Una noche inolvidable con artistas cubanos invitados, talleres y una pista gigante al aire libre.',
    descriptionEn: 'The biggest Cuban Salsa gathering in Paris! An unforgettable night with guest Cuban artists, workshops and a giant outdoor dance floor.',
    image: 'https://picsum.photos/seed/sf-event-1/800/500',
    category: 'special',
  },
  {
    id: 'stage-body-movement',
    titleFr: 'Stage Body Movement & Sensualité',
    titleEs: 'Taller Body Movement & Sensualidad',
    titleEn: 'Body Movement & Sensuality Workshop',
    date: '2024-06-15',
    time: '14h00 – 18h00',
    venueFr: 'Le Studio Latino, Paris 10e',
    venueEs: 'Le Studio Latino, París 10',
    venueEn: 'Le Studio Latino, Paris 10th',
    descriptionFr: 'Explorez le mouvement du corps et la sensualité dans la Salsa Cubaine avec nos professeurs invités. Tous niveaux intermédiaires et avancés.',
    descriptionEs: 'Explora el movimiento del cuerpo y la sensualidad en la Salsa Cubana con nuestros profesores invitados. Todos los niveles intermedios y avanzados.',
    descriptionEn: 'Explore body movement and sensuality in Cuban Salsa with our guest instructors. All intermediate and advanced levels welcome.',
    image: 'https://picsum.photos/seed/sf-event-2/800/500',
    category: 'stage',
  },
  {
    id: 'soiree-anniversaire-6ans',
    titleFr: '6ème Anniversaire de Somos Familia',
    titleEs: '6º Aniversario de Somos Familia',
    titleEn: 'Somos Familia 6th Anniversary',
    date: '2024-09-28',
    time: '20h00 – 04h00',
    venueFr: 'Salle des fêtes, Paris 11e',
    venueEs: 'Sala de fiestas, París 11',
    venueEn: 'Event hall, Paris 11th',
    descriptionFr: 'Célébrez avec nous six années de danse, de partage et de famille ! Soirée exceptionnelle avec orchestre live, buffet cubain et surprises.',
    descriptionEs: '¡Celebra con nosotros seis años de baile, compartir y familia! Velada excepcional con orquesta en vivo, bufé cubano y sorpresas.',
    descriptionEn: 'Celebrate six years of dance, sharing and family with us! Exceptional night with live orchestra, Cuban buffet and surprises.',
    image: 'https://picsum.photos/seed/sf-event-3/800/500',
    category: 'anniversary',
  },
  {
    id: 'concert-timba-cubana',
    titleFr: 'Concert Timba Cubana Live',
    titleEs: 'Concierto Timba Cubana Live',
    titleEn: 'Live Cuban Timba Concert',
    date: '2024-08-10',
    time: '20h30 – 01h00',
    venueFr: 'La Bellevilloise, Paris 20e',
    venueEs: 'La Bellevilloise, París 20',
    venueEn: 'La Bellevilloise, Paris 20th',
    descriptionFr: "Soirée concert avec un groupe de Timba cubaine directement venu de La Havane, suivi d'une milonga salsa animée par nos DJs résidents.",
    descriptionEs: 'Velada concierto con un grupo de Timba cubana directamente venido de La Habana, seguido de una milonga salsa animada por nuestros DJs residentes.',
    descriptionEn: 'Concert night featuring a Cuban Timba band straight from Havana, followed by a salsa milonga hosted by our resident DJs.',
    image: 'https://picsum.photos/seed/sf-event-4/800/500',
    category: 'concert',
  },
  {
    id: 'stage-rueda-de-casino',
    titleFr: 'Stage Rueda de Casino — Tous niveaux',
    titleEs: 'Taller Rueda de Casino — Todos los niveles',
    titleEn: 'Rueda de Casino Workshop — All levels',
    date: '2024-10-12',
    time: '15h00 – 19h00',
    venueFr: 'La Communale, Paris 11e',
    venueEs: 'La Communale, París 11',
    venueEn: 'La Communale, Paris 11th',
    descriptionFr: 'Découvrez ou perfectionnez la Rueda de Casino dans une ambiance décontractée. Un moment de joie et de complicité garanti !',
    descriptionEs: 'Descubre o perfecciona la Rueda de Casino en un ambiente relajado. ¡Un momento de alegría y complicidad garantizado!',
    descriptionEn: 'Discover or perfect your Rueda de Casino in a relaxed setting. A guaranteed moment of joy and togetherness!',
    image: 'https://picsum.photos/seed/sf-event-5/800/500',
    category: 'stage',
  },
];
