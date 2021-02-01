import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Col, Button } from "react-bootstrap";
import { firebaseAuth } from "../../../firebase/firebase";
import fbApp from "firebase/app";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginStudent } from "../../../redux/actions/student";
import API from "../../../utils/API";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const yupSchema = yup.object({
    email: yup
      .string()
      .email("Formato de email incorrecto")
      .required("Requerido"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={yupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        //////// login ////////
        firebaseAuth
          .setPersistence(fbApp.auth.Auth.Persistence.LOCAL)
          .then(() => {
            return firebaseAuth
              .signInWithEmailAndPassword(values.email, values.password)
              .then((res) => {
                // if anything goes wrong from here, logout the user in firebase
                API.fetchStudentByUID(res.user.uid)
                  .then((res) => {
                    if (res.data) {
                      dispatch(loginStudent(res.data));
                      alert(`Iniciaste sesión con éxito, ${res.data.name}`);
                      // window.location.href = "/dashboard";
                    } else {
                      alert("Ocurrió un error al iniciar sesión.");
                      firebaseAuth.signOut();
                    }
                  })
                  .catch((error) => {
                    alert("Ocurrió un error al iniciar sesión.");
                    console.log(error);
                    setSubmitting(false);
                  });
              });
          })
          .catch((error) => {
            alert(
              "Tu correo y/o contraseña son incorrectos. Verifica tus datos y vuelve a intentarlo."
            );
            console.log(error.code);
            console.log(error.message);
            setSubmitting(false);
          });
        setSubmitting(false);
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
              </Form.Label>
              <Form.Control
                maxLength="50"
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
                <strong>Contraseña</strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
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
            className="shadow-sm mt-4 genericButton"
            type="submit"
            disabled={isSubmitting}
          >
            Entrar
          </Button>
        </Form>
      )}
    </Formik>
  );
};
