// import React from "react";
// import { Layout } from "../../components/Layout";
// import { Container, Row, Col } from "react-bootstrap";
// import StudentNav from "../../components/studentnav";
// import ScrollButton from "../../components/scrollbutton";

// const Algebra = React.memo(() => {
//   const breadcrumb = [{ text: "Álgebra", link: "/dashboard/algebra" }];

//   return (
//     <Layout>
//       <StudentNav breadcrumb={breadcrumb} />
//       <div
//         style={{
//           backgroundImage: "url('/images/newcoursecardback.png')",
//         }}
//         className="h-100"
//       >
//         <Container
//           className="px-3 px-lg-0 h-100"
//           style={{
//             paddingTop: "34px",
//             paddingBottom: "34px",
//           }}
//         >
//           {/* intro */}
//           <Row>
//             <Col lg={4} className="bg-light">
//               <h1 style={{ fontWeight: 600 }} className="mb-3">
//                 Curso de <span className="bg-dark text-light">Álgebra</span>
//               </h1>
//               <p>
//                 <i className="fas fa-bullhorn mr-2" />
//                 Álgebra es la rama de las matemáticas que estudia la combinación
//                 de números que cumplen ciertas reglas. El álgebra es el pilar
//                 fundamental para el estudio de las matemáticas, es por esto que
//                 el curso comprende los fundamentos básicos del álgebra así como
//                 algunas de sus aplicaciones. Los temas que conforman éste curso
//                 son:
//               </p>
//             </Col>
//             <Col lg={8} className="mt-3 mt-lg-0">
//               <h4
//                 style={{ fontWeight: 600, fontFamily: "Noto Sans" }}
//                 className="mb-2 pt-2"
//               >
//                 Temario
//               </h4>
//               <ul>
//                 <li>Operaciones con números negativos</li>
//                 <li>Expresiones algebraicas</li>
//                 <li>Jerarquía de operaciones y de signos de agrupación</li>
//                 <li>Ecuaciones con una variable</li>
//                 <li>Sistemas de ecuaciones</li>
//                 <li>Desigualdades</li>
//                 <li>Exponentes</li>
//                 <li>Radicales</li>
//                 <li>Productos notables</li>
//                 <li>Factorización</li>
//                 <li>Ecuación cuadrática</li>
//                 <li>Polinomios de grado superior</li>
//               </ul>
//             </Col>
//           </Row>
//           {/* scroll bttn */}
//           <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
//         </Container>
//       </div>
//     </Layout>
//   );
// });

// export default Algebra;
