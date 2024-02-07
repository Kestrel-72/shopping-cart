import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './components/Router'
import Item from './components/catalog/Item'
import ore from '/src/assets/oreDB.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Item item={ore.items[0]}/>
  </React.StrictMode>,
)
