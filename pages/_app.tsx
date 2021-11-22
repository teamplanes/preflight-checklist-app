import {AppProps} from 'next/app';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ChakraProvider
      theme={extendTheme({
        textStyles: {
          h1: {
            fontSize: '24px',
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
          },
        },
        layerStyles: {
          card: {
            borderColor: 'gray.200',
            borderRadius: 'md',
            boxShadow: 'md',
            borderWidth: 'thin',
            bg: 'white',
            padding: 4,
          },
        },
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
