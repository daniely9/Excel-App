import React, { Component } from "react";
import "../App.css";
import Header from "./NavigationBar";

class About extends Component {
  render() {
    return (
      <div className="login-page">
        <div>
          <Header />
        </div>
        <br />
        <br />
        <div class="aboutUs">
          <h2 id="aboutUsTitle"> About Us </h2>
          <p id="aboutUsDesc">
            {" "}
            Excel Lassonde is a student-run academic support group that offers
            free tutoring!
            <br />
            We offer tutoring in the form of one-on-one or group sessions in
            Lassonde-affiliated courses. <br />
            Courses mainly include EECS, MATH, PHYS, CHEM and occasionally CIVL,
            ESSE and MECH.{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default About;
