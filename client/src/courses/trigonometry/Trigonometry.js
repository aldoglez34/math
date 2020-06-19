// import React from "react";
// import { Layout } from "../../components/Layout";
// import { Row, Col } from "react-bootstrap";
// import StudentNav from "../../components/studentnav";
// import ScrollButton from "../../components/scrollbutton";

// const Trigonometry = React.memo(() => {
//   const breadcrumb = [
//     { text: "Trigonometría", link: "/dashboard/trigonometry" },
//   ];

//   return (
//     <Layout>
//       <StudentNav breadcrumb={breadcrumb} />
//       <div
//         style={{
//           backgroundImage: "url('/images/newcoursecardback.png')",
//         }}
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
//                 Curso de{" "}
//                 <span className="bg-dark text-light">Trigonometría</span>
//               </h1>
//               <p>
//                 <i className="fas fa-bullhorn mr-2" />
//                 Es la rama de las matemáticas que estudia las razones
//                 trigonométricas (seno, coseno, tangente, secante, cosecante y
//                 cotangente). En éste curso el alumno aprenderá y/o reforzará los
//                 conceptos básicos de la trigonometría, para que así pueda tener
//                 las herramientas necesarias para poder encontrar distancias y
//                 ángulos en triángulos rectángulos y oblicuángulos. Los temas que
//                 conforman este curso son:
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
//                 <li>Teorema de Pitágoras</li>
//                 <li>Resolución de triángulos rectángulos</li>
//                 <li>Funciones trigonométricas</li>
//                 <li>Ecuaciones trigonométricas</li>
//                 <li>Ley de senos</li>
//                 <li>Ley de cosenos</li>
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

// export default Trigonometry;
