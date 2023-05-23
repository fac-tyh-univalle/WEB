import React from 'react';
import '../styles/globals.scss';
import '../styles/login.css';
import '../styles/locations.css';
import '../styles/add.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}



