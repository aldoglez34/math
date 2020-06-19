// import React from "react";
// import { Layout, StudentLayout } from "../../../components/Layout";
// import StudentNav from "../../../components/studentnav";
// import { Row, Col } from "react-bootstrap";

// const Test = React.memo((props) => {
//   const examCode = props.routeProps.match.params.code;

//   const breadcrumb = [
//     { text: "Aritmética", link: "/dashboard/arithmetic" },
//     { text: examCode, link: "/dashboard/arithmetic/exam/" },
//   ];

//   return (
//     <Layout>
//       <StudentNav breadcrumb={breadcrumb} />
//       <StudentLayout>
//         {/* first row */}
//         <Row className="d-flex bg-danger">
//           <Col className="border rounded">
//             <h1
//               style={{ fontWeight: 600 }}
//               className="display-4 mb-0 text-center"
//             >
//               7.0
//             </h1>
//             <h4>CALIFICACIÓN</h4>
//           </Col>
//           <Col className="border rounded">
//             <h1
//               style={{ fontWeight: 600 }}
//               className="display-4 mb-0 text-center"
//             >
//               7.0
//             </h1>
//             <h4>CALIFICACIÓN</h4>
//           </Col>
//           <Col className="border rounded">
//             <h1
//               style={{ fontWeight: 600 }}
//               className="display-4 mb-0 text-center"
//             >
//               7.0
//             </h1>
//             <h4>CALIFICACIÓN</h4>
//           </Col>
//         </Row>
//         <h2 style={{ fontWeight: 600 }} className="display-4">
//           {examCode}
//         </h2>
//       </StudentLayout>
//     </Layout>
//   );
// });

// export default Test;
