// gatsby-ssr.js
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import "./src/styles/reset.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
