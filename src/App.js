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
    //con este metodo vamos agarrando los valores actuales de form:{} que se van guardando con el onChange, y los usaremos para crear un objeto nuevo en usuarios[] y despues resetear a string vacio las propiedades de form{} porque de lo contrario los inputs permaneceran con la vieja informacion
    //e.preventDefault() //aqui iria si no usaramos handleSubmit directamente el en componente Usuarios.
    this.setState({
      //...mantene usuarios como esta si hubiera algo dentro, y agreagale un objeto que se vea como form{nombre,apellido}
      // Manera alternativa "mas entendible".->en info.txt
      usuarios: [...this.state.usuarios, this.state.form],
      form: {
        nombre: "",
        apellido: "",
      }, //reseteo los valores del form
    });
  };

  manejarCambioNombre = (e) => {
    //cada vez que escriban en el input correspondiente se ejecutara esta funcion
    let nombre = e.target.value;
    //this.setState({ form: { nombre: nombre } }); //le estariamos diciendo que form este contenida por solo la propiedad nombre y su valor, por lo que apellido se borraria. Es incorrecto.
    this.setState({
      form: {
        ...this.state.form,
        nombre: nombre,
      },
    }); //con el ... le decimos que mantenga todas las propiedades internas de form, y eventualmente nos pise solo nombre.
  };

  manejarCambioApellido = (e) => {
    let apellido = e.target.value;
    this.setState({
      form: {
        ...this.state.form,
        apellido: apellido,
      },
    });
  };

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
          manejarCambioNombre={this.manejarCambioNombre}
          manejarCambioApellido={this.manejarCambioApellido}
          borrarUsuario={this.borrarUsuario}
        />
        <Footer />
      </>
    );
  }
}

export default App;
