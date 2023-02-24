import { Project } from '@/projects';
import { moritz } from './members';

export const wunderpassLandingConfig: Project = {
  title: 'WunderPass Landing Page',
  media: [
    {
      isVideo: false,
      source: '/projects/wunderpass/landingPage/showcase.png',
    },
  ],
  contributors: [moritz],
  link: 'https://www.wunderpass.io',
  description: [],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: ['- NextJS', '- Tailwind', '- MUI'],
};
