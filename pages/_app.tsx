// Setup for Chakra and Next environments
import '@fontsource/crimson-text'

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
        <meta
          name="description"
          content="Open Austin is a volunteer citizen brigade advocating for open government, open data, and civic application development since 2009."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
