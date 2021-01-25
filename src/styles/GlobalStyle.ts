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

    h1, h2, h3, h4, h5, h6, a, p, span, li {
      color: #41454b;
    }

`

export { GlobalStyle }
