import React from "react";
import { connect } from "react-redux";

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
export default connect(({ App }) => ({ links: App.links }))(Header);
