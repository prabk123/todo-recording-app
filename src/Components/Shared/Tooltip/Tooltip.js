import React, { Component } from "react";
import "./Tooltip.css";

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    const x = e.clientX,
      y = e.clientY;
    const tooltip = this.refs.tooltip;
    tooltip.style.opacity = 1;
    tooltip.style.top = y + 30 + "px";
    tooltip.style.left = x - 40 + "px";
  }

  handleMouseLeave() {
    const tooltip = this.refs.tooltip;
    tooltip.style.opacity = 0;
  }

  render() {
    const { content, children } = this.props;
    return (
      <div
        className="Tooltip-root"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        <div className="Tooltip" ref="tooltip">
          {content}
        </div>
      </div>
    );
  }
}

export default Tooltip;
