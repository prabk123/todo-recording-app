import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ level, style, children, className }) => {
  if (level === 1)
    return (
      <h1 className={`title ${className}`} style={style}>
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2 className={`title ${className}`} style={style}>
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3 className={`title ${className}`} style={style}>
        {children}
      </h3>
    );
  if (level === 4)
    return (
      <h4 className={`title ${className}`} style={style}>
        {children}
      </h4>
    );
  if (level === 5)
    return (
      <h5 className={`title ${className}`} style={style}>
        {children}
      </h5>
    );
  if (level === 6)
    return (
      <h6 className={`title ${className}`} style={style}>
        {children}
      </h6>
    );
};

Title.defaultProps = {
  level: 1,
  style: null
};

Title.propTypes = {
  level: PropTypes.number,
  style: PropTypes.object
};

export default Title;
