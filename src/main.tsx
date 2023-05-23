import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"
import App from './App'

import { BuildPage } from './routes/BuildPage'
import { MainPage } from "./routes/MainPage"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <MainPage /> },
            { path: "/build", element: <BuildPage /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
