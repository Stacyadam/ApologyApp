import { createGlobalStyle } from 'styled-components'
import { normalize, linearGradient } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  body {
    font-family: 'Inter', sans-serif;
    background-color: #ecf0f1;
    outline: ${props => props.theme.secondary};
  }
`
export default GlobalStyles
