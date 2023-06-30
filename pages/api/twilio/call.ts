import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const publicDir = path.join(process.cwd(), 'public');
  const file = fs.readFileSync(publicDir + '/twilio/call.xml', 'utf8');
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(file);
}
