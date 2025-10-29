import React, { Component } from "react";

class Header extends Component {
  render() {
    const { title, hLink, aLink, ctLink } = this.props;

    return (
      <header>
        <h1>{title}</h1>
        <nav>
          <a href={hLink}>Home</a>{" | "}
          <a href={aLink}>About</a>{" | "}
          <a href={ctLink}>Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;


