import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const AdminNewCrouse = React.memo((props) => {
  return (
    <AdminLayout
      title="Nuevo Curso"
      leftBarActive="Cursos"
      backBttn="/admin/courses"
    >
      <h1>aquí va el formik</h1>
    </AdminLayout>
  );
});

export default AdminNewCrouse;
