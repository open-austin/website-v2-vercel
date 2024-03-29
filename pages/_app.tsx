// Importing fonts (there's probably a better way to do this...)
import '@fontsource/crimson-text'

// Setup for Chakra and Next environments
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'

import { type AppProps } from 'next/app'
import Head from 'next/head'

import { theme } from '../lib/theme'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Open Austin</title>
        <meta
          name="description"
          content="Open Austin supports local organizations tackling systemic, economic, and racial injustice. We are a technical volunteer community making information and data more accessible to the public."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Analytics />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
