// ej13.jsx
import { useState } from "react";

function Ej13() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ nombre: "", precio: "", categoria: "" });
  const categorias = ["Frutas", "Verduras", "Lácteos", "Carnes", "Bebidas"];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const agregarProducto = (e) => {
    e.preventDefault();
    setProductos([
      ...productos,
      { id: Date.now(), nombre: form.nombre, precio: parseFloat(form.precio), categoria: form.categoria, comprado: false }
    ]);
    setForm({ nombre: "", precio: "", categoria: "" });
  };

  const eliminarProducto = (id) => setProductos(productos.filter(p => p.id !== id));

  const marcarComprado = (id) => {
    setProductos(productos.map(p => p.id === id ? { ...p, comprado: true } : p));
  };

  const pendientes = productos.filter(p => !p.comprado);
  const comprados = productos.filter(p => p.comprado);

  const Item = ({ producto, eliminar, marcarComprado }) => (
    <div>
      {producto.nombre} - ${producto.precio} - {producto.categoria}
      <button onClick={() => eliminar(producto.id)}>Eliminar</button>
      {!producto.comprado && <button onClick={() => marcarComprado(producto.id)}>Comprar</button>}
    </div>
  );

  return (
    <div>
      <h1>Lista de Supermercado</h1>
      <form onSubmit={agregarProducto}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="precio" type="number" step="0.01" placeholder="Precio" value={form.precio} onChange={handleChange} required />
        <select name="categoria" value={form.categoria} onChange={handleChange} required>
          <option value="">Selecciona categoría</option>
          {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <button type="submit">Agregar</button>
      </form>

      <h2>Pendientes</h2>
      {pendientes.map(p => <Item key={p.id} producto={p} eliminar={eliminarProducto} marcarComprado={marcarComprado} />)}

      <h2>Comprados</h2>
      {comprados.map(p => <Item key={p.id} producto={p} eliminar={eliminarProducto} marcarComprado={null} />)}
    </div>
  );
}

export default Ej13;
