import { createGlobalStyle } from 'styled-components'
import { font } from '@/theming/vars'

const GlobalStyle = createGlobalStyle`
 
  * {
      font-family: 'Jost', 'Open Sans', 'Arial', sans-serif;
      font-weight: 400;
      font-size: ${font.body1.font_size};
      line-height: ${font.body1.line_height};
    }
  
  body {
    margin: 0;
  }

  textarea, input {
    appearance: none;

    &:focus-visible {
      appearance: none;
      outline: none;
    }
  }
`
export default GlobalStyle
