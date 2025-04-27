import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TanstackRouterInfo from './components/TanstackRouterInfo.tsx'
import ProtectedRoutesInfo from './components/ProtectedRoutesInfo.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)