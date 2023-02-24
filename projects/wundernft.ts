import { Project } from '@/projects';
import { moritz } from './members';

export const wundernftConfig: Project = {
  title: 'WunderPass NFT',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/wundernft/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/wundernft/showcase.mp4', type: 'video/mp4' },
    },
    { isVideo: false, source: '/projects/wundernft/0.png' },
    { isVideo: false, source: '/projects/wundernft/1.png' },
  ],
  contributors: [moritz],
  link: 'https://mint.wunderpass.org/',
  description: [
    'The WunderPass NFT is an NFT project on the Polygon Blockchain. The NFT can be used to get perks in the WunderPass ecosystem. It has four properties that, combined, give every NFT a unique touch and determines it\'s rarity. The "status" property is determined by the number of NFTs already created. The "wonder" and "pattern" properties are based on luck and the "edition" is a city of the creators choosing. The long term vision is to release a physical card containing your digital identity that can be used to authenticate yourself, e.g. Check in at hotels, use public transportation or get access to an event.',
  ],
  problem: [],
  challenges: [
    'Having no experience in NFTs, I had to figure out what we needed and how to implement it:',
    '[Selecting the Blockchain]{A requirement was to give away an NFT for every new WunderPass user. This meant, transaction costs to create a new NFT should be relatively low. We settled on the Polygon Chain.}',
    '[Writing a Smart Contract]{The last time I wrote a Smart Contract was in 2018. Therefore, I took a short course to refresh my skills.}',
    "[Automating the Image generation process]{We needed a way to create an image, a GIF, and a video of every NFT based on it's properties right after it was created. I used ImageMagick to layer the right images on top of each other and afterwards generated the GIF and video of the animated NFT with ffmpeg.}",
    '[Image Generator Tool]|http://159.223.23.101:3000?edition=San+Francisco+%2F%2F+US+%2F%2F+NA|',
  ],
  learnings: [],
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
