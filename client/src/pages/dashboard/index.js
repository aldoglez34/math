import React from "react";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";

const Dashboard = React.memo(() => {
  return (
    <Layout>
      <Container className="py-4">
        <h4>Dashboard</h4>
      </Container>
    </Layout>
  );
});

export default Dashboard;
