import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { firebaseStorage } from "../../../firebase/firebase";
import cn from "classnames";

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

    const className = cn(props.className);

    return (
      firebaseUrl && (
        <Image
          {...props}
          className={className}
          height={height}
          src={firebaseUrl}
          width={width}
        />
      )
    );
  }
);
