import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res
    .setHeader('method', 'GET')
    .setHeader('action', '/twilio/keinproblem.mp3')
    .setHeader('Content-Type', 'audio/mpeg')
    .redirect(302, '/twilio/keinproblem.mp3');
}
