import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
html,
body {
  min-width: 320px;
  font-size: 10px;
}

body {
  background-color: var(--color-black);
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
}
`

export default Base
