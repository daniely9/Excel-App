import React, { Component } from "react";
import "../App.css";
import Header from "./NavigationBar";

class Home extends Component {
  render() {
    return (
      <div className="Main-page">
        <Header />
        <div className="Main-page-text">
          <h1>Ready to book sessions? </h1>
          <h4>
            We are so glad that you are here. ExcelLassonde has been serving
            Lassonde students for over 5 years now and we want to continue to do
            more. If you would like to get any help with any of the courses we
            offer blah blah{" "}
          </h4>
        </div>
        <div className="contactUs">
          <h2 id="contactUsTitle"> Contact Us </h2>
          <ul id="contactUsOptions">
            <li>
              {" "}
              Facebook:{" "}
              <a href="https://www.facebook.com/excellassonde/">
                {" "}
                www.facebook.com{" "}
              </a>
            </li>
            <li> Email: excellassonde@gmail.com </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
