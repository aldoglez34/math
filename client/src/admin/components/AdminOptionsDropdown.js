import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import "./adminoptionsdropdown.scss";

const AdminOptionsDropdown = React.memo(({ opts }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="transparent"
        className="optionsdropdown p-0 ml-1"
      >
        <i className="fas fa-caret-square-down" style={{ color: "#48bf84" }} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {opts.map((o) => (
          <Dropdown.Item key={o.text} href={o.link}>
            {o.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
});

AdminOptionsDropdown.propTypes = {
  opts: PropTypes.array.isRequired,
};

export default AdminOptionsDropdown;
