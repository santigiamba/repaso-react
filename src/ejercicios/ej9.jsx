import { useState } from "react";

export default function Ej9() {
  const [frutas] = useState(["Manzana", "Banana", "Naranja", "Pera", "Kiwi"]);
  const [filtro, setFiltro] = useState("");

  const filtradas = frutas.filter(f => f.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div>
      <h3>Ejercicio 9</h3>
      <input type="text" value={filtro} onChange={e => setFiltro(e.target.value)} />
      {filtradas.map((f, i) => <p key={i}>{f}</p>)}
    </div>
  );
}
