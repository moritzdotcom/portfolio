import { Project } from '@/projects';
import { despot, moritz } from './members';

export const coolheadConfig: Project = {
  title: 'Coolhead.finance',
  media: [{ isVideo: false, source: '/projects/coolhead/showcase.png' }],
  contributors: [moritz, despot],
  link: 'https://app.coolhead.finance',
  description: [],
  problem: [],
  challenges: [],
  techStack: ['- NextJS', '- PrismaDB', '- Stripe', '- Tailwind'],
};
