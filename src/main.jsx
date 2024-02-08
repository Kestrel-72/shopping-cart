import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './components/Router'
import Item from './components/catalog/Item'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
)
