import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {CSSBaseline} from '@mui/icon/material'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CSSBaseline/>
    <App />
  </React.StrictMode>,
)
