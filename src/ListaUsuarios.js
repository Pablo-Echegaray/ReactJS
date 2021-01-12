import React from "react";

const ListadoUsuarios = ({ usuarios, borrarUsuario }) => (
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
);

export default ListadoUsuarios;
