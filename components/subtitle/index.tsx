import React from 'react';
import { subtitleCollection } from './config/subtitle-collection';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

/*
  font-family: Minecraft, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 146.5%;
  max-width: 40rem;
  margin-top: 3.2rem;

  text-align: center;
  color: #FBCC6C; // TODO changing to vars somehow messes up the style, idk why probs some ssr bs
  text-shadow: 4px 4px 0 #441A08; // TODO changing to vars somehow messes up the style, idk why probs some ssr bs
*/

const Subtitle: React.FC = () => (
  <h2 className="font-bold text-2xl text-gold-400 [text-shadow:4px_4px_0_#441a08] text-center m-8 mx-16">
    {subtitleCollection[getRandomInt(0, subtitleCollection.length)]}
  </h2>
);

export default Subtitle;
