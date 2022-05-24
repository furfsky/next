import React from 'react';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useRandomBackground } from '../util/background';

// Dunno how to resolve these stupid errors
export interface PageProps {
  background: string;
}

function App({ Component, pageProps }: AppProps) {
  const background = useRandomBackground('/backgrounds/2022-05-21_12.02.35.png');
  return <Component {...pageProps} background={background} />;
}
export default App;
