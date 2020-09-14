import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import API from "../../utils/API";

const Dashboard = React.memo(() => {
  const [messages, setMessages] = useState();

//   useEffect(() => {}, []);

  return (
    <StudentLayout>
      <Container className="pb-4">
        <h2 className="display-4 mb-0 mt-4">Mis mensajes</h2>
        {messages ? (
          messages.length ? null : null
        ) : (
          <div className="text-center mt-4 pt-4">
            <Spinner animation="border" variant="success" />
          </div>
        )}
      </Container>
    </StudentLayout>
  );
});

export default Dashboard;
