import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// Returns a random background path
export default (req: NextApiRequest, res: NextApiResponse) => {
  const dirRelativeToPublicFolder = 'backgrounds';

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const bgs = fs.readdirSync(dir);

  res.statusCode = 200;
  res.json(`/backgrounds/${bgs[Math.floor(bgs.length * Math.random())]}`);
};
