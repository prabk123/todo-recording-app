import React from "react";
import "./Modal.css";
import Container from "Shared/Container";

const Modal = props => {
  const { children, onClose, open, maxWidth, style } = props;
  const openClass = open ? "Modal-open" : "Modal-close";
  return (
    <div
      className={`Modal-dimmer ${openClass}`}
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
  open: false
};

export default Modal;
