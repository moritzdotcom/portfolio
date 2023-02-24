import { Project } from '@/projects';
import { moritz } from './members';

export const ourtaskConfig: Project = {
  title: 'Ourtask',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/ourtask/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/ourtask/showcase.mp4', type: 'video/mp4' },
    },
  ],
  contributors: [moritz],
  description: [
    'The idea for Ourtask emerged from my time working as a business analyst at a real estate management company. I noticed, that the assignment and tracking of tasks was a tideous and manual process. I started implementing some VBA scripts into the Excel spreadsheet to automate the creation of printable PDFs for the craftsman. However, there was still room for improvement. After completing the LeWagon Coding Bootcamp, I returned to create a Web Application to automate the whole process of creating, forwarding and keeping track of tasks. Everyone loved this new tool and it is still being used to create up to 400 tasks every year.',
  ],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- NGINX', '- DigitalOcean'],
};
