import React from 'react';
import Image from "next/image";
import Button from "../components/button/button.style";
import Navbar from "../components/navbar/navbar";
import Background from "../components/background/background.style";
import Sidebar from "../components/sidebar/sidebar";
import DownloadButtons from "../components/home/layouts/download-buttons";

import backgroundImage2 from '../public/backgrounds/2.png';
import discordLogo from '../public/logos/social/discord.svg';
import twitterLogo from '../public/logos/social/twitter.svg';
import youtubeLogo from '../public/logos/social/youtube.svg';
import hypixelLogo from '../public/logos/social/hypixel.svg';

// TODO make background work actually
export default function Home() {
  return (
    <Background backgroundImage={backgroundImage2.src}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="content-main">
          <DownloadButtons>
            <Button isPrimary gridArea="download-primary">
              Download latest version (v.1.4 full)
            </Button>
            <Button gridArea="download-secondary-plus">
              v.1.4 Overlay <span className="plus" >+</span>
            </Button>
            <Button gridArea="download-secondary">v.1.4 Overlay</Button>
            <Button gridArea="discord">
              <Image
                objectFit="contain"
                src={discordLogo}
                alt="Discord"
                height={25}
              />
            </Button>
            <Button gridArea="twitter">
              <Image
                objectFit="contain"
                src={twitterLogo}
                alt="Twitter"
                height={25}
              />
            </Button>
            <Button gridArea="youtube">
              <Image
                objectFit="contain"
                src={youtubeLogo}
                alt="YouTube"
                height={25}
              />
            </Button>
            <Button gridArea="hypixel">
              <Image
                objectFit="contain"
                src={hypixelLogo}
                alt="Hypixel"
                height={30}
              />
            </Button>
          </DownloadButtons>
        </div>
      </div>
    </Background>
  );
}
