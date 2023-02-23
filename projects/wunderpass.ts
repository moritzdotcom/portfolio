import { Project } from '@/projects';
import { despot, moritz } from './members';

export const wunderpassConfig: Project = {
  title: 'WunderPass Web App',
  media: [{ isVideo: false, source: '/projects/wunderpass/showcase.png' }],
  contributors: [moritz, despot],
  link: 'https://app.wunderpass.org',
  description: [],
  problem: [],
  challenges: [],
  techStack: ['- NextJS', '- Tailwind', '- MUI'],
};
