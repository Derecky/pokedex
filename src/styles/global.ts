import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:  border-box;
  }

  body {
    /* background-color: #fff; */
    background-color: var(--background-500);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 140%;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`