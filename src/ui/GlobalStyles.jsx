import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  font-family: "Exo", monospace, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1f1f1f;
  &::-webkit-scrollbar {
      display: none;
    }
}

button {
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

`;
export default GlobalStyles;
