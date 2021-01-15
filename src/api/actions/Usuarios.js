export let manejarElSubmit = () => {
  return { type: "SUBMIT_MANEJAR" };
};

export let manejarCambioForm = (e) => {
  return { type: "FORM_MANEJAR", e };
};

export let borrarUsuario = (i) => {
  return { type: "USUARIO_BORRAR", i };
};
