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
      form: {
        nombre: "",
        apellido: "",
      },
      usuarios: [],
    };
    this.aumentarContador = this.aumentarContador.bind(this);
  }

  borrarUsuario = (i, e) => {
    console.log(i);
    let start = this.state.usuarios.slice(0, i); //incluye 0, excluye i
    let end = this.state.usuarios.slice(i + 1); //saltea el elemento ubicado en i y va hasta el final
    let nuevos_usuarios = [...start, ...end];
    this.setState({
      usuarios: nuevos_usuarios,
    });
  };
  //02 : 20: 00
  manejarElSubmit = () => {
    this.setState({
      usuarios: [...this.state.usuarios, this.state.form],
      form: {
        nombre: "",
        apellido: "",
      },
    });
  };

  manejarCambioForm = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.dataset.target]: e.target.value,
      },
    });
  };

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
    let { contador, links, form, usuarios } = this.state;
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
          nombre={form.nombre}
          apellido={form.apellido}
          usuarios={usuarios}
          manejarElSubmit={this.manejarElSubmit}
          manejarCambioForm={this.manejarCambioForm}
          borrarUsuario={this.borrarUsuario}
        />
        <Footer />
      </>
    );
  }
}

export default App;
