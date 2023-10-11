import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/quicksand/400.css'
import '@fontsource/climate-crisis/400.css'




export default function App({ Component, pageProps }) {

  const colors ={
    brand: {
      900: '#e4ddf4',
      800: '#943d24',
      700: '#fffbf0',
      600: '#2d2d2d',
      500: '#282612',
      400: '#fefbe9'
    },
  }

 const fonts= {
    heading: `'Climate Crisis', sans-serif`,
    body: `'Quicksand', sans-serif`,
  }

  const theme = extendTheme({ colors, fonts })
  
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
   
  )
}