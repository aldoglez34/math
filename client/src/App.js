import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import GuestNavigation from "./navigation/GuestNavigation";
import StudentNavigation from "./navigation/StudentNavigation";

const App = () => {
  const [navigation, setNavigation] = useState("Guest");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((fbUser) => {
      console.log("fbUser", fbUser);

      if (fbUser) {
        setNavigation("Student");
      }
    });
  }, []);

  return navigation === "Guest" ? (
    <GuestNavigation />
  ) : navigation === "Student" ? (
    <StudentNavigation />
  ) : null;
};

export default App;
