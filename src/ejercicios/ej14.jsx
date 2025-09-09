// ej14.jsx
import { useState, useEffect } from "react";

function Ej14() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar los datos");
        return res.json();
      })
      .then(data => setUsuarios(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const usuariosFiltrados = usuarios.filter(
    u => u.name.toLowerCase().includes(filtro.toLowerCase()) || u.email.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Usuarios</h1>
      <input placeholder="Filtrar por nombre o email" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      {usuariosFiltrados.map(u => (
        <div key={u.id}>
          {u.name} - {u.email}
        </div>
      ))}
    </div>
  );
}

export default Ej14;
