import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/button';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import Subtitle from '../components/subtitle';

import Logo from '../public/logos/logoPride.gif';
import discordLogo from '../public/logos/social/discord.svg';
import twitterLogo from '../public/logos/social/twitter.svg';
import youtubeLogo from '../public/logos/social/youtube.svg';
import hypixelLogo from '../public/logos/social/hypixel.svg';
import { versions } from '../components/downloads/config/versions';
import { PageProps } from './_app';

// TODO use https://nextjs.org/docs/basic-features/layouts
// TODO this side bar is *slightly* larger than other pages and i can't figure out why (maybe fixed sidebar width instead of percentage)
const Home: NextPage<PageProps> = ({ background }) => (
  <>
    <Head>
      <title>FurfSky Reborn - Home</title>
    </Head>
    <Navbar />
    <Sidebar>
      <Image src={Logo} height={200} objectFit="contain" />
      <Subtitle />
    </Sidebar>
    <Content className="flex flex-col w-2/3" backgroundImage={background}>
      <div className="flex flex-col w-2/3">
        <h2 className="text-4xl font-bold text-center text-gold-500 [text-shadow:4px_4px_0_#441a08] mb-8">
          Download Latest Version
        </h2>
        <div className="flex flex-row gap-4 p-2 text-2xl grow">
          <a href={versions[0].variants.fl} download className="basis-1/2">
            <Button className="w-full">{versions[0].version} Full</Button>
          </a>
          <a href={versions[0].variants.ov} download className="basis-1/2">
            <Button className="w-full">{versions[0].version} Overlay</Button>
          </a>
        </div>
        <div className="flex flex-row gap-4 p-2 grow">
          <a href="https://discord.gg/fsr" target="_blank" className="basis-1/4" rel="noreferrer">
            <Button className="w-full h-full">
              <Image objectFit="contain" src={discordLogo} alt="Discord" height={25} />
            </Button>
          </a>
          <a href="https://twitter.com/furfskyreborn" target="_blank" className="basis-1/4" rel="noreferrer">
            <Button className="w-full h-full">
              <Image objectFit="contain" src={twitterLogo} alt="Twitter" height={25} />
            </Button>
          </a>
          <a
            href="https://www.youtube.com/hellcastleyt"
            target="_blank"
            className="basis-1/4"
            rel="noreferrer"
          >
            <Button className="w-full h-full">
              <Image objectFit="contain" src={youtubeLogo} alt="YouTube" height={25} />
            </Button>
          </a>
          <a
            href="https://hypixel.net/threads/furfsky-reborn-1-4-1-rosettas-wares.4101579/"
            target="_blank"
            className="basis-1/4"
            rel="noreferrer"
          >
            <Button className="w-full h-full">
              <Image objectFit="contain" src={hypixelLogo} alt="Hypixel" height={30} />
            </Button>
          </a>
        </div>
      </div>
    </Content>
  </>
);

export default Home;
