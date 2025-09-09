import { useState } from "react";

export default function Ej5() {
  const [texto, setTexto] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(texto);
  };

  return (
    <div>
      <h3>Ejercicio 5</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={texto} onChange={e => setTexto(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
