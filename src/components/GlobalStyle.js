import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'


export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
  list-style:none; */
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`
