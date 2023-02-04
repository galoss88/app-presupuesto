import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";
const ListaGastos = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado Gastos</h2>
      {gastos.map((g) => (
        <Gasto key={g.id} gasto={g} />
      ))}
    </div>
  );
};
ListaGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
};
export default ListaGastos;
