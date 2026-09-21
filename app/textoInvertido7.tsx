"use client";

import { useState } from "react";

export default function FormularioEnviar() {
  const [palavra, setPalavra] = useState("");

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20vw",
        height: "20vh",
        border: "5px solid white",
      }}
    >
      <form
        onSubmit={(evento) => {
          evento.preventDefault();

          setPalavra(palavra.split("").reverse().join(""));
        }}
      >
        <div>
          <input
            value={palavra}
            onChange={(evento) => setPalavra(evento.target.value)}
            placeholder="Digite para inverter!"
          />

          <br />

          <button
            type="submit"
            style={{
              backgroundColor: "red",
              width: "100%",
            }}
          >
            Inverter
          </button>
        </div>
      </form>
    </div>
  );
}
