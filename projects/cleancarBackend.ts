import { Project } from '@/projects';
import { moritz } from './members';

export const cleancarBackendConfig: Project = {
  title: 'CleanCar App Backend',
  media: [
    {
      isVideo: true,
      source: {
        url: '/projects/cleancarBackend/showcase.webm',
        type: 'video/webm',
      },
      fallback: {
        url: '/projects/cleancarBackend/showcase.mp4',
        type: 'video/mp4',
      },
      length: 77,
    },
    {
      isVideo: false,
      source: '/projects/cleancarBackend/0.png',
    },
    {
      isVideo: false,
      source: '/projects/cleancarBackend/1.png',
    },
    {
      isVideo: false,
      source: '/projects/cleancarBackend/2.png',
    },
  ],
  contributors: [moritz],
  description: [
    'During my time at CleanCar, the marketing team regularly asked me to update promotions or opening times of our Branches displayed in the mobile Apps. This process seemed very inefficient to me and I wanted to enable anyone to update the App with ease. The CleanCar App Backend was born.',
  ],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Docker', '- MateStack'],
};
