import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import "./mymessages.scss";
import moment from "moment";
import "moment/locale/es";

const MyMessages = React.memo(({ messages }) => {
  return (
    <ListGroup className="mt-2">
      {messages.map((m) => (
        <ListGroup.Item
          key={m._id}
          className="py-3 d-flex flex-column shadow-sm mt-3 border rounded"
        >
          {/* subject */}
          <span className="text-muted">Curso / Tema</span>
          <h5>{m.subject}</h5>
          {/* date */}
          <span className="text-muted">Enviado</span>
          <h5>{moment(m.sentAt).format("LLLL")}</h5>
          {/* body */}
          <span className="text-muted">Mensaje</span>
          <h5>{m.body}</h5>
          {/* response */}
          <h2>
            <Badge variant="secondary">Sin respuesta</Badge>
          </h2>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

MyMessages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MyMessages;
