import React from "react";
import { Layout } from "../../components/Layout";
import { Image } from "react-bootstrap";

export const NoMatchPage = () => {
  return (
    <Layout>
      <div className="p-4 mt-4 text-center">
        <Image
          src="https://image.flaticon.com/icons/svg/2965/2965549.svg"
          width="175"
          height="175"
          className="mb-3"
        />
        <h1 className="display-1 mb-0">404</h1>
        <h2>Error, la página que estás buscando no existe</h2>
        <p>
          Regresa a nuestra <a href="/">página principal</a>
        </p>
      </div>
    </Layout>
  );
};
