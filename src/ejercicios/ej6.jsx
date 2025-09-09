export default function Ej6() {
    const nombres = ["yamba", "Avalo", "Lucas", "Jur"];
  
    return (
      <div>
        <h3>Ejercicio 6</h3>
        {nombres.map((nombre, i) => <p key={i}>{nombre}</p>)}
      </div>
    );
  }
  