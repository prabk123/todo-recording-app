import React from "react";
import Title from "Shared/Title";
import Button from "Shared/Button";
import "./Landing.css";
import HeaderBrand from "Shared/HeaderBrand";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="Landing-header">
        <HeaderBrand />
      </div>
      <div className="Landing-root">
        <div className="Landing-main">
          <div>
            <Title className="Landing-title" level={2}>
              Welcome
            </Title>
            <Title className="Landing-title" level={4}>
              This is the "To Do Recording App".
            </Title>
            <p className="Landing-info">
              Below is a little more information about the app, how it's built
              and how to use it. If you'd rather just dive right in then click
              "Get Started".
            </p>
            <Link to="/todos">
              <Button color="primary">Get Started</Button>
            </Link>
          </div>
        </div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default Landing;
