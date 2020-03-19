import React from "react";
import Title from "Shared/Title";
import "./HeaderBrand.css";
import Avatar from "Assets/avatar-nb.png";

const HeaderBrand = () => {
  return (
    <div className="HeaderBrand-root">
      <img className="HeaderBrand-avatar" src={Avatar} />
      <div>
        <Title className="HeaderBrand-title" level={5}>
          Prabodh Kakodkar
        </Title>
        <p className="HeaderBrand-title">To Do Recording App</p>
      </div>
    </div>
  );
};

export default HeaderBrand;
