import React from 'react';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useRandomNetherBackground } from '../util/background';

export interface PageProps {
  background: string;
}

function App({ Component, pageProps }: AppProps) {
  const background = useRandomNetherBackground();
  return <Component {...pageProps} background={background} />;
}
export default App;
