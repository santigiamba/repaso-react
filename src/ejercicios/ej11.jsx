import { useState } from "react";

export default function Ej11() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3>Ejercicio 11</h3>
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
    </div>
  );
}
