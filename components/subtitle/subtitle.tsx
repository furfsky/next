import React from 'react';
import { subtitleCollection } from './config/subtitle-collection'
import BigText from "../bigText/bigText.style";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

const Subtitle: React.FC = () => (
    <BigText>
      { subtitleCollection[getRandomInt(0, subtitleCollection.length)] }
    </BigText>
  );

export default Subtitle;
