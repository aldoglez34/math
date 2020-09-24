import React, { useState, useEffect } from "react";
import { Container, Spinner, Image } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import API from "../../utils/API";
import { useSelector, useDispatch } from "react-redux";
import MyMessages from "./components/MyMessages";
import * as breadcrumbActions from "../../redux/actions/breadcrumb";
import * as zenModeActions from "../../redux/actions/zenMode";

const Dashboard = React.memo(() => {
  const dispatch = useDispatch();

  const [messages, setMessages] = useState();

  const student = useSelector((state) => state.student);
  const breadcrumb = useSelector((state) => state.breadcrumb);
  const zenMode = useSelector((state) => state.zenMode);

  useEffect(() => {
    if (breadcrumb) dispatch(breadcrumbActions.clearBreadcrumb());

    if (zenMode) dispatch(zenModeActions.zenModeOff());

    API.fetchMessages(student.username)
      .then((res) => {
        setMessages(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });

    API.markAllMessagesSeen(student._id)
      .then(() => {
        // console.log(res.data);
        console.log("Todos los mensajes han sido marcados como vistos");
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student._id]);

  return (
    <StudentLayout>
      <Container className="pb-4">
        {/* title */}
        <h2 className="studentTitle">Mis mensajes</h2>
        {messages ? (
          messages.length ? (
            <MyMessages messages={messages} />
          ) : (
            <div className="text-center" style={{ marginTop: "110px" }}>
              <Image src="/images/emptymsgs.png" className="emptyBox" />
              <em className="d-block lead" style={{ color: "#b3b3b3" }}>
                Tu bandeja de mensajes está vacía
              </em>
            </div>
          )
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
