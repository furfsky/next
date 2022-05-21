import fs from 'fs/promises';

export const getRandomBackground = async () => {
  const bgs = await fs.readdir('public/backgrounds');
  return `backgrounds/${bgs[Math.floor(bgs.length * Math.random())]}`;
};

// make into a generic or something so you can get other stuff
export interface PageProps {
  background: string;
}
