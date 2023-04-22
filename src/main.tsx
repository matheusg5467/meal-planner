import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"

import { MainPage } from "./pages/MainPage"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainPage />
    </ThemeProvider>
  </React.StrictMode>,
)
