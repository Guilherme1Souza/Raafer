import React from "react";
import "./src/styles/reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export const onClientEntry = () => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      window.location.replace('/sobre');
    }
  };

  export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  );
  