import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;

      &::before, &::after {
        box-sizing: border-box;
      }
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
      font-size: 16px;
    }
`

export { GlobalStyle }
