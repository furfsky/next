import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import DownloadGroup from '../components/downloads/downloadGroup';
import Content from '../components/content';

import Logo from '../public/logos/downloads.png';
import { versions } from '../components/downloads/config/versions';
import { PageProps } from './_app';

const Downloads: NextPage<PageProps> = ({ background }) => (
  <>
    <Head>
      <title>FurfSky Reborn - Downloads</title>
    </Head>
    <Navbar />
    <Sidebar>
      <Image src={Logo} height={200} objectFit="contain" />
    </Sidebar>
    <Content backgroundImage={background}>
      <div className="px-24 py-8">
        {/* <div className="relative">
          <DownloadGroup name="Overheated" version="v1.5" variants={{ fl: '', ov: '' }} disabled />
          <div className="flex flex-col bg-[repeating-linear-gradient(45deg,#775500cc,#775500cc_10px,#2c354dcc_10px,#2c354dcc_20px)] w-full h-full absolute top-0 bg-opacity-20 rounded-md">
            <h2 className="text-4xl font-bold text-gold-400 [text-shadow:4px_4px_0_#441a08] text-center">
              Pack Progress
            </h2>
            <div className="flex items-center justify-center w-full grow">
              <div className="h-12 bg-pale-600 w-96 shadow-[inset_-0.4rem_-0.4rem_0px_#1c1d30,inset_0.4rem_0.4rem_0px_#444a71]">
                <div className="bg-gold-400 shadow-[inset_-0.4rem_-0.4rem_0px_#441a08,inset_0.4rem_0.4rem_0px_#ffaa00] w-[calc(24rem*0.95)] h-full" />
              </div>
            </div>
          </div>
        </div> */}
        {versions.map(version => (
          <DownloadGroup {...version} key={version.version} />
        ))}
      </div>
    </Content>
  </>
);

export default Downloads;
