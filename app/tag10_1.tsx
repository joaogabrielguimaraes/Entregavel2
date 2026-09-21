"use client";

import { useState } from "react";
import TabButton10 from "./tabButton10_2";

export default function Tag10() {
  const [escolha, setEscolha] = useState("opcao1");
  const [mensagem, setMensagem] = useState("#1");

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "400px",
        border: "1px solid #333333",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          backgroundColor: "#333333",
          padding: "8px",
          flexDirection: "row",
        }}
      >
        <TabButton10
          name="Tab 1"
          OnChanged={() => {
            setEscolha("opcao1");
            setMensagem("#1");
          }}
          selected={escolha === "opcao1"}
        />
        <TabButton10
          name="Tab 2"
          OnChanged={() => {
            setEscolha("opcao2");
            setMensagem("#2");
          }}
          selected={escolha === "opcao2"}
        />
        <TabButton10
          name="Tab 3"
          OnChanged={() => {
            setEscolha("opcao3");
            setMensagem("#3");
          }}
          selected={escolha === "opcao3"}
        />
      </div>
      <div
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "16px",
        }}
      >
        <p style={{ margin: "0 0 10px 0", color: "#ffffff" }}>
          Text content: {mensagem}
        </p>
        <p style={{ margin: 0, color: "#cccccc" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil
          officia ad a, voluptatum reiciendis corporis laboriosam recusandae
          nesciunt!
        </p>
      </div>
    </div>
  );
}
