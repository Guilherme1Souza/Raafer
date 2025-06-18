import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export const onClientEntry = () => {
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    // aqui pode colocar lógica que só roda no client quando for a home
  }
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
