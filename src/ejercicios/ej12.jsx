import { useState } from "react";

function Tarea({ tarea, onEliminar, onCompletar }) {
  return (
    <div>
      <p style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.titulo}
      </p>
      {!tarea.completada && <button onClick={() => onCompletar(tarea.id)}>Completar</button>}
      <button onClick={() => onEliminar(tarea.id)}>Eliminar</button>
    </div>
  );
}

export default function Ej12() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  const agregarTarea = () => {
    if (titulo.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), titulo, completada: false }]);
    setTitulo("");
  };

  const eliminarTarea = id => setTareas(tareas.filter(t => t.id !== id));

  const completarTarea = id => setTareas(
    tareas.map(t => t.id === id ? { ...t, completada: true } : t)
  );

  const completadas = tareas.filter(t => t.completada);
  const pendientes = tareas.filter(t => !t.completada);

  const total = tareas.length;
  const totalCompletadas = tareas.reduce((acc, t) => acc + (t.completada ? 1 : 0), 0);

  return (
    <div>
      <h3>Ejercicio 12</h3>
      <input value={titulo} onChange={e => setTitulo(e.target.value)} />
      <button onClick={agregarTarea}>Agregar</button>

      <h4>Pendientes</h4>
      {pendientes.map(t => (
        <Tarea key={t.id} tarea={t} onEliminar={eliminarTarea} onCompletar={completarTarea} />
      ))}

      <h4>Completadas</h4>
      {completadas.map(t => (
        <Tarea key={t.id} tarea={t} onEliminar={eliminarTarea} />
      ))}

      <p>Total: {total} | Completadas: {totalCompletadas}</p>
    </div>
  );
}
