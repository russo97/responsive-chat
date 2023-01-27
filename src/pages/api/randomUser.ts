
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import isomorphicUnfetch from "isomorphic-unfetch";

type Data = {
  results: {
    name: {
      first: string,
      last: string
    },
    picture: {
      medium: string
    }
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await isomorphicUnfetch('https://randomuser.me/api/')

  const response = await data.json()

  res.status(200).json(response)
}
