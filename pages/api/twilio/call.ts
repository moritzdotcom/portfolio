import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const file = fs.readFileSync('./public/twilio/call.xml', 'utf8');
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(file);
}
