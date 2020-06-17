import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import StudentNav from "../../components/studentnav";
import MathJax from "react-mathjax2";
import { Helmet } from "react-helmet";
import MyComponent from "./components/MyComponent";

const Course = React.memo((props) => {
  const getCourse = () => {
    const course = props.routeProps.match.params.course;
    switch (course) {
      case "trigonometry":
        return "Trigonometría";
      case "calculus":
        return "Cálculo";
      default:
        return "";
    }
  };

  const ascii = "U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))";

  const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`;

  useEffect(() => {
    // var genericIntegrationProperties = {};
    // genericIntegrationProperties.target = document.getElementById("htmlEditor");
    // genericIntegrationProperties.toolbar = document.getElementById("toolbar");
    // // GenericIntegration instance.
    // var genericIntegrationInstance = new WirisPlugin.GenericIntegration(
    //   genericIntegrationProperties
    // );
    // genericIntegrationInstance.init();
    // genericIntegrationInstance.listeners.fire("onTargetReady", {});
  }, []);

  return (
    <Layout>
      <StudentNav title={"Mis Cursos // " + getCourse()} hasExitBttn={true} />
      <Container className="py-4 px-2 mb-3 px-lg-0">
        <h3>Testing...</h3>
        <hr />
        <MyComponent />
        {/* <hr />
        <div>
          <MathJax.Context input="ascii">
            <div>
              <MathJax.Node>{ascii}</MathJax.Node>
            </div>
          </MathJax.Context>
        </div>
        <hr />
        <div>
          <MathJax.Context input="tex">
            <div>
              This is an inline math formula:{" "}
              <MathJax.Node inline>{"a = b"}</MathJax.Node>
            </div>
          </MathJax.Context>
        </div>
        <hr />
        <div>
          <MathJax.Context input="tex">
            <div>
              <MathJax.Node>{tex}</MathJax.Node>
            </div>
          </MathJax.Context>
        </div> */}
      </Container>
    </Layout>
  );
});

export default Course;
