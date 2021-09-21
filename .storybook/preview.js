import '../.jest/next-image.mock'

import { RouterContext } from 'next/dist/shared/lib/router-context'

import { ThemeProvider } from 'styled-components'

import { FavoriteContext, FavoriteContextDefaultValues } from '../src/hooks/useFavorite'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.black
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <FavoriteContext.Provider
        value={{
          ...FavoriteContextDefaultValues,
          ...(context?.args?.charactersContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStyles />
        <Story />
      </FavoriteContext.Provider>
    </ThemeProvider>
  )
]
