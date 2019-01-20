import React, { Component } from "react";
import logo from "../excelLogo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="banner navbar navbar-default navbar-fixed-top role='banner'">
        <div>
          <a href="http://localhost:3000">
            <img src={logo} className="App-logo" alt="ExcelLassonde" />
          </a>
        </div>
        <nav className="nav-bar navbar justify-content-end">
          <ul className="nav">
            <li className="nav-item nav-item-link nav-link">
              <Link to="/Tutors">Our Tutors</Link>{" "}
            </li>
            <li className="nav-item nav-item-link">
              <a className="nav-link">
                <Link to="/About">Our Team</Link>{" "}
              </a>
            </li>
          </ul>
          <ul className="nav right-nav m-3">
            <li className="nav-item nav-item-link">
              <Link to="/TutorLogin">
                <button className="btn m-2"> Tutor</button>
              </Link>{" "}
            </li>
            <li className="nav-item nav-item-link">
              <Link to="/StudentLogin">
                <button className="btn m-2">Student</button>
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
