import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Col, Button } from "react-bootstrap";
import firebase from "../../../firebase/firebase";
import * as yup from "yup";
import API from "../../../utils/API";
import { useDispatch } from "react-redux";
import * as studentActions from "../../../redux/actions/student";

const SignUpForm = React.memo(() => {
  const dispatch = useDispatch();

  const yupSchema = yup.object({
    email: yup
      .string()
      .email("Formato de email incorrecto")
      // .notOneOf(emails.emails, "Este correo ya se encuentra dado de alta")
      .required("Requerido"),
    name: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    firstSurname: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    secondSurname: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        firstSurname: "",
        secondSurname: "",
        password: "",
      }}
      validationSchema={yupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        //////// signup ////////
        firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then((fbRes) => {
            console.log("1 - then del createUserWithEmailAndPassword");
            fbRes.user
              .updateProfile({
                displayName: "Student",
              })
              .then(() => {
                console.log("2 - then del updateProfile");
                // add new client to db
                API.registerNewStudent({
                  firebaseUID: fbRes.user.uid,
                  name: values.name,
                  firstSurname: values.firstSurname,
                  secondSurname: values.secondSurname,
                  email: values.email,
                })
                  .then((res) => {
                    console.log("3 - then del registerNewStudent");
                    API.fetchStudentByUID(fbRes.user.uid)
                      .then((res) => {
                        console.log("4 - then del fetchClientByUID");
                        dispatch(studentActions.loginStudent(res.data));
                        alert(`Iniciaste sesión con éxito, ${res.data.name}`);
                        window.location.href = "/dashboard";
                      })
                      .catch((error) => {
                        alert(
                          "Ocurrió un error al iniciar sesión, vuelve a intentarlo."
                        );
                        console.log(error);
                        setSubmitting(false);
                      });
                  })
                  .catch((err) => {
                    alert(
                      "Ocurrió un error al editar usuario nuevo, por favor vuelve a intentarlo."
                    );
                    console.log(err);
                  });
              });
          })
          .catch((err) => {
            console.log(err.code);
            console.log(err.message);
          });
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
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>Correo</strong>
                <strong className="ml-1 text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="50"
                placeholder="ejemplo@ejemplo.com"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
              />
              <ErrorMessage
                className="text-danger"
                name="email"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>Nombre(s)</strong>
                <strong className="ml-1 text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="50"
                // placeholder="Apellido paterno"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name}
              />
              <ErrorMessage
                className="text-danger"
                name="name"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={6}>
              <Form.Label>
                <strong>Apellido Paterno</strong>
                <strong className="ml-1 text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="50"
                // placeholder="Apellido paterno"
                type="text"
                name="firstSurname"
                value={values.firstSurname}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.firstSurname && !errors.firstSurname}
              />
              <ErrorMessage
                className="text-danger"
                name="firstSurname"
                component="div"
              />
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <Form.Label>
                <strong>Apellido Materno</strong>
                <strong className="ml-1 text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="50"
                // placeholder="Apellido paterno"
                type="text"
                name="secondSurname"
                value={values.secondSurname}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.secondSurname && !errors.secondSurname}
              />
              <ErrorMessage
                className="text-danger"
                name="secondSurname"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>Contraseña</strong>
                <strong className="ml-1 text-danger" title="Requerido">
                  *
                </strong>
                <br />
                <small className="text-muted">
                  Las contraseñas deben tener por lo menos 6 caracteres
                </small>
              </Form.Label>
              <Form.Control
                maxLength="25"
                // placeholder="Apellido paterno"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
              />
              <ErrorMessage
                className="text-danger"
                name="password"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          <Button
            className="shadow-sm mt-3"
            variant="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Registrarme
          </Button>
        </Form>
      )}
    </Formik>
  );
});

export default SignUpForm;
