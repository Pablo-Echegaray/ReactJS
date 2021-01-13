import React from "react";
import { connect } from "react-redux";
//destructuring inline
const Header = ({ links }) => (
  <header>
    <h1>Titulo</h1>
    <nav>
      {links.map((link, i) => (
        <a key={i} href={`/${link}`}>
          {link}
        </a>
      ))}
    </nav>
  </header>
); /* let mapStateToProps = (store) => {
  let {links} = store
  return {
    links: links,
  };
}; */ /* let mapStateToProps = ({ links }) => {
  return {
    links,
  };
};
 */ //de esta manera Header estaria recibiendo links, y ya no habria necesidad de pasarle props desde App //conectamos el componente al store
//analoga al getState() de redux
/* let mapStateToProps = (store) => {
  return {
    //el nombre de prop, el valor del store
    links: store.links,
  };
}; */

/* let mapStateToProps = ({links}) => ({ links }); */

/* export default connect(mapStateToProps)(Header);  */ export default connect(
  ({ links }) => ({ links })
)(Header);
