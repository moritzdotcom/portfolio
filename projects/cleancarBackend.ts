import { Project } from '@/projects';
import { moritz } from './members';

export const cleancarBackendConfig: Project = {
  title: 'CleanCar App Backend',
  media: [
    {
      isVideo: false,
      source: '/projects/cleancarBackend/showcase.png',
    },
  ],
  contributors: [moritz],
  description: [],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Docker', '- MateStack'],
};
