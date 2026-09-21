"use client";

import { withRouter } from "next/router";
import RadioButton from "./radioButton8_1";
import { useState } from "react";

export default function FormularioEnviar() {
  const [radio, setRadio] = useState("");
  const [mensagem, setMensagem] = useState("Nada");

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "20vw",
        height: "20vh",
        border: "5px solid white",
      }}
    >
      <p>Selecione uma opção:</p>
      <RadioButton
        name="linguagem"
        value="opcao1"
        label="Python"
        checked={radio === "opcao1"}
        onChange={() => {
          setRadio("opcao1");
          setMensagem("Python selecionado");
        }}
      />
      <RadioButton
        name="linguagem"
        value="opcao2"
        label="JavaScript"
        checked={radio === "opcao2"}
        onChange={() => {
          setRadio("opcao2");
          setMensagem("JavaScript selecionado");
        }}
      />
      <RadioButton
        name="linguagem"
        value="opcao3"
        label="Java"
        checked={radio === "opcao3"}
        onChange={() => {
          setRadio("opcao3");
          setMensagem("Java selecionado");
        }}
      />
      <p>decisao: {mensagem}</p>
    </div>
  );
}
