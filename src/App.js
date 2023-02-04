import { useEffect, useState } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import ListaGastos from "./components/ListaGastos";
import Pregunta from "./components/Pregunta";

function App() {
  //state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  //actualizar restante
  useEffect(() => {
    let totalGastos = gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    let descuentoTotal = presupuesto - totalGastos;
    if (gastos) {
      setRestante(descuentoTotal);
    }
  }, [gastos, presupuesto]);
  //cuando agreguemos nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setMostrarPregunta={setMostrarPregunta}
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>
              <div className="one-half column">
                <ListaGastos gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                ></ControlPresupuesto>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
