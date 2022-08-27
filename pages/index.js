import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import HomePage from '../components/HomePage';

const Home = () => (
  <Box>
    <Head>
      <title>SalesMax</title>
      <meta name="description" content="SalesMax" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <HomePage />
    </main>

    <footer>Footer</footer>
  </Box>
);

export default Home;
