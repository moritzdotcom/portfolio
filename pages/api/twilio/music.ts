import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const file = fs.readFileSync('./public/twilio/keinproblem.mp3', 'utf8');
  res.setHeader('Content-Type', 'audio/mpeg');
  res.status(200).send(file);
}
