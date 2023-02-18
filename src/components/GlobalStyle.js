import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 22px;
  }

  input, button {
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.85;
    }
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
