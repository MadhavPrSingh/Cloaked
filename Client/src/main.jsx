import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Constants/Navbar/Navbar.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
