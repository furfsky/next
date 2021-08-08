import React from 'react';
import 'tippy.js/dist/tippy.css';
import '../styles/globals.scss';
import '../styles/variables.scss';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
