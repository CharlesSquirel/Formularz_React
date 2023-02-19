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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 100vh;
  }
`;
