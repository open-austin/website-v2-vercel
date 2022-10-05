// Setup for Chakra and Next environments

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../lib/theme'
import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Open Austin</title>
        <meta name="description" content="Open Austin -- FILL ME IN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
