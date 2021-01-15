let init = {
  form: {
    nombre: "",
    apellido: "",
  },
  usuarios: [],
};

let UsuariosReducer = (prevState = init, action) => {
  switch (action.type) {
    case "USUARIO_BORRAR":
      let start = prevState.usuarios.slice(0, action.i);
      let end = prevState.usuarios.slice(action.i + 1);
      let nuevos_usuarios = [...start, ...end];
      return {
        ...prevState,
        usuarios: nuevos_usuarios,
      };
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
        ...prevState,
        form: {
          ...prevState.form,
          [action.e.target.dataset.target]: action.e.target.value,
        },
      };
    default:
      return prevState;
  }
};

export default UsuariosReducer;
