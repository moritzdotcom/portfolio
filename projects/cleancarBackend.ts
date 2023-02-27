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
    {
      isVideo: false,
      source: '/projects/cleancarBackend/3.png',
    },
  ],
  contributors: [moritz],
  description: [
    'During my time at CleanCar, the marketing team regularly asked me to update promotions or opening times of our Branches displayed in the mobile Apps. This process seemed very inefficient to me and I wanted to enable anyone to update the App with ease and without the help of a developer. The CleanCar App Backend was born.',
  ],
  problem: [
    'The CleanCar App Backend should solve the following problems:',
    '[Update branch details]{Previously, branch details (e.g. opening times) had to be updated in a very complex Typo3 Backend. The App Backend reduced complexity by a lot.}',
    '[Display branches as closed during maintenance]{Branches were frequently closed for a day due to maintenance. Previously, displaying a branch as closed, was a tedious process and I always had to schedule a reminder for the next day to re-open then branch. In the new Backend, you can just press a button and enter the date of re-opening, which happens automatically.}',
    '[Manage coupons and promotions]{Coupons were designed by an agency, then had to be uploaded to Typo3, and the link then had to be inserted into the App configuration. In the new Backend, you simply enter the coupon info, and an image is generated which is then uploaded directly into the App, eliminating the need for the agency completely.}',
    '[Track changes and make them reviewable]{Instead of updating the live app immediately, changes made in the Backend were saved to a database first. After reviewing your changes, you can decide to publish or stash them. This removed the fear of making a mistake.}',
  ],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Docker', '- MateStack'],
};
