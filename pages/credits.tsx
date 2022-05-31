import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Content from '../components/content';

import Logo from '../public/logos/credits.png';
import credits from '../components/credits/config/credits.json';
import { PageProps } from './_app';
import { brightness } from '../util/color';

const Credits: NextPage<PageProps> = ({ background }) => (
  <>
    <Head>
      <title>FurfSky Reborn - Credits</title>
    </Head>
    <Navbar />
    <Sidebar>
      <Image src={Logo} height={200} objectFit="contain" />
    </Sidebar>
    {/* TODO Redesign and abastract into component, also refactor colors (use red for god's sake) */}
    <Content backgroundImage={background} className="text-center" dark>
      {credits.credits.map(credit => (
        <div key={credit.id}
          style={{
            color: (credits.roles as any)[credit.role].color,
            textShadow: `4px 4px 0 ${brightness((credits.roles as any)[credit.role].color, 0.35)}`,
          }}
          className="inline-block m-8 text-2xl text-center"
        >
          <h3 className="mb-4 text-4xl">{credit.name}</h3>
          <p>{(credits.roles as any)[credit.role].name}</p>
          {/* {credit.quote ? <p className="italic">{credit.quote}</p> : ''} */}
        </div>
      ))}
    </Content>
  </>
);

export default Credits;
