import React from "react";
import { connect } from "react-redux";
import {
  aumentarContador,
  restarContador,
  resetearContador,
} from "../../api/actions/Contador";
import { bindActionCreators } from "redux";

const Main = ({
  contador,
  aumentarContador,
  restarContador,
  resetearContador,
}) => {
  return (
    <main>
      <h2>Home</h2>
      <p>El contador va: {contador}</p>
      <button onClick={aumentarContador}>+</button>
      <button onClick={resetearContador}>resetear</button>
      <button onClick={restarContador}>-</button>
    </main>
  );
};

let mapStateToProps = (store) => {
  return {
    contador: store.Contador.contador,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    aumentarContador: bindActionCreators(aumentarContador, dispatch),
    restarContador: bindActionCreators(restarContador, dispatch),
    resetearContador: bindActionCreators(resetearContador, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
