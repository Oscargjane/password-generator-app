import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* 1. Remove default margin and padding */
  * {
    margin: 0;
    padding: 0;
  }
  /* 2. Use a more-intuitive box-sizing model. */
  *, *::before, *::after {
    box-sizing: inherit;
  }
  /* 3. Use a more-intuitive box-sizing model and set a base font size */
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
  }
  /* 4. Allow percentage-based heights in the application */
  html, body, #root {
    height: 100%;
  }
  /*
    Typographic tweaks!
    5. Set a default font type and width
    6. Add accessible line-height
    7. Improve text rendering
  */
  body {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.gray_50};
    background-color: ${({ theme }) => theme.colors.gray_800};
  }
  /* 8. Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }
  /* 9. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /* 10. Create a root stacking context */
  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyle;
