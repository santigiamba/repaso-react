function Saludo({ nombre }) {
    return <p>Hola, {nombre}</p>;
  }
  
  export default function Ej8() {
    return (
      <div>
        <h3>Ejercicio 8</h3>
        <Saludo nombre="Giamba" />
        <Saludo nombre="Tomi" />
        <Saludo nombre="Juli" />
      </div>
    );
  }
  