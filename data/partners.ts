import { Sponsor } from '@/types';

export const partners: Sponsor[] = [
  {
    id: 'minict',
    name: 'Ministry of ICT',
    tier: 'silver',
    logoUrl: '/sponsors/minict.png',
    website: 'https://www.minict.gov.rw/',
  },
  {
    id: 'mnduc',
    name: 'Ministry of Education',
    tier: 'gold',
    logoUrl: '/sponsors/mineduc.jpeg',
    website: 'https://www.mineduc.gov.rw/',
  },
];

export const sponsorTiers = [
  { key: 'platinum' as const, label: 'Platinum Partners' },
  { key: 'gold' as const, label: 'Gold Partners' },
  { key: 'silver' as const, label: 'Silver Partners' },
  { key: 'bronze' as const, label: 'Bronze Partners' },
];
