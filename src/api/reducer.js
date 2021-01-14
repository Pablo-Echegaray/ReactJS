let init = {
  links: ["usuarios", "contacto", "nosotros"],
  contador: 0,
  form: {
    nombre: "",
    apellido: "",
  },
  usuarios: [],
};

let reducer = (prevState = init, action) => {
  switch (action.type) {
    case "APELLIDO_CAMBIAR":
      return {
        ...prevState,
        form: {
          ...prevState.form,
          apellido: action.apellido,
        },
      };
    case "NOMBRE_CAMBIAR":
      return {
        ...prevState,
        form: {
          ...prevState.form,
          nombre: action.nombre,
        },
      };

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

export default reducer;
