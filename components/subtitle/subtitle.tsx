import React, { useState } from 'react';
import { subtitleCollection } from './config/subtitle-collection'
import SubtitleWrapper from "./subtitle.style";

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Subtitle: React.FC = () => {
  return (
    <SubtitleWrapper>
      { subtitleCollection[getRandomInt(0, subtitleCollection.length)] }
    </SubtitleWrapper>
  );
};

export default Subtitle;
