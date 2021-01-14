let init = {
  links: ["usuarios", "contacto", "nosotros"],
  contador: 0,
}; //esta variable seria como el this.state = { }

let reducer = (prevState = init, action) => {
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
}; //cada case seria como un setState({})

export default reducer;
