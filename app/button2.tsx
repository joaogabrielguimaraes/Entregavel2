import { useState } from "react";

type BtnProps = {
  ligado: boolean;
  onClick: () => void;
};

export default function Button2({ ligado, onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: ligado ? "green" : "red" }}
    >
      {ligado ? "ON" : "OFF"}
    </button>
  );
}
