import { createGlobalStyle } from 'styled-components'
import { normalize, linearGradient } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  body {
    font-family: 'Inter', sans-serif;
    ${props => linearGradient({
colorStops: [`${props.theme.secondary} 0%`, `${props.theme.primary} 95%`],
toDirection: 'to top right',
fallback: props.theme.primary,
})};
    outline: ${props => props.theme.secondary};
  }
`
export default GlobalStyles
