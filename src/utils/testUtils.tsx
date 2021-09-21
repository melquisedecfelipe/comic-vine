import { ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import {
  CharacterContext,
  CharacterContextData,
  CharacterContextDefaultValues
} from 'hooks/useCharacter'
import {
  FavoriteContext,
  FavoriteContextData,
  FavoriteContextDefaultValues
} from 'hooks/useFavorite'

import theme from 'styles/theme'

type CustomRenderProps = {
  characterProviderProps?: CharacterContextData
  favoriteProviderProps?: FavoriteContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    characterProviderProps = CharacterContextDefaultValues,
    favoriteProviderProps = FavoriteContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CharacterContext.Provider value={characterProviderProps}>
        <FavoriteContext.Provider value={favoriteProviderProps}>
          {ui}
        </FavoriteContext.Provider>
      </CharacterContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
