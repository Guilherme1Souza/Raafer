import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from "./routes/routes";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import theme from "./styles/theme";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
     <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
