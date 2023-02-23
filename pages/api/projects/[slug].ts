// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPorjectBySlug } from '@/projects';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  if (typeof slug != 'string')
    return res.status(401).json(`Invalid Slug: ${slug}`);
  const project = getPorjectBySlug(slug);
  return res.status(project ? 200 : 404).json(project || 'Project not found');
}
