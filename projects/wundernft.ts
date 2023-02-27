import { Project } from '@/projects';
import { moritz } from './members';

export const wundernftConfig: Project = {
  title: 'WunderPass NFT',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/wundernft/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/wundernft/showcase.mp4', type: 'video/mp4' },
      length: 12,
    },
    {
      isVideo: false,
      source: '/projects/wundernft/0.png',
      alt: 'minting page',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHQAAAgEFAQEAAAAAAAAAAAAABQgJAAIDBAcGAf/EADcQAAEDAwMBBQQHCQAAAAAAAAECAwQABQYHESESCAkxQVFxssHRExQVMmJzdBYlNUJSYWNkof/EABwBAAICAgMAAAAAAAAAAAAAAAQFBgcBAwACCP/EACwRAAEEAgAFAwMEAwAAAAAAAAEAAgMEBRESEyExMhRRcSJBQgYkNFIjJTP/2gAMAwEAAhEDEQA/AI8YzXI4p+xqLleu0dnXROZrbl37Mw19KgkHfmiGvjjcOYdBR3LS22R7qDbkzq+7qvMdS2xO3Wjy2UaMZZpDu5RYz5x3eNYk935lafuSeB+FVFtuY8fmtX+6d3jWRvsD5r1htp8FR8B0qoht7HD81z0+Vd3jV0rsM55bSUvvpQR670ZFcx7uz1pfVvDzahcjsoZXA3+kubKdvbTGKWm7s4oOSNzfPS2GOyvnD1km3m3TG5CISC45078AVizepVejn9VtrY0XQSzrpc4iRnmSpiQNnGllCvaDtTOq7mxh4+6iF9vJldGPsijbeyeaPA0lDnbKUSKz4VUDGr0zK9Or3ZCOnWo/lp+NB5IaaEPG7ZUtxt1oQ8t11KOtZ56lUmW4IdMakNPKTEtKHG/JWx5riyikS3xi2h5yIlDu3I54NcXEt2umpqMfy9Vl6iCoHwNTXC47n1+YoJncr6exyl4u0xEZYSp19QC/xUzkkNTsEmZAL/kV0vFcTRjOn2UIQ4pYciOHk1HMxcNp7NqT4HHCgx+j32o8JTf71mn/AGXPeNWfi2/tWfCqjMO/dv8AlXeFMUoSmxWuRxVSsavSUr05/doI6daj+Wn40BlRpoXSuduKlmetDch8uOFQ53G1JQdIot2t5CC2gISeANuaweqzpUpZT41hc0ucZnoTh2c3kX27NKMj12pxUzdinHyo+ySXcDWvS82QdVltOieJWUD6qCNvUViXMTzeS7Q4SvB4razOwwrLp/fkxP5oa96CM7pnt4vdHiBsMbuH2UVcxO1xm/qXPeNXbjOlVnwqByx3ck+Vio5LUrMZrwqrGNXoiV6cnu10dOtO/wDjT8aW5caaFmk7bipX7pklps5KZ0kNketJo68kviEXLZjh8yvLTtYcTYkNxWJyVOOK6QNvOjBibRbxcKXOztJrgwu6lFX7td5LH1yGEhoJCtz6Uu4DxcP3TUPBbxfZCndS4FrQEXGQgKHjtRcePnk8QgpsnXg83Lds+a4zlyj9nXAqW3woDyrtPTmpgGUd11qZGtfcRC7elWocZLGn18KFlQVEWeaFY7iePlHTf8z8KKCf/Epv6lz3jV5Y3+Kz4XnjK/zJPlYKOS9LLGa8OKrJjVfsz02fd836y41q+Jt7uDUNgoSOtw7ClmYYS0aC2494DjtNXrzrZbF5umFZ73GfhKB3WhfFNcJBCK3FIdFRb9QWLPq+CMbaqxG/ad3BUaVcr1ES8hYVuV+dZtW3xgtj7LpTx0UxD5R1XZb3q3htvwuamBkkJbqGAG0hfJO1RarC59ocY6bUwuTNipngPUBLNYtTIORz1C9XJlKPpD4q8t6nkzIq7f8AEq6hfNbfqcdF3PTXINO7IXXo9/htrd5O6qimXlmsgAgnSmOFrV6bi5pA2vc5xqdg72AXiKnKIbjq4qkpSF7kmksVeXjH0lP5bMPLd9Q7e6jImLS5PluIO6VSHCD6jqNXfjgRVYD7Lz9lCDbkI91io1L0t0UDiq3jV7SlGrfJkRFh2K+4yv8AqQopP/KIDGv8gl73ub1BRpq53F5QU7OkLPqpwk0THDGB0CXzSvJ6lFolxuA22nSB7HVfOiWQRnu1LpZ5B2KLx7nclp6VXCSQfIuq+dFR1Yf6hAS2pv7FEIrz45D7gP8AZZo1laI92pZJamHZyMRZkxP3Zj49jqvnRLacB7sCAlu2AejytlUyYsdC5j6knxBdV862+irj8AtJv2SPMq1IAGwFEABo0EEXFx2V9rKwv//Z',
    },
    {
      isVideo: false,
      source: '/projects/wundernft/1.png',
      alt: 'image generator',
      blurUrl:
        'data:image/jpeg;base64,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',
    },
  ],
  contributors: [moritz],
  link: 'https://mint.wunderpass.org/',
  description: [
    'The WunderPass NFT is an NFT project on the Polygon Blockchain. The NFT can be used to get perks in the WunderPass ecosystem. It has four properties that, combined, give every NFT a unique touch and determines it\'s rarity. The "status" property (e.g. diamond, black, pearl) is determined by the number of NFTs already created. The "wonder" and "pattern" properties are based on luck and the "edition" is a city of the creators choosing. The long term vision is to release a physical card containing your digital identity that can be used to authenticate yourself, e.g. Check in at hotels, use public transportation or get access to an event.',
  ],
  problem: [],
  challenges: [
    'Having no experience in NFTs, I had to figure out what we needed and how to implement it:',
    '[Selecting the Blockchain]{A requirement was to give away an NFT for every new WunderPass user. This meant, the transaction costs to create a new NFT should be relatively low. We settled on the Polygon Chain.}',
    '[Writing a Smart Contract]{The last time I wrote a Smart Contract was in 2018. Therefore, I took a short course to refresh my skills.}',
    "[Automating the Image generation process]{We needed a way to create an image, a GIF, and a video of every NFT based on it's properties right after it was created. I used ImageMagick to layer the right images on top of each other and afterwards generated the GIF and video of the animated NFT with ffmpeg.}",
    '[Image Generator Tool]|http://159.223.23.101:3000?edition=San+Francisco+%2F%2F+US+%2F%2F+NA|',
  ],
  learnings: [],
  techStack: [
    'For the "Minting Page"',
    '- NextJS',
    '- Tailwind',
    '- MUI',
    '- Docker',
    'For the automatic Image Generation',
    '- Ruby on Rails',
    '- ImageMagick',
    '- ffmpeg',
    'For the Smart Contract',
    '- Solidity',
    '- Hardhat',
  ],
};
