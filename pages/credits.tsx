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
import CreditComponent from '../components/credits/credit';

const Credits: NextPage<PageProps> = ({ background }) => (
  <>
    <Head>
      <title>FurfSky Reborn - Credits</title>
    </Head>
    <Navbar />
    <Sidebar>
      <Image src={Logo} height={200} objectFit="contain" />
    </Sidebar>
    <Content backgroundImage={background} className="text-center" dark>
      <div className="px-16 py-8">
        {credits.credits.map(credit => (
          <CreditComponent {...credit} role={(credits.roles as any)[credit.role]} />
        ))}
      </div>
    </Content>
  </>
);

export default Credits;
