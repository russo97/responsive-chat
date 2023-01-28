
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import unfetch from "isomorphic-unfetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await unfetch('https://randomuser.me/api/')

  const response = await data.json()

  res.status(200).json(response)
}
