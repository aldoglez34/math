import React from "react";
import GuestNavigation from "./GuestNavigation";
import StudentNavigation from "./StudentNavigation";
import { AuthUserContext } from "../session";

const Navigation = React.memo(() => (
  <AuthUserContext.Consumer>
    {(navigation) =>
      navigation === "Guest" ? (
        <GuestNavigation />
      ) : navigation === "Student" ? (
        <StudentNavigation />
      ) : null
    }
  </AuthUserContext.Consumer>
));

export default Navigation;
