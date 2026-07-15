import { Sponsor } from '@/types';

export const sponsors: Sponsor[] = [
  {
    id: 'jane-streen',
    name: 'Jane Streen',
    tier: 'silver',
    logoUrl: '/sponsors/js.png',
    website: 'https://www.janestreet.com/',
  },
  {
    id: 'hrt',
    name: 'HRT (Hudson River Trading)',
    tier: 'gold',
    logoUrl: '/sponsors/hrt.png',
    website: 'https://www.hudsonrivertrading.com/',
  },
  {
    id: 'aoa',
    name: 'AOA (African Olympiad Academy)',
    tier: 'silver',
    logoUrl: '/sponsors/aoa.png',
    website: 'https://aoa.school',
  },
  {
    id: 'gtf',
    name: 'Global Talent Fund (GTF)',
    tier: 'silver',
    logoUrl: '/sponsors/gtf.png',
    website: 'https://www.globtalent.org/',
  },
  // {
  //   id: 'aims',
  //   name: 'AIMS (African Institute of Mathematical Science)',
  //   tier: 'gold',
  //   logoUrl: '/sponsors/aims.png',
  //   website: 'https://aims.ac.rw',
  // },
];

export const sponsorTiers = [
  { key: 'platinum' as const, label: 'Platinum Partners' },
  { key: 'gold' as const, label: 'Gold Partners' },
  { key: 'silver' as const, label: 'Silver Partners' },
  { key: 'bronze' as const, label: 'Bronze Partners' },
];
