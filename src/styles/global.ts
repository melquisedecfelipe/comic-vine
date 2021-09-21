import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('WorkSans Regular'), local('WorkSans-Regular'),
        url('/fonts/WorkSans-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('WorkSans Medium'), local('WorkSans-Medium'),
        url('/fonts/WorkSans-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Barlow SemiBold'), local('Barlow-SemiBold'),
        url('/fonts/Barlow-SemiBold.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.familyWorkSans};
      font-size: ${theme.font.sizes.medium};

      a {
        font-weight: ${theme.font.medium};
        color: ${theme.colors.link};
      }
    }
  `}

`

export default GlobalStyles
