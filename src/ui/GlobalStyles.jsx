import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  font-family: "Montserrat", monospace, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  line-height: 1.5;

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
  font-family: inherit;
}

html {
  scroll-snap-type: y proximity;
  scroll-padding-top: 70px;
  scroll-behavior: smooth;

  @media (max-width: 700px) {
    scroll-padding-top: 60px;
  }
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
