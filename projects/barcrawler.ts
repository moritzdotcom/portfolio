import { Project } from '@/projects';
import { gerwin, maxWolff, mohammad, moritz } from './members';

export const barcrawlerConfig: Project = {
  title: 'BarCrawler.club',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/barcrawler/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/barcrawler/showcase.mp4', type: 'video/mp4' },
      length: 75,
    },
    { isVideo: false, source: '/projects/barcrawler/0.png', alt: 'search' },
    { isVideo: false, source: '/projects/barcrawler/1.png', alt: 'select' },
    { isVideo: false, source: '/projects/barcrawler/2.png', alt: 'overview' },
    {
      isVideo: false,
      source: '/projects/barcrawler/3.png',
      alt: 'barcrawl steps',
    },
    { isVideo: false, source: '/projects/barcrawler/4.jpg', alt: 'team' },
  ],
  githubLink: 'https://github.com/Max-Wolff/BarCrawler',
  contributors: [moritz, maxWolff, gerwin, mohammad],
  description: [
    'As part of the LeWagon Coding Bootcamp, we should build a Web Application in groups of four as the final assignment. We wanted to tackle the problem of organizing Pub Crawls. In a Pub Crawl you choose a handful of locations (Pubs, Bars or Clubs) and have one drink at every location throughout the night. We outlined the user journey and started with the design in Figma. Our objective was to have a PubCrawl at the end of the Bootcamp and, as a bonus, we wanted to implement some drinking games into the app.',
  ],
  problem: [
    'We focused on three major problems to solve:',
    '[Choosing the best locations]{We decided to use the Foursquare Places API to get a list of Pubs, Bars and Clubs with a rating above 3 Stars.}',
    '[Optimizing the walking distance between the stops]{With help of the Google Maps API, we could retrieve the distances between each stop and calculate the shortest route.}',
    '[Sharing the route with your friends]{After choosing all locations, the user gets a QR Code to share with his friends or use the native Share API in the Browser to share the link directly in any group chat.}',
  ],
  challenges: [
    '[Coding as a team]{As this was our first group project, we had to learn how to distribute tasks effectively and how to code collaboratively, e.g. how to handle pull requests or deal with merge conflicts.}',
    '[Prioritizing tasks]{Our project was quite ambitious and we had to learn how to prioritize tasks to get a project done by the end of the deadline.}',
  ],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Heroku'],
};
