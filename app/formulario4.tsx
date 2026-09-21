"use client";
import { useEffect, useState } from "react";

export default function input() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    console.log(`Nome: ${nome} e senha: ${senha}`);
  }, [nome, senha]);

  function ValidacaoSenha() {
    if (senha == confirmarSenha) {
      setMensagem("Formulário enviado com sucesso");
      setNome("");
      setSenha("");
      setConfirmarSenha("");
    } else {
      setMensagem("As senhas são diferentes");
      setSenha("");
      setConfirmarSenha("");
    }
  }

  return (
    <form
      onSubmit={ValidacaoSenha}
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
        placeholder="Digite seu nome"
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
        placeholder="Digite a senha"
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

      <button type="submit">Enviar</button>
    </form>
  );
}
