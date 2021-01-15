let init = {
  contador: 0,
};

let ContadorReducer = (prevState = init, action) => {
  switch (action.type) {
    case "CONTADOR_SUMAR":
      return {
        ...prevState,
        contador: prevState.contador + 1,
      };
    case "CONTADOR_RESTAR":
      return {
        ...prevState,
        contador: prevState.contador - 1,
      };
    case "CONTADOR_RESETEAR":
      return {
        ...prevState,
        contador: 0,
      };
    default:
      return prevState;
  }
};

export default ContadorReducer;
