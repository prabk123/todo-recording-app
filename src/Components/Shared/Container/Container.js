import React from "react";
import "./Container.css";
import PropTypes from "prop-types";

const Container = props => {
  const { children, className, maxWidth, style } = props;
  return (
    <div
      style={style}
      className={`Container-root Container-${maxWidth} ${className}`}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  maxWidth: "",
  className: "",
  style: null
};

Container.propTypes = {
  maxWidth: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Container;
