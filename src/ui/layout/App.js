import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Usuarios from "../componentes/Usuarios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        nombre: "",
        apellido: "",
      },
      usuarios: [],
    };
  }

  borrarUsuario = (i, e) => {
    console.log(i);
    let start = this.state.usuarios.slice(0, i);
    let end = this.state.usuarios.slice(i + 1);
    let nuevos_usuarios = [...start, ...end];
    this.setState({
      usuarios: nuevos_usuarios,
    });
  };

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

  render() {
    let { form, usuarios } = this.state;
    return (
      <>
        <Header />
        <Main />
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
