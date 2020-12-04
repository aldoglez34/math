import React from "react";
import PropTypes from "prop-types";
import "./sectiontitle.scss";

const SectionTitle = React.memo(({ title, text }) => {
  return (
    <div>
      <h1 className="text-left text-md-center sectionTitle mb-4">{title}</h1>
      <p className="text-left text-md-center sectionText pb-3">{text}</p>asd
    </div>
  );
});

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
