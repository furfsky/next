// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { textCollection, quotesCollection } from '../../../components/subtitle/config/subtitle-collection';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { index } = req.query;
  if (index) return res.status(200).send(textCollection[parseInt(index[0])])

  
  res.status(200).send(textCollection[getRandomInt(0, textCollection.length)])
}
