import { Project } from '@/projects';
import { moritz } from './members';

export const athomeConfig: Project = {
  title: 'AtHome Website',
  media: [
    { isVideo: false, source: '/projects/athome/0.png' },
    { isVideo: false, source: '/projects/athome/1.png' },
    { isVideo: false, source: '/projects/athome/2.png' },
    { isVideo: false, source: '/projects/athome/3.png' },
    { isVideo: false, source: '/projects/athome/4.png' },
  ],
  contributors: [moritz],
  description: [
    'This project included both, redesigning the legacy website as well as implementating the new design. With a general content structure in mind, I proceeded to get inspiration from modern Websites.',
  ],
  problem: [],
  challenges: [
    'Although it was "only" a Website, some challenges occured:',
    '[Creating a new Logo]{The logo of the company was of very low resolution, so I decided to redesign it in Affinity Designer.}',
    '[Implementing the Immoscout API to get current rental offers]{The authentication process with the API was complicated and kept me busy for a few hours.}',
    '[Making the site responsive]{The old website was not responsive at all, so I had no point of reference.}',
  ],
  learnings: [],
  techStack: ['- NextJS', '- Tailwind'],
};
