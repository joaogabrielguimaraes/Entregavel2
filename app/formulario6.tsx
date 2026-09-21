"use client";

import { useState } from "react";

export default function Formulario6() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  let mensagem = "";

  if (senha !== "" && confirmarSenha !== "") {
    if (senha === confirmarSenha) {
      mensagem = "As senhas são iguais";
    } else {
      mensagem = "As senhas são diferentes";
    }
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ color: "red" }}>{mensagem}</h2>

      <input
        style={{
          border: "1px solid black",
          background: "#f3f4f6",
          padding: "8px",
          width: "320px",
          color: "black",
        }}
        placeholder="Informe seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        style={{
          border: "1px solid black",
          background: "#f3f4f6",
          padding: "8px",
          width: "320px",
          color: "black",
        }}
        placeholder="Informe a senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <input
        style={{
          border: "1px solid black",
          background: "#f3f4f6",
          padding: "8px",
          width: "320px",
          color: "black",
        }}
        placeholder="Confirme a senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />
    </form>
  );
}