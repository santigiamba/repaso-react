import { useState } from "react";

export default function MostrarTexto() {
  const [texto, setTexto] = useState("");
  const [mostrar, setMostrar] = useState("");

  return (
    <div>
        <h3>Ejercicio 2</h3>
      <input type="text" value={texto} onChange={e => setTexto(e.target.value)} />
      <button onClick={() => setMostrar(texto)}>Mostrar</button>
      <p>{mostrar}</p>
    </div>
  );
}
