import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from './global-styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='single-player' element={<App numPlayers={1} />} />
        <Route path='multi-player' element={<App numPlayers={2} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
