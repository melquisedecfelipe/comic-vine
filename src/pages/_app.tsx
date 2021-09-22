import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { QueryClient, QueryClientProvider } from 'react-query'

import { ThemeProvider } from 'styled-components'

import { CharacterProvider } from 'hooks/useCharacter'
import { FavoriteProvider } from 'hooks/useFavorite'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import SEO from '../../next-seo.config'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CharacterProvider>
          <FavoriteProvider>
            <Head>
              <title>Comic Vine</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta
                name="description"
                content="Comic Vine is the largest comic book wiki in the universe"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <NextNprogress
              color="#000000"
              startPosition={0.3}
              stopDelayMs={200}
              height={4}
            />
            <Component {...pageProps} />
          </FavoriteProvider>
        </CharacterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
