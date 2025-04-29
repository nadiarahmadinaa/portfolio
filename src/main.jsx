import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './App.css'
import './components/Header.css'
import './components/Hero.css'
import './components/About.css'
import './components/Experience.css'
import './components/Projects.css'
import './components/Skills.css'
import './components/Contact.css'
import './components/Footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)