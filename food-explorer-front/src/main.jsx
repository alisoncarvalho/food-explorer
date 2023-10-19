import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider} from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'


//rotas
import {SignUp} from './pages/SignUp/index.jsx'
import {SignIn} from './pages/SignIn/index.jsx'
import {Home} from './pages/Home/index.jsx'
import {Dish} from './Pages/Dish/index.jsx'
import { Footer } from './Components/Footer/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Footer/>
    </ThemeProvider>
  </React.StrictMode>,
)
