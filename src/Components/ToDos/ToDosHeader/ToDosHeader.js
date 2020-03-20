import React from "react";
import HeaderBrand from "Shared/HeaderBrand";
import "./ToDosHeader.css";
import Container from "Shared/Container";
import Button from "Shared/Button";

const ToDosHeader = props => {
  const { openModal } = props;
  return (
    <div className="ToDosHeader-root">
      <Container maxWidth="lg" className="ToDosHeader-container">
        <div className="ToDosHeader-brand">
          <HeaderBrand collapse />
        </div>
        <div className="ToDosHeader-actions">
          <Button
            withArrow={false}
            className="ToDosHeader-btn"
            onClick={() => openModal("create")}
          >
            <i className="fas fa-plus"></i>
            <span className="ToDosHeader-btn-text">Add</span>
          </Button>
          <Button withArrow={false} color="red" className="ToDosHeader-btn">
            <i className="fas fa-video"></i>
            <span className="ToDosHeader-btn-text">Record</span>
          </Button>
          <Button
            disabled={true}
            withArrow={false}
            color="green"
            className="ToDosHeader-btn"
          >
            <i className="fas fa-play"></i>
            <span className="ToDosHeader-btn-text">Play</span>
          </Button>
          <Button
            disabled={true}
            withArrow={false}
            color="orange"
            className="ToDosHeader-btn"
          >
            <i className="fas fa-redo-alt"></i>
            <span className="ToDosHeader-btn-text">Reset</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ToDosHeader;
