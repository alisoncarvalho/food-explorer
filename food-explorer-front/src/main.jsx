import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider} from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import { AuthProvider } from './hooks/auth.jsx'



//rotas
import { Routes } from './routes/index.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  
)

