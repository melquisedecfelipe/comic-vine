import { ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import {
  CharactersContext,
  CharactersContextData,
  CharactersContextDefaultValues
} from 'hooks/useCharacters'

import theme from 'styles/theme'

type CustomRenderProps = {
  charactersProviderProps?: CharactersContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    charactersProviderProps = CharactersContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CharactersContext.Provider value={charactersProviderProps}>
        {ui}
      </CharactersContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
