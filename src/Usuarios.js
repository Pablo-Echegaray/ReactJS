import React from "react";
import ListadoUsuarios from "./ListaUsuarios";

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
  } //hacer esto es una cuestion mas logica ya que Usuarios se encargaria de aquellos eventos que le competen, sino estariamos pasando el objeto evento y el preventDefault a traves de varias capas. Es mejor que cada componente se encargue de hacer lo que realmente deberia. Sino el obj evento y el preventDefault deberiamos ponerlo en el metodo manejarElSubmit() del componente "raiz" App.
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {/*onChange para ir controlando el cambio de contenido de cada input*/}
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

export default Usuarios;
