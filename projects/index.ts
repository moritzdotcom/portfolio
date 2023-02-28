import { athomeConfig } from './athome';
import { barcrawlerConfig } from './barcrawler';
import { casamaConfig } from './casama';
import { cleancarAppConfig } from './cleancarApp';
import { cleancarBackendConfig } from './cleancarBackend';
import { coolheadConfig } from './coolhead';
import { erpConfig } from './erp';
import { ourtaskConfig } from './ourtask';
import { wundernftConfig } from './wundernft';
import { wunderpassConfig } from './wunderpass';
import { wunderpassLandingConfig } from './wunderpassLanding';

type Member = {
  image: string;
  name: string;
  link: string;
};

type Image = {
  isVideo: false;
  source: string;
  blurUrl?: string;
  alt?: string;
};

type Video = {
  isVideo: true;
  source: { url: string; type: string };
  poster?: string;
  fallback?: { url: string; type: string };
  length?: number;
};

export type Media = Image | Video;

export type Project = {
  title: string;
  media: Media[];
  link?: string;
  githubLink?: string;
  contributors: Member[];
  description: string[];
  problem: string[];
  challenges: string[];
  learnings: string[];
  techStack: string[];
};

export const projects: { [key: string]: Project } = {
  wunderpass: wunderpassConfig,
  wunderpassLanding: wunderpassLandingConfig,
  wundernft: wundernftConfig,
  casama: casamaConfig,
  coolhead: coolheadConfig,
  athome: athomeConfig,
  cleancarApp: cleancarAppConfig,
  erp: erpConfig,
  cleancarBackend: cleancarBackendConfig,
  ourtask: ourtaskConfig,
  barcrawler: barcrawlerConfig,
};

export const validSlugs = [
  'wunderpass',
  'wunderpassLanding',
  'wundernft',
  'casama',
  'coolhead',
  'athome',
  'cleancarApp',
  'erp',
  'cleancarBackend',
  'ourtask',
  'barcrawler',
];

export function getProjectBySlug(slug: string) {
  if (typeof slug == 'string' && slug in projects) {
    return projects[slug];
  }
  return null;
}
