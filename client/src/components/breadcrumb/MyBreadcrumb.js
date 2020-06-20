import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import "./mybreadcrumb.scss";

const MyBreadcrumb = React.memo(({ breadcrumb }) => {
  return (
    <Container className="py-4 lead">
      <i className="fas fa-chalkboard-teacher mr-2 text-dark" />
      {breadcrumb.map((b) =>
        b.link ? (
          <span key={b.text}>
            <a href={b.link}>{b.text}</a>
            <span className="mx-2 text-muted">/</span>
          </span>
        ) : (
          <span key={b.text} className="text-muted">
            {b.text}
          </span>
        )
      )}
    </Container>
  );
});

MyBreadcrumb.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
};

export default MyBreadcrumb;
