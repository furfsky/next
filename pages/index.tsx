import React from 'react';
import Image from 'next/image';
import Button from '../components/button';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import Subtitle from '../components/subtitle';

import backgroundImage2 from '../public/backgrounds/2.png';
import Logo from '../public/logos/logo.gif';
import discordLogo from '../public/logos/social/discord.svg';
import twitterLogo from '../public/logos/social/twitter.svg';
import youtubeLogo from '../public/logos/social/youtube.svg';
import hypixelLogo from '../public/logos/social/hypixel.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar>
        <Image src={Logo} height={200} objectFit="contain" />
        <Subtitle />
      </Sidebar>
      <Content className="flex flex-col w-2/3" backgroundImage={backgroundImage2.src}>
        <div className="flex flex-col w-2/3">
          <h2 className="text-4xl font-bold text-center text-gold-500 [text-shadow:4px_4px_0_#441a08] mb-8">
            Download Latest Version
          </h2>
          <div className="flex flex-row gap-4 p-2 text-3xl grow">
            <Button className="basis-1/2">v.1.4 Full</Button>
            <Button className="basis-1/2">v.1.4 Overlay</Button>
          </div>
          <div className="flex flex-row gap-4 p-2 grow">
            <Button className="basis-1/4">
              <Image objectFit="contain" src={discordLogo} alt="Discord" height={25} />
            </Button>
            <Button className="basis-1/4">
              <Image objectFit="contain" src={twitterLogo} alt="Twitter" height={25} />
            </Button>
            <Button className="basis-1/4">
              <Image objectFit="contain" src={youtubeLogo} alt="YouTube" height={25} />
            </Button>
            <Button className="basis-1/4">
              <Image objectFit="contain" src={hypixelLogo} alt="Hypixel" height={30} />
            </Button>
          </div>
        </div>
      </Content>
    </>
  );
}
