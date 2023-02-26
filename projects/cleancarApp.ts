import { Project } from '@/projects';
import { andreas, jonas, moritz } from './members';

export const cleancarAppConfig: Project = {
  title: 'CleanCar Web App',
  media: [
    {
      isVideo: true,
      source: {
        url: '/projects/cleancarApp/showcase.webm',
        type: 'video/webm',
      },
      fallback: {
        url: '/projects/cleancarApp/showcase.mp4',
        type: 'video/mp4',
      },
      length: 64,
    },
    {
      isVideo: false,
      source: '/projects/cleancarApp/0.png',
    },
    {
      isVideo: false,
      source: '/projects/cleancarApp/1.png',
    },
    {
      isVideo: false,
      source: '/projects/cleancarApp/2.png',
    },
  ],
  contributors: [moritz, jonas, andreas],
  description: [
    'I was recruited by CleanCar to help implement their new digital strategy. The most impactful project was the implementation of an ERP system. The ERP had a lot of benefits, but it was complicated to use. Hence, we decided to build a simple-to-use interface on top of the powerful ERP system: The CleanCarApp.',
  ],
  problem: [
    'Integrating a powerful tool, like an ERP system, can confuse or intimidate people. Some examples included:',
    '[Data was not clearly visible]{If you wanted to get the daily revenue, for example, you had to navigate through tabs, generate reports and wait for the answer. Such an important metric should be instantly visible, so we put it right on the Dashboard of the App.}',
    '[Handling upcoming or urgent tasks]{We figuered out how to import Tasks from our external Audit system into the ERP, but had no way of letting people know, when they are due. Thus, we put a reminder on the dashboard for urgent or upcoming tasks.}',
    '[Daily closings were a nightmare]{At the end of a day, all branch managers had to submit a report regarding cash earnings, inventory, damages etc. The ERP had seperate inputs for those metrics scattered throughout the Application. We created a simple interface, tailored to every branch, and handled the import behind the scenes.}',
  ],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Docker', '- MateStack'],
};
