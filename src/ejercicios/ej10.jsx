import { useState } from "react";

export default function Ej10() {
  const [precios] = useState([100, 674, 53, 729]);
  const total = precios.reduce((acc, val) => acc + val, 0);

  return (
    <div>
      <h3>Ejercicio 10</h3>
      <p>Total: ${total}</p>
    </div>
  );
}
