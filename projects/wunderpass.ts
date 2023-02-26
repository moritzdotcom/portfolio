import { Project } from '@/projects';
import { despot, moritz } from './members';

export const wunderpassConfig: Project = {
  title: 'WunderPass Web App',
  media: [{ isVideo: false, source: '/projects/wunderpass/showcase.png' }],
  contributors: [moritz, despot],
  link: 'https://app.wunderpass.org',
  description: [
    'WunderPass pursues the vision of unrestricted sovereignty over data and the creation of a digital identity, so that tedious online account management becomes history. WunderPass is a decentralised identity protocol built on the Blockchain. As a result, users own their data and decide with whom they want to share it. Resulting from this, WunderPass enables user friendly authentication, payment, signing and notifications in the world of crypto.',
  ],
  problem: [
    'Single Identity on the web is still an unsolved problem which WunderPass approaches as follows:',
    '[Account centralization]{With WunderPass, users can simply connect with supported Apps. Authentication and payment is handled by WunderPass, so no need to enter your details or payment info at every transaction.}',
    '[Blockchain is confusing]{A lot of users are confused when interacting with the Blockchain and, so far, only a handful of people make use of the benefits, Blockchain technology provides. WunderPass provides a simple interface and handles the Blockchain transactions in the background.}',
    '[Blockchain is anonymous]{Users of decetralized applications are anonymous and in order to send your friends crypto, you have to know their wallet address. WunderPass adds an identity layer on top of your crypto wallet, so you can find your friends easily by name, email or phone.}',
  ],
  challenges: [
    '[Switching from Ruby to React]{WunderPass was my first react project. I learnt programming in ruby using the Rails framework. Despite the learning curve, switching to react was a great decision and next.js has been my go-to framework for new projects ever since.}',
    '[Dealing with public-key authentication]{In the crypto world, asymmetric authentication is required. This means, users can not simply authenticate with username and password, but have to know their private key to authenticate. This key can be generated from 12 random words, known as "seed phrase". Implementing this and making it user friendly was a challenge with many iterations based on user feedback.}',
  ],
  learnings: [],
  techStack: ['- NextJS', '- Tailwind', '- Docker', '- MUI'],
};
