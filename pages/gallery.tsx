/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Content from '../components/content';

import swords from '../public/gallery/swords.png';
import armor from '../public/gallery/armor.png';
import bows from '../public/gallery/bows.png';
import tools from '../public/gallery/tools.png';
import talismans from '../public/gallery/talismans.png';
import reforges from '../public/gallery/reforges.png';
import misc from '../public/gallery/misc.png';
import Logo from '../public/logos/gallery.png';
import { PageProps } from './_app';

const tabs = {
  swords,
  armor,
  bows,
  tools,
  talismans,
  reforges,
  misc,
};

const Gallery: NextPage<PageProps> = ({ background }) => {
  const [tab, setTab] = useState<keyof typeof tabs>('swords');
  return (
    <>
      <Head>
        <title>FurfSky Reborn - Gallery</title>
      </Head>
      <Navbar />
      <Sidebar>
        <Image src={Logo} height={200} objectFit="contain" />
        <p className="mx-16 text-xl text-center text-gold-400 [text-shadow:4px_4px_0_#441a08]">
          Note that the gallery might be from an outdated version.
        </p>
      </Sidebar>
      <Content backgroundImage={background} className="text-center">
        <div className="px-16 py-8">
          <Image
            src={tabs[tab]}
            placeholder="blur"
            alt="gallery"
            useMap="#galleryMap"
            objectFit="contain"
            className="relative w-full h-full"
          />
          <map name="galleryMap">
            <area
              alt=""
              title="Swords"
              onClick={() => setTab('swords')}
              shape="rect"
              coords="9,6,50,47"
              className="cursor-pointer"
            />
            <area
              alt=""
              title="Armor"
              onClick={() => setTab('armor')}
              shape="rect"
              coords="57,6,98,47"
              className="cursor-pointer"
            />
            <area
              alt=""
              title="Bows"
              onClick={() => setTab('bows')}
              shape="rect"
              coords="105,6,146,47"
              className="cursor-pointer"
            />
            <area
              alt=""
              title="Tools"
              onClick={() => setTab('tools')}
              shape="rect"
              coords="153,6,194,47"
              className="cursor-pointer"
            />
            <area
              alt=""
              title="Talismans"
              onClick={() => setTab('talismans')}
              shape="rect"
              coords="201,6,242,47"
              className="cursor-pointer"
            />
            <area
              alt=""
              title="Reforges"
              onClick={() => setTab('reforges')}
              shape="rect"
              coords="249,6,290,47"
              className="cursor-pointer"
            />
            <area
              alt=""
              title="Miscellaneous"
              onClick={() => setTab('misc')}
              shape="rect"
              coords="297,6,338,47"
              className="cursor-pointer"
            />
          </map>
        </div>
      </Content>
    </>
  );
};

export default Gallery;
