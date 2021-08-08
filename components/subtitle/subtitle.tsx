import React from 'react';
import { subtitleCollection } from './config/subtitle-collection'
import SubtitleWrapper from "./subtitle.style";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

const Subtitle: React.FC = () => (
    <SubtitleWrapper>
      { subtitleCollection[getRandomInt(0, subtitleCollection.length)] }
    </SubtitleWrapper>
  );

export default Subtitle;
