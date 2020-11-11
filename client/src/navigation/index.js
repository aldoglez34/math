import React from "react";
import GuestNavigation from "./GuestNavigation";
import StudentNavigation from "./StudentNavigation";
import { AuthUserContext } from "../session";
import TeacherNavigation from "./TeacherNavigation";

const Navigation = React.memo(() => (
  <AuthUserContext.Consumer>
    {(navigation) => {
      return navigation === "Student" ? (
        <StudentNavigation />
      ) : navigation === "Teacher" ? (
        <TeacherNavigation />
      ) : (
        <GuestNavigation />
      );
    }}
  </AuthUserContext.Consumer>
));

export default Navigation;
