import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

const MyApp = ({ Component, pageProps }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <StateContext.Provider
      value={{
        cartItems,
        setCartItems
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateContext.Provider>
  );
};

export default MyApp;
