import { Project } from '@/projects';
import { despot, moritz } from './members';

export const casamaConfig: Project = {
  title: 'Casama',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/casama/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/casama/showcase.mp4', type: 'video/mp4' },
      length: 22,
    },
    { isVideo: false, source: '/projects/casama/0.png' },
    { isVideo: false, source: '/projects/casama/1.png' },
    { isVideo: false, source: '/projects/casama/2.png' },
  ],
  contributors: [moritz, despot],
  link: 'https://app.casama.io',
  description: [
    'With Casama, we wanted to solve the general problem of money distribution within a group. After exploring some more specific cases within this problem, we settled on the case of betting within a group. Imagine, you wanted to bet on the next superbowl with your friends: Using Casama, you can create a group, set the stake for the bet and invite your friends to join. Every member places a bet and once the game ends, the pot gets redistributed within the group.',
    'Casama eliminates the tideous process of collecting the pot, keeping track of all bets, determining the winners, and redistributing the money. We tested our idea during the 2022 World Cup with 110 Friends and a total betting volume of $ 14,000 in 330 betting groups. Since then, we implemented combo bets, so you can bet on multiple games at once within your group.',
  ],
  problem: [],
  challenges: [],
  learnings: [],
  techStack: [
    'For The Web Application',
    '- NextJS',
    '- MUI',
    '- Tailwind',
    '- Docker',
    'For the Smart Contracts',
    '- Solidity',
    '- Hardhat',
  ],
};
