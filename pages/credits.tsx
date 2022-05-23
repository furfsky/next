import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Content from '../components/content';

import Logo from '../public/logos/credits.png';
import credits from '../components/credits/config/credits.json';
import { useRandomBackground } from '../util/background';

const Credits: NextPage = () => {
  const background = useRandomBackground();
  // TODO fix the bot cause it isn't working
  return (
    <>
      <Navbar />
      <Sidebar>
        <Image src={Logo} height={200} objectFit="contain" />
      </Sidebar>
      {/* TODO add shadows to the text to maybe make it more readable, also refactor colors (use red for god's sake) */}
      <Content backgroundImage={background} dark>
        {credits.credits.map(credit => (
          <div style={{ color: (credits.roles as any)[credit.role].color }} className="text-center">
            {credit.name} - {(credits.roles as any)[credit.role].name}
          </div>
        ))}
      </Content>
    </>
  );
};

export default Credits;
