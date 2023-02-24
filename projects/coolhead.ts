import { Project } from '@/projects';
import { moritz } from './members';

export const coolheadConfig: Project = {
  title: 'Coolhead.finance',
  media: [{ isVideo: false, source: '/projects/coolhead/showcase.png' }],
  contributors: [moritz],
  link: 'https://app.coolhead.finance',
  description: [
    'Coolhead is a Web Application I developed for a startup. The idea is to help investors to remain cool and stick to their investment strategy even in turbulent economic times. Users can create rules for a stock based on popular strategies (e.g. Limit Orders, using momentum or saving plans). Once a rule gets triggered, the user gets notified to execute the transaction. Users can also follow rules created by other investors.',
  ],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: ['- NextJS', '- PrismaDB', '- Stripe', '- Tailwind'],
};
