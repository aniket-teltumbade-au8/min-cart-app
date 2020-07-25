import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavMenu extends Component {
  render() {
    return (
      <div className="nav-items">
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}
export default NavMenu;
