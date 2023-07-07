import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import { useEffect, useState } from 'react';
// import  '../styles/scss/_variables.scss'
import  '../styles/scss/_custom.scss'
// import  '../styles/scss/_fonts.scss'
import  '../styles/scss/_footer.scss'
import  '../styles/scss/_global.scss'
import  '../styles/scss/_header.scss'
import  '../styles/scss/_menu.scss'
import  '../styles/style.css'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}