import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import GuestNavigation from "./navigation/GuestNavigation";
import StudentNavigation from "./navigation/StudentNavigation";
import API from "./utils/API";

const App = () => {
  const [navigation, setNavigation] = useState("Guest");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((fbUser) => {
      console.log("fbUser", fbUser);

      if (fbUser) {
        API.fetchStudentByUID(fbUser.user.uid)
          .then((res) => {
            setNavigation("Student");
            console.log("@app.js", res.data);
          })
          .catch((err) => console.log(err));
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
