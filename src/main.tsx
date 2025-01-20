import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import App from './App.tsx'

// Cria a raiz da aplicação e renderiza o componente App dentro de um StrictMode e BrowserRouter
createRoot(document.getElementById("root")!).render(
  //navegação entre páginas
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
