import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const publicDir = path.join(process.cwd(), 'public');
  const file = fs.readFileSync(publicDir + '/twilio/keinproblem.mp3');
  res.setHeader('Content-Type', 'audio/mpeg');
  res.status(200).send(file);
}
