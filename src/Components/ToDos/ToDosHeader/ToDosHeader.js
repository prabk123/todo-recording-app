import React from "react";
import HeaderBrand from "Shared/HeaderBrand";
import "./ToDosHeader.css";
import Container from "Shared/Container";
import Button from "Shared/Button";
import Tooltip from "Shared/Tooltip";

const ToDosHeader = props => {
  const { openModal } = props;
  return (
    <div className="ToDosHeader-root">
      <Container maxWidth="lg" className="ToDosHeader-container">
        <div className="ToDosHeader-brand">
          <HeaderBrand collapse />
        </div>
        <div className="ToDosHeader-actions">
          <Tooltip content="TEST">
            <Button
              withArrow={false}
              className="ToDosHeader-btn"
              onClick={openModal}
            >
              <i className="fas fa-plus"></i>
            </Button>
          </Tooltip>
          <Button withArrow={false} color="red" className="ToDosHeader-btn">
            <i className="fas fa-video"></i>
          </Button>
          <Button withArrow={false} color="green" className="ToDosHeader-btn">
            <i className="fas fa-play"></i>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ToDosHeader;
