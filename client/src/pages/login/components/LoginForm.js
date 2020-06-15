import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Col, Button } from "react-bootstrap";
import firebase from "../../../firebase/firebase";
import fbApp from "firebase/app";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import * as studentActions from "../../../redux/actions/student";
import API from "../../../utils/API";

const SignUpForm = React.memo(() => {
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
        rememberme: false,
      }}
      validationSchema={yupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        //////// login ////////
        firebase
          .auth()
          .setPersistence(
            values.rememberme
              ? fbApp.auth.Auth.Persistence.LOCAL
              : fbApp.auth.Auth.Persistence.SESSION
          )
          .then(() => {
            return firebase
              .auth()
              .signInWithEmailAndPassword(values.email, values.password)
              .then((res) => {
                // if anything goes wrong from here, logout the user in firebase
                API.fetchStudentByUID(res.user.uid)
                  .then((res) => {
                    if (res.data) {
                      dispatch(studentActions.loginStudent(res.data));
                      alert(`Iniciaste sesión con éxito, ${res.data.name}`);
                      window.location.href = "/dashboard";
                    }
                  })
                  .catch((error) => {
                    alert(
                      "Ocurrió un error al iniciar sesión, vuelve a intentarlo."
                    );
                    console.log(error);
                    setSubmitting(false);
                  });
              });
          })
          .catch((error) => {
            alert("Ocurrió un error al iniciar sesión, vuelve a intentarlo.");
            console.log(error.code);
            console.log(error.message);
            setSubmitting(false);
          });
        setSubmitting(false);
        // firebase
        //   .auth()
        //   .createUserWithEmailAndPassword(values.email, values.password)
        //   .then((fbRes) => {})
        //   .catch((err) => {
        //     console.log(err.code);
        //     console.log(err.message);
        //   });
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
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              name="rememberme"
              onChange={handleChange}
              className="custom-control-input checkboxStyle"
              id="rememberme"
              onBlur={handleBlur}
              defaultChecked={values.rememberme}
            />
            <label
              className="custom-control-label"
              htmlFor="rememberme"
              style={{ cursor: "pointer" }}
            >
              <strong>Recuérdame</strong>
            </label>
          </div>
          <Button
            className="shadow-sm mt-4"
            variant="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Entrar
          </Button>
        </Form>
      )}
    </Formik>
  );
});

export default SignUpForm;
