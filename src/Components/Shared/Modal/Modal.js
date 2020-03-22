import React from "react";
import "./Modal.css";
import Container from "Shared/Container";
import PropTypes from "prop-types";

const Modal = props => {
  const { children, onClose, open, maxWidth, style, className } = props;
  const openClass = open ? "Modal-open" : "Modal-close";
  return (
    <div
      className={`Modal-dimmer ${openClass} ${className}`}
      data-target="dimmer"
      onClick={e => {
        if (e.target.getAttribute("data-target") == "dimmer") {
          onClose();
        }
      }}
    >
      <div className="Modal-root" style={{ ...style, maxWidth }}>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  onClose: () => {},
  open: false,
  maxWidth: null,
  style: null,
  className: ""
};

Modal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.obj,
  className: PropTypes.string
};

export default Modal;
