import React from 'react';
import { subtitleCollection } from './config/subtitle-collection';
// import { subtitleCollection } from './config/subtitle-collection';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

const Subtitle: React.FC = () => (
  <h2 className="font-bold text-2xl text-gold-400 [text-shadow:4px_4px_0_#441a08] text-center m-8 mx-16">
    {subtitleCollection[getRandomInt(0, subtitleCollection.length)]}
  </h2>
);

export default Subtitle;
