import { Project } from '@/projects';
import { despot, moritz } from './members';

export const wundernftConfig: Project = {
  title: 'WunderPass NFT',
  media: [{ isVideo: false, source: '/projects/wundernft/showcase.png' }],
  contributors: [moritz, despot],
  link: 'https://mint.wunderpass.org/',
  description: [],
  problem: [],
  challenges: [],
  techStack: [
    'For The "Minting Page"',
    '- NextJS',
    '- Tailwind',
    '- MUI',
    'For automatic Image Generation',
    '- Ruby on Rails',
    '- ImageMagick',
    '- ffmpeg',
    'For the Smart Contract',
    '- Solidity',
    '- Hardhat',
  ],
};
