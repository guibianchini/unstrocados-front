import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins/400.css'; // Importa o peso normal da fonte
import '@fontsource/poppins/600.css'; // Importa o peso bold da fonte


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
