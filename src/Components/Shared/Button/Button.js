import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = props => {
  const {
    children,
    variant,
    className,
    style,
    color,
    withArrow,
    onClick,
    type,
    disabled
  } = props;
  return (
    <button
      disabled={disabled}
      type={type}
      style={style}
      className={`Button-root Button-${variant} Button-${color} ${className} ${
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
  variant: "contained",
  style: null,
  color: "primary",
  withArrow: true,
  onClick: () => {},
  disabled: false
};

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  withArrow: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
