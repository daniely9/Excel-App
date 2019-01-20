import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components-p/Home";
import About from "./components-p/About";
import Tutors from "./components-p/Tutors";
import TutorLogin from "./components-p/TutorLogin";
import TutorSignup from "./components-p/TutorSignup";
import StudentLogin from "./components-p/StudentLogin";
import DisplayCourses from "./components-p/DisplayCoursesPage";
import TutorHomePage from "./components-p/TutorHomePage";
import DisplayCoursesPage from "./components-p/DisplayCoursesPage";
import DisplayAvailabilitiesPage from "./components-p/DisplayAvailabilitiesPage";
import ConfirmTutoringDetails from "./components-p/ConfirmTutoringDetails";

export default props => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/About" exact component={About} />
    <Route path="/Tutors" exact component={Tutors} />
    <Route path="/TutorLogin" exact component={TutorLogin} />
    <Route path="/TutorSignup" exact component={TutorSignup} />
    <Route path="/StudentLogin" exact component={StudentLogin} />
    <Route path="/StudentDisplayCourses" exact component={DisplayCourses} />
    <Route path="/TutorHomePage" exact component={TutorHomePage} />
    <Route
      path="/DisplayCoursesPage"
      exact
      component={() => (
        <DisplayCoursesPage
          courses={props.courses}
          tutorsInformation={props.tutors}
        />
      )}
    />
    <Route
      path="./DisplayAvailabilitiesPage"
      exact
      component={DisplayAvailabilitiesPage}
    />
    <Route
      path="./ConfirmTutoringDetails"
      exact
      component={ConfirmTutoringDetails}
    />
  </Switch>
);
