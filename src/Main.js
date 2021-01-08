import React from "react";

//destructuring directamente en lugar de recibir la variable props. Podria sacar las llaves y el return nuevamente.
const Main = ({
  contador,
  aumentarContador,
  resetearContador,
  restarContador,
}) => {
  /*  //destructuring 
let {contador, aumentarContador, resetearContador, restarContador} = props */

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

export default Main;
