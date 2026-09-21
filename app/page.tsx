"use client";

import { useState } from "react";
import Button from "./button1";
import Button2 from "./button2";
import Form3 from "./form3";
import Formulario4 from "./formulario4";
import Formulario5 from "./formulario5";
import Formulario6 from "./formulario6";
import TextoInvertido7 from "./textoInvertido7";
import FormRadioButton8 from "./formRadioButton8_2";
import Interface9 from "./interface9";
import Tag10 from "./tag10_1";

export default function Home() {
  const [ligado, SetLigado] = useState(false);
  const [selected, setSelected] = useState(false);

  function Ligar() {
    SetLigado(!ligado);
  }

  function Select() {
    setSelected(!selected);
  }

  return (
    <div>
      {/* <div
        style={{
          border: "5px solid white",
          width: 100,
          height: 100,
          background: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button />
        <Button2 ligado={ligado} onClick={Ligar} />
      </div> */}
      {/* <div>
        <Form3 />
      </div> */}
      {/* <div>
        <Formulario4 />
        <Formulario5 /> 
        <Formulario6 />
      </div> */}
      {/* <div>
        <TextoInvertido7 />
      </div> */}
      {/* <div>
        <FormRadioButton8 />
      </div> */}
      {/* <div>
        <Interface9 />
      </div> */}
      {/* <div>
        <Tag10 />
      </div> */}
    </div>
  );
}
