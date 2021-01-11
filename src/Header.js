import React from "react";
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
);

export default Header;
