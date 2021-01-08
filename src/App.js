import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Usuarios from "./Usuarios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      links: ["usuarios", "contacto", "nosotros"],
      nombre: "",
      apellido: "",
      usuarios: [],
    };
    this.aumentarContador = this.aumentarContador.bind(this);
  }

  manejarElSubmit = () => {};

  manejarCambioNombre = () => {};

  manejarCambioApellido = () => {};

  //aumentarContador = ()=>{con funcion lambda no necesito bindear el this}
  aumentarContador() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restarContador = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  resetearContador = () => {
    this.setState({
      contador: 0,
    });
  };

  render() {
    //destructuring
    let { contador, links, nombre, apellido, usuarios } = this.state;
    return (
      <>
        <Header links={links} />
        <Main
          contador={contador}
          aumentarContador={this.aumentarContador}
          restarContador={this.restarContador}
          resetearContador={this.resetearContador}
        />
        <Usuarios
          nombre={nombre}
          apellido={apellido}
          usuarios={usuarios}
          manejarElSubmit={this.manejarElSubmit}
          manejarCambioNombre={this.manejarCambioNombre}
          manejarApellido={this.manejarCambioApellido}
        />
        <Footer />
      </>
    );
  }
}

export default App;
