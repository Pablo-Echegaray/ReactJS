import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Titulo</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contacto</a>
          <a href="#">Seccion</a>
        </nav>
      </header>
    );
  }
}

export default Header;
