import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res
    .setHeader('method', 'GET')
    .setHeader('action', '/twilio/call.xml')
    .redirect(302, '/twilio/call.xml');
}
