import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";
const Formulario = ({ agregarNuevoGasto }) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  //cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === "") {
      setError(true);
      return;
    }
    //construir el gasto
    const gasto = {
      nombreGasto,
      cantidad,
      id: shortid.generate(),
    };

    //pasar gasto a componente principal
    agregarNuevoGasto(gasto);
    //resetear el form
    setNombreGasto("");
    setCantidad(0);
  };
  return (
    <form onSubmit={(e) => agregarGasto(e)}>
      <h2>Agrega tus gastos</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div>
        <label>Nombre del gasto</label>
        <input
          type={"text"}
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombreGasto}
          onChange={(e) => setNombreGasto(e.target.value)}
        />
      </div>
      <div>
        <label>Cantidad gasto</label>
        <input
          type={"number"}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          className="u-full-width"
          value={cantidad}
          placeholder="Ej. 300"
        />
      </div>
      <input
        type={"submit"}
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};
Formulario.propTypes = {
  agregarNuevoGasto: PropTypes.func.isRequired,
};
export default Formulario;
