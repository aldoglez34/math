import React from "react";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import StudentNav from "../../components/studentnav";

const Dashboard = React.memo(() => {
  return (
    <Layout>
      <StudentNav />
      <Container className="py-4">
        <h4>Dashboard</h4>
      </Container>
    </Layout>
  );
});

export default Dashboard;
