import React from "react";
import ReactDOM from "react-dom";
import "./css/estilo.css";
import "./css/palette.css";
import Header from "./components/Header";
import Conteudo from "./components/Conteudo";
import Footer from "./components/Footer";
import ModalCadastro from "./components/ModalCadastro";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Conteudo />
    <Footer />
    <ModalCadastro />
  </React.StrictMode>,
  document.getElementById("root")
);
