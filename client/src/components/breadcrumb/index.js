import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";
import "./mybreadcrumb.scss";

const MyBreadcrumb = React.memo(({ breadcrumb = [] }) => {
  return (
    <Container className="bg-info">
      {/* home button */}
      <Button
        variant="light"
        size="sm"
        href="/dashboard"
        className="mr-2 d-flex align-items-center"
        disabled={breadcrumb.length ? false : true}
      >
        Cursos
      </Button>
      {/* rest of the buttons */}
      {breadcrumb
        ? breadcrumb.map((bc, idx) => (
            <Button
              key={bc.text}
              variant="light"
              size="sm"
              href={bc.link}
              className="mr-2 d-flex align-items-center"
              disabled={idx === breadcrumb.length - 1 ? true : false}
            >
              {bc.text}
            </Button>
          ))
        : null}
    </Container>
  );
});

MyBreadcrumb.propTypes = {
  breadcrumb: PropTypes.array,
};

export default MyBreadcrumb;
