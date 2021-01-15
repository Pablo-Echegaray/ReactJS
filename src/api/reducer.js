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
    case "SUBMIT_MANEJAR":
      return {
        ...prevState,
        usuarios: [...prevState.usuarios, prevState.form],
        form: {
          nombre: "",
          apellido: "",
        },
      };
    case "FORM_MANEJAR":
      return {
        ...prevState, //con esta linea le decimos que conserve el state (init) tal cual esta links: ["usuarios", "contacto", "nosotros"], contador: 0, form: { nombre: "", apellido: "",},usuarios: [],
        form: {
          ...prevState.form, //con esta linea nos referimos a la conservacion exclusivamente de form { } apellido: prevState.form.apellido, nombre: prevState.form.nombre
          [action.e.target.dataset.target]: action.e.target.value, //aqui cambiamos las propiedades nombre y apellido de forma dinamica
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
