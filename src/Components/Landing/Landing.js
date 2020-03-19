import React from "react";
import Title from "Shared/Title";
import Button from "Shared/Button";
import "./Landing.css";
import HeaderBrand from "Shared/HeaderBrand";

const Landing = () => {
  return (
    <div className="Landing-root">
      <div className="Landing-header">
        <HeaderBrand />
      </div>
      <div className="Landing-main">
        <Title className="Landing-title" level={2}>
          Welcome
        </Title>
        <Title className="Landing-title Landing-subtitle" level={4}>
          This is the "To Do Recording App".
        </Title>
        <Button color="primary" withArrow>
          Get Started
        </Button>
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
};

export default Landing;
