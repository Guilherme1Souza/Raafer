import React from "react";
import { Routes, Route } from "react-router-dom";
import { Sobre } from "../pages/sobre";
import { ErrorPage } from "../pages/404";
import { Nav } from "../components/nav"; 
import Home from "../pages/inicio";
import Contato from "../pages/contato";

export function AppRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/404" element={<ErrorPage />} /> 
      </Routes>
    </>
  );
}
