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

export let manejarCambioForm = (e) => {
  return { type: "FORM_MANEJAR", e };
};
