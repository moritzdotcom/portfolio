import { Project } from '@/projects';
import { moritz } from './members';

export const erpConfig: Project = {
  title: 'CleanCar ERP Integration',
  media: [{ isVideo: false, source: '/projects/erp/showcase.png' }],
  contributors: [moritz],
  description: [
    'When I started at CleanCar, they used four different POS-Systems and data was relatively unorganized. To clean up the digital infrastructure, an ERP system was integrated. My task was to gather the data from all systems, format it to be consistent and import it into the ERP system. This included:',
    '- Sales data from all four POS-Systems',
    '- Employee data and daily working times',
    '- Inventory at all branches',
    '- Delivery notes and invoices',
    '- Reports of regular QA checkups',
  ],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby'],
  prev: { slug: 'cleancarApp', name: 'CC App' },
  next: { slug: 'cleancarBackend', name: 'CC App Backend' },
};
