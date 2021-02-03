import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { firebaseStorage } from "../../../firebase/firebase";

export const ImageFromFirebase = React.memo(
  ({ height, path, width, ...props }) => {
    const [firebaseUrl, setFirebaseUrl] = useState();

    useEffect(() => {
      const storageRef = firebaseStorage.ref();

      storageRef
        .child(path)
        .getDownloadURL()
        .then((url) => setFirebaseUrl(url))
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error al cargar la imagen.");
        });
    }, [path]);

    return (
      firebaseUrl && (
        <Image
          {...props}
          className="mb-3"
          height={height}
          src={firebaseUrl}
          width={width}
        />
      )
    );
  }
);
