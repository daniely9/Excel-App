import React from "react";

//Stateless funtional component
const NavBar = ({ totalCounters }) => {
  return (
    <navbar className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="./index.js">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        <nav-link> About us </nav-link>
      </a>
    </navbar>
  );
};

export default NavBar;
