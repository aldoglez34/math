// import React, { useState, useEffect } from "react";
// import "./dashboardcoursecard.scss";
// import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
// import PropTypes from "prop-types";

// const DashboardCourseCard = React.memo(({ course }) => {
//   const [courseName, setCourseName] = useState();

//   useEffect(() => {
//     switch (course) {
//       case "PRIM_3y4":
//         setCourseName("Primaria, 3° y 4°");
//         break;
//       case "PRIM_5y6":
//         setCourseName("Primaria, 5° y 6°");
//         break;
//       default:
//         return course;
//     }
//   }, []);

//   return (
//     <Card className="dashboardCourseCard">
//       <Card.Body>
//         <Card.Title className="d-flex flex-row">
//           <h2>
//             <span className="text-danger">{courseName}</span>
//           </h2>
//           <h2 className="ml-auto">
//             <i className="fas fa-info-circle" style={{ color: "#50575e" }} />
//           </h2>
//         </Card.Title>
//         <Card.Text className="lead">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroupItem>
//           <a href="">Suma</a>
//         </ListGroupItem>
//         <ListGroupItem>
//           <a href="">Resta</a>
//         </ListGroupItem>
//         <ListGroupItem>
//           <a href="">Multiplicación</a>
//         </ListGroupItem>
//       </ListGroup>
//       <Card.Body>
//         <Button variant="danger">Abrir</Button>
//       </Card.Body>
//     </Card>
//   );
// });

// DashboardCourseCard.propTypes = {
//   course: PropTypes.string.isRequired,
// };

// export default DashboardCourseCard;
