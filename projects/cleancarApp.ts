import { Project } from '@/projects';
import { andreas, jonas, moritz } from './members';

export const cleancarAppConfig: Project = {
  title: 'CleanCar Web App',
  media: [{ isVideo: false, source: '/projects/cleancarApp/showcase.png' }],
  contributors: [moritz, jonas, andreas],
  description: [],
  problem: [],
  challenges: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Docker', '- MateStack'],
};
