import React from "react";
import "./Container.css";

const Container = props => {
  const { children, className, maxWidth } = props;
  return (
    <div className={`Container-root Container-${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
