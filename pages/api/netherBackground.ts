import { NextApiRequest, NextApiResponse } from 'next';


export default (req: NextApiRequest, res: NextApiResponse) => {


  const bgs = [
      '00b61878.png',
      '0c1b1a60.png',
      '1a980943.png',
      '5fdd72bc.png',
      '8e422c0d.png',
      '9c09b541.png',
      '9fd8bf76.png',
      '336e5878.png',
      '914d538c.png',
      'bdbba326.png',
      'c7ee95f9.png',
      'd0da45c1.png',
      'f5b77fd2.png',
      'f269a1e3.png',
      'fa737f91.png'
  ];

  res.statusCode = 200;
  res.json(`/backgrounds/${bgs[Math.floor(bgs.length * Math.random())]}`);
};
