export let aumentarContador = () => {
  return { type: "CONTADOR_SUMAR" };
};

export let restarContador = () => {
  return { type: "CONTADOR_RESTAR" };
};

export let resetearContador = () => {
  return { type: "CONTADOR_RESETEAR" };
};

export let manejarElSubmit = () => {
  return { type: "SUBMIT_MANEJAR" };
};

export let manejarCambioNombre = (e) => {
  let nombre = e.target.value;
  return { type: "NOMBRE_CAMBIAR", nombre };
};

export let manejarCambioApellido = (e) => {
  let apellido = e.target.value;
  return { type: "APELLIDO_CAMBIAR", apellido };
};
