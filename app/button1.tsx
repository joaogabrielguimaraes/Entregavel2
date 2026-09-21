"use client";
import { useState } from "react";

export default function Button() {
  const [ligado, SetLigado] = useState(false);

  function Ligar() {
    SetLigado(!ligado);
  }

  return (
    <button
      onClick={Ligar}
      style={{ backgroundColor: ligado ? "green" : "red" }}
    >
      {ligado ? "ON" : "OFF"}
    </button>
  );
}
