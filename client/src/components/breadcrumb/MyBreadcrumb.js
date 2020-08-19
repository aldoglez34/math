import React from "react";
import { Container } from "react-bootstrap";
import "./mybreadcrumb.scss";
import { useSelector } from "react-redux";

const MyBreadcrumb = React.memo(() => {
  const breadcrumb = useSelector((state) => state.breadcrumb);

  return breadcrumb ? (
    <Container className="py-4" style={{ fontSize: "15px" }}>
      {breadcrumb.map((b) =>
        b.link ? (
          <span key={b.text}>
            <a className="breadcrumbItem" href={b.link}>
              {b.text}
            </a>
            <span className="mx-2 breadcrumbItem text-muted">/</span>
          </span>
        ) : (
          <span key={b.text} className="text-muted breadcrumbItem">
            {b.text}
          </span>
        )
      )}
    </Container>
  ) : null;
});

export default MyBreadcrumb;
