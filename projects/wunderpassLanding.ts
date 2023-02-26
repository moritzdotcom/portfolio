import { Project } from '@/projects';
import { moritz } from './members';

export const wunderpassLandingConfig: Project = {
  title: 'WunderPass Website',
  media: [
    {
      isVideo: false,
      source: '/projects/wunderpass/landingPage/showcase.png',
    },
  ],
  contributors: [moritz],
  link: 'https://www.wunderpass.io',
  description: [
    'An informative Website to outline the benefits of WunderPass. The project was pretty straight forward and it was exciting to experiment with creative designs and animations.',
  ],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: ['- NextJS', '- Tailwind', '- MUI'],
};
