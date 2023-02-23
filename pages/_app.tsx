import Navbar from '@/components/navbar';
import Wrapper from '@/components/wrapper';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Navbar />
      <Component {...pageProps} />
    </Wrapper>
  );
}
