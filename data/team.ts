export interface TeamMember {
  id: string;
  name: string;
  roleFr: string;
  roleEs: string;
  roleEn: string;
  bioFr: string;
  bioEs: string;
  bioEn: string;
  image: string;
  instagram?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sofia-ramirez',
    name: 'Sofia Ramírez',
    roleFr: 'Co-fondatrice & Présidente',
    roleEs: 'Cofundadora & Presidenta',
    roleEn: 'Co-founder & President',
    bioFr: 'Danseuse de Salsa Cubaine depuis 15 ans, Sofia a fondé Somos Familia avec la vision de créer un espace familial et inclusif pour tous les amoureux de la danse.',
    bioEs: 'Bailarina de Salsa Cubana desde hace 15 años, Sofia fundó Somos Familia con la visión de crear un espacio familiar e inclusivo para todos los amantes del baile.',
    bioEn: 'A Cuban Salsa dancer for 15 years, Sofia co-founded Somos Familia with the vision of creating a warm, inclusive space for all dance lovers.',
    image: 'https://picsum.photos/seed/sf-team-1/400/400',
    instagram: '@sofia_salsa',
  },
  {
    id: 'marco-diaz',
    name: 'Marco Díaz',
    roleFr: 'Co-fondateur & Directeur artistique',
    roleEs: 'Cofundador & Director artístico',
    roleEn: 'Co-founder & Artistic director',
    bioFr: "DJ résident et organisateur passionné, Marco apporte son expertise musicale à chaque soirée. Spécialiste de la Timba et du Son Cubano.",
    bioEs: 'DJ residente y organizador apasionado, Marco aporta su experiencia musical a cada velada. Especialista en Timba y Son Cubano.',
    bioEn: 'Resident DJ and passionate organiser, Marco brings his musical expertise to every night. A specialist in Timba and Son Cubano.',
    image: 'https://picsum.photos/seed/sf-team-2/400/400',
    instagram: '@marco_djsalsa',
  },
  {
    id: 'amina-ndiaye',
    name: 'Amina Ndiaye',
    roleFr: 'Responsable communication',
    roleEs: 'Responsable de comunicación',
    roleEn: 'Communications manager',
    bioFr: "Graphiste et danseuse, Amina gère l'identité visuelle et la communication digitale de l'association avec créativité et engagement.",
    bioEs: 'Diseñadora gráfica y bailarina, Amina gestiona la identidad visual y la comunicación digital de la asociación con creatividad y compromiso.',
    bioEn: "Graphic designer and dancer, Amina manages the association's visual identity and digital communications with creativity and dedication.",
    image: 'https://picsum.photos/seed/sf-team-3/400/400',
  },
  {
    id: 'julien-martin',
    name: 'Julien Martin',
    roleFr: 'Responsable logistique',
    roleEs: 'Responsable de logística',
    roleEn: 'Logistics manager',
    bioFr: "Le couteau suisse de l'équipe ! Julien coordonne l'organisation des soirées, la gestion des lieux et la logistique avec une efficacité redoutable.",
    bioEs: '¡El navaja suiza del equipo! Julien coordina la organización de las veladas, la gestión de los locales y la logística con una eficacia formidable.',
    bioEn: "The team's Swiss army knife! Julien coordinates night organisation, venue management and logistics with remarkable efficiency.",
    image: 'https://picsum.photos/seed/sf-team-4/400/400',
  },
  {
    id: 'lucia-chen',
    name: 'Lucía Chen',
    roleFr: 'Photographe & Vidéaste',
    roleEs: 'Fotógrafa & Videasta',
    roleEn: 'Photographer & Videographer',
    bioFr: "L'œil de Somos Familia. Lucía capture l'énergie et la magie de chaque soirée avec son objectif, créant des souvenirs inoubliables.",
    bioEs: 'El ojo de Somos Familia. Lucía captura la energía y la magia de cada velada con su objetivo, creando recuerdos inolvidables.',
    bioEn: "Somos Familia's eye. Lucía captures the energy and magic of every night through her lens, creating unforgettable memories.",
    image: 'https://picsum.photos/seed/sf-team-5/400/400',
    instagram: '@lucia_photography',
  },
  {
    id: 'carlos-vega',
    name: 'Carlos Vega',
    roleFr: 'Professeur & Animateur',
    roleEs: 'Profesor & Animador',
    roleEn: 'Teacher & Host',
    bioFr: "Professeur de Salsa Cubaine certifié, Carlos anime les cours d'initiation à La Communale et partage sa passion avec une énergie contagieuse.",
    bioEs: 'Profesor de Salsa Cubana certificado, Carlos anima las clases de iniciación en La Communale y comparte su pasión con una energía contagiosa.',
    bioEn: 'Certified Cuban Salsa teacher, Carlos hosts the intro classes at La Communale and shares his passion with infectious energy.',
    image: 'https://picsum.photos/seed/sf-team-6/400/400',
    instagram: '@carlos_salsacuba',
  },
];
