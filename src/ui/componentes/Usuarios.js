import React from "react";
import ListadoUsuarios from "./ListaUsuarios";
import { connect } from "react-redux";
import {
  manejarElSubmit,
  manejarCambioNombre,
  manejarCambioApellido,
} from "../../api/actions";
import { bindActionCreators } from "redux";

const Usuarios = ({
  nombre,
  apellido,
  usuarios,
  manejarElSubmit,
  manejarCambioNombre,
  manejarCambioApellido,
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
            onChange={manejarCambioNombre}
            type="text"
            placeholder="Nombre"
            value={nombre}
            data-target="nombre"
          />
        </div>
        <div>
          <input
            onChange={manejarCambioApellido}
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
  ({ form }) => ({
    nombre: form.nombre,
    apellido: form.apellido,
  }),
  (dispatch) => ({
    manejarCambioNombre: bindActionCreators(manejarCambioNombre, dispatch),
    manejarCambioApellido: bindActionCreators(manejarCambioApellido, dispatch),
    manejarElSubmit: bindActionCreators(manejarElSubmit, dispatch),
  })
)(Usuarios);
