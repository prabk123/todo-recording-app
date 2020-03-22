import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = props => {
  const {
    children,
    className,
    style,
    color,
    withArrow,
    onClick,
    disabled
  } = props;
  return (
    <button
      disabled={disabled}
      style={style}
      className={`Button-root Button-${color} ${className} ${
        disabled ? "Button-disabled" : null
      }`}
      onClick={onClick}
    >
      {children}
      {withArrow ? <i className="fas fa-angle-right Button-arrow"></i> : null}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  style: null,
  color: "primary",
  withArrow: true,
  onClick: () => {},
  disabled: false
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  withArrow: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
