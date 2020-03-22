import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ level, style, children, className }) => {
  if (level === 1)
    return (
      <h1 data-test="Title" className={`title ${className}`} style={style}>
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2 data-test="Title" className={`title ${className}`} style={style}>
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3 data-test="Title" className={`title ${className}`} style={style}>
        {children}
      </h3>
    );
  if (level === 4)
    return (
      <h4 data-test="Title" className={`title ${className}`} style={style}>
        {children}
      </h4>
    );
  if (level === 5)
    return (
      <h5 data-test="Title" className={`title ${className}`} style={style}>
        {children}
      </h5>
    );
  if (level === 6)
    return (
      <h6 data-test="Title" className={`title ${className}`} style={style}>
        {children}
      </h6>
    );
  return null;
};

Title.defaultProps = {
  level: 1,
  style: null,
  className: ""
};

Title.propTypes = {
  level: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string
};

export default Title;
