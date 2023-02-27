import Navbar from '@/components/navbar';
import Wrapper from '@/components/wrapper';
import '@/styles/globals.css';
import { StyledEngineProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledEngineProvider injectFirst>
        <Wrapper>
          <Navbar />
          <Component {...pageProps} />
        </Wrapper>
      </StyledEngineProvider>
    </>
  );
}
