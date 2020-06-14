import React from "react";
import Layout from "../../components/Layout";
import { Button, Image } from "react-bootstrap";

const NoMatch = React.memo(() => {
  return (
    <Layout>
      <div className="m-4 p-4 text-center">
        <Image
          src="https://image.flaticon.com/icons/svg/2965/2965549.svg"
          width="175"
          height="175"
          className="mb-3"
        />
        <h1 className="display-4">Error 404</h1>
        <h4 className="mb-4">La página que buscas no existe</h4>
      </div>
    </Layout>
  );
});

export default NoMatch;
