import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavMenu extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    );
  }
}
export default NavMenu;
