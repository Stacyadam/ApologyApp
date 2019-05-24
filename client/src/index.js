import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo-hooks';
import GlobalStyles from './shared/GlobalStyles'
import App from './components/App'

const theme = {
  primary: '#6c5ce7',
  secondary: '#81ecec',
  light: '#dfe6e9',
  dark: '#2d3436'
}

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

// sorta eh but it works
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
      <>
        <GlobalStyles />
        <App />
      </>
    </ApolloProvider>
    </ThemeProvider>, document.getElementById("root"))
