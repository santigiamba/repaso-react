export default function Ej7() {
    const productos = [
      { item: "Manzana", precio: 100 },
      { item: "Banana", precio: 50 },
      { item: "Naranja", precio: 80 }
    ];
  
    return (
      <div>
        <h3>Ejercicio 7</h3>
        {productos.map((p, i) => <p key={i}>{p.item}: ${p.precio}</p>)}
      </div>
    );
  }
  