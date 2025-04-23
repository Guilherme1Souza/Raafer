import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sobre from './pages/sobre'
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
    <Sobre />
    </ThemeProvider>
  </StrictMode>,
)
