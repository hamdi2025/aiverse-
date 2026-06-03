export interface SponsoredListing {
  toolId: string;
  badgeText: {
    en: string;
    fr: string;
    es: string;
    ar: string;
  };
  glowColor: string; // Tailind class like from-purple-500/20 to-pink-500/20
  priority: number;  // Higher priority renders higher up
}

export const SPONSORED_LISTINGS: SponsoredListing[] = [
  {
    toolId: 'chatgpt',
    badgeText: {
      en: 'Partner',
      fr: 'Partenaire',
      es: 'Socio',
      ar: 'شريك المبادرة'
    },
    glowColor: 'from-emerald-500/25 to-teal-500/25',
    priority: 10
  },
  {
    toolId: 'midjourney',
    badgeText: {
      en: 'Featured',
      fr: 'Mis en avant',
      es: 'Destacado',
      ar: 'مميز'
    },
    glowColor: 'from-purple-500/25 to-pink-500/25',
    priority: 8
  },
  {
    toolId: 'v0-dev',
    badgeText: {
      en: 'Sponsored',
      fr: 'Sponsorisé',
      es: 'Patrocinado',
      ar: 'ممول'
    },
    glowColor: 'from-blue-500/25 to-indigo-500/25',
    priority: 5
  }
];

export function getSponsoredConfig(toolId: string): SponsoredListing | undefined {
  return SPONSORED_LISTINGS.find(s => s.toolId === toolId);
}
