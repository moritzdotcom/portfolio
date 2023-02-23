import { Project } from '@/projects';
import { gerwin, maxWolff, mohammad, moritz } from './members';

export const barcrawlerConfig: Project = {
  title: 'BarCrawler.club',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/barcrawler/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/barcrawler/showcase.mp4', type: 'video/mp4' },
    },
    { isVideo: false, source: '/projects/barcrawler/0.png' },
    { isVideo: false, source: '/projects/barcrawler/1.png' },
    { isVideo: false, source: '/projects/barcrawler/2.png' },
    { isVideo: false, source: '/projects/barcrawler/3.png' },
  ],
  githubLink: 'https://github.com/Max-Wolff/BarCrawler',
  contributors: [moritz, maxWolff, gerwin, mohammad],
  description: [
    'As part of the LeWagon Coding Bootcamp, we should build a Web Application in groups of four in the final two weeks. We wanted to tackle the problem of organizing Pub Crawls. In a Pub Crawl you choose a handful of locations (Pubs, Bars or Clubs) and have a drink at every location throughout the night. We outlined the user journey and started with the design in Figma. Our objective was to have a PubCrawl at the end of the Bootcamp and, as a bonus we wanted to implement some drinking games into the app.',
  ],
  problem: [
    'We focused on three major problems to solve:',
    '[Choosing the best locations]{We decided to use the Foursquare Places API to get a list of Pubs, Bars and Clubs with a rating above 3 Stars.}',
    '[Optimizing the walking distance between the stops]{With help of the Google Maps API, we could retrieve the distances between each stop and calculate the shortest route.}',
    '[Share the route with your friends]{After choosing all locations, the user would get a QR Code to share with his friends or use the native Share API in the Browser to share the link directly in any group chat.}',
  ],
  challenges: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Heroku'],
};
