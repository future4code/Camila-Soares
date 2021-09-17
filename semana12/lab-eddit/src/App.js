import React from 'react'
import theme from './constants/theme'
import Router from './routes/Router'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return(
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>


  )
}

export default App 

