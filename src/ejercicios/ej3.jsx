import { useState } from "react";

export default function Ej3() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h3>Ejercicio 3</h3>
      <input type="number" value={num} onChange={e => setNum(Number(e.target.value))} />
      <p>{num * 2}</p>
    </div>
  );
}
