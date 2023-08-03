import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <section className={'pokemon-selection'}>
        <App/>
        <App/>
      </section>
      <section className={'battleground'}>
        <button>Start battle</button>
      </section>
    </main>  
  </React.StrictMode>,
)
