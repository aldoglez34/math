import React, { useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Container, InputGroup, Row, Form, Button, Col } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";

const AdminNewCrouse = React.memo((props) => {
  const yupschema = yup.object({});

  useEffect(() => {
    const courseId = props.routeProps.match.params.courseId;
    console.log(courseId);
  }, []);

  return (
    <AdminLayout
      title="Nuevo Tema"
      leftBarActive="Cursos"
      backBttn={"/admin/courses/edit/" + props.routeProps.match.params.courseId}
    >
      <Container>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <h3 className="mt-4">Ingresa los datos del tema.</h3>
            <br />
            <Formik
              initialValues={{}}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => <Form noValidate onSubmit={handleSubmit}></Form>}
            </Formik>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});

export default AdminNewCrouse;
