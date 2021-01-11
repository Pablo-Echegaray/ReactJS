import React from "react";

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
  } //hacer esto es una cuestion mas logica ya que Usuarios se encargaria de aquellos eventos que le competen, sino estariamos pasando el objeto evento y el preventDefault a traves de varias capas. Es mejor que cada componente se encargue de hacer lo que realmente deberia. Sino el obj evento y el preventDefault deberiamos ponerlo en el metodo manejarElSubmit() del componente "raiz" App.
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {/*onChange para ir controlando el cambio de contenido de cada input*/}
          <input
            onChange={manejarCambioNombre}
            type="text"
            placeholder="Nombre"
            value={nombre}
          />
        </div>
        <div>
          <input
            onChange={manejarCambioApellido}
            type="text"
            placeholder="Apellido"
            value={apellido}
          />
        </div>
        <button>Guardar</button>
      </form>
      <ul>
        {usuarios.length ? (
          usuarios.map((usuario, i) => (
            <li key={i}>
              {usuario.nombre} {usuario.apellido}
              <button>Editar</button>
              <button onClick={borrarUsuario.bind(null, i)}>Borrar</button>
            </li>
          ))
        ) : (
          <li>No hay Usuarios</li>
        )}
      </ul>
    </>
  );
};

export default Usuarios;
