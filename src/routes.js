import React from "react";
import { Route, Routes } from "react-router-dom";

import Anuncios from "./components/Anuncios";
import CriarAnuncio from "./components/CriarAnuncio";
import App from "./App";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/anuncios" element={<Anuncios />} />
      <Route path="/criar-anuncio" element={<CriarAnuncio />} />
    </Routes>
  );
};

export default Router;
