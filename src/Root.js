import Form from "./components/Form/Form";
import { GlobalStyle } from "./GlobalStyles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyles/theme";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Form />
      </ThemeProvider>
    </>
  );
}

export default Root;
