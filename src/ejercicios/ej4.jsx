import { useState } from "react";

export default function Ej4() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <h3>Ejercicio 4</h3>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="white">Blanco</option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
        <option value="green">Verde</option>
        <option value="yellow">Amarillo</option>
      </select>
    </div>
  );
}
