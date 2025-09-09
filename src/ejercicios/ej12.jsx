import { useState } from "react";

function Ej12() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  const handleChange = (e) => setTitulo(e.target.value);

  const agregarTarea = (e) => {
    e.preventDefault();
    setTareas([
      ...tareas,
      { id: Date.now(), titulo: titulo, completada: false }
    ]);
    setTitulo("");
  };

  const eliminarTarea = (id) => setTareas(tareas.filter(t => t.id !== id));

  const marcarCompletada = (id) => {
    setTareas(
      tareas.map(t => t.id === id ? { ...t, completada: true } : t)
    );
  };

  const pendientes = tareas.filter(t => !t.completada);
  const completadas = tareas.filter(t => t.completada);

  const total = tareas.length;
  const totalCompletadas = tareas.reduce((acc, t) => t.completada ? acc + 1 : acc, 0);

  const Tarea = ({ tarea, eliminar, marcarCompletada }) => (
    <div>
      <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.titulo}
      </span>
      <button onClick={() => eliminar(tarea.id)}>Eliminar</button>
      {!tarea.completada && <button onClick={() => marcarCompletada(tarea.id)}>Completar</button>}
    </div>
  );

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={agregarTarea}>
        <input value={titulo} onChange={handleChange} placeholder="Título de la tarea" required />
        <button type="submit">Agregar</button>
      </form>

      <h2>Pendientes</h2>
      {pendientes.map(t => <Tarea key={t.id} tarea={t} eliminar={eliminarTarea} marcarCompletada={marcarCompletada} />)}

      <h2>Completadas</h2>
      {completadas.map(t => <Tarea key={t.id} tarea={t} eliminar={eliminarTarea} marcarCompletada={null} />)}

      <p>Total: {total} | Completadas: {totalCompletadas}</p>
    </div>
  );
}

export default Ej12;