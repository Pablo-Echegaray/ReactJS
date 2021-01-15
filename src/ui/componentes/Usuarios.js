import React from "react";
import ListadoUsuarios from "./ListaUsuarios";
import { connect } from "react-redux";
import { manejarElSubmit, manejarCambioForm } from "../../api/actions/Usuarios";
import { bindActionCreators } from "redux";

const Usuarios = ({
  nombre,
  apellido,
  usuarios,
  manejarElSubmit,
  manejarCambioForm,
  borrarUsuario,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    manejarElSubmit();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={manejarCambioForm}
            type="text"
            placeholder="Nombre"
            value={nombre}
            data-target="nombre"
          />
        </div>
        <div>
          <input
            onChange={manejarCambioForm}
            type="text"
            placeholder="Apellido"
            value={apellido}
            data-target="apellido"
          />
        </div>
        <button>Guardar</button>
      </form>
      <ListadoUsuarios usuarios={usuarios} borrarUsuario={borrarUsuario} />
    </>
  );
};

export default connect(
  ({ Usuarios }) => ({
    nombre: Usuarios.form.nombre,
    apellido: Usuarios.form.apellido,
  }),
  (dispatch) => ({
    manejarCambioForm: bindActionCreators(manejarCambioForm, dispatch),
    manejarElSubmit: bindActionCreators(manejarElSubmit, dispatch),
  })
)(Usuarios);
