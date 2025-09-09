import { useState } from "react";

export default function ej1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Ejercicio 1</h3>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}