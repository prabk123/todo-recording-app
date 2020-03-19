import React from "react";
import Title from "Shared/Title";
import "./HeaderBrand.css";
import Avatar from "Assets/avatar-nb.png";
import { Link } from "react-router-dom";

const HeaderBrand = ({ type }) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="HeaderBrand-root">
        <img className="HeaderBrand-avatar" src={Avatar} />
        <div>
          <Title className={`HeaderBrand-title HeaderBrand-${type}`} level={5}>
            Prabodh Kakodkar
          </Title>
          <p className={`HeaderBrand-title HeaderBrand-${type}`}>
            To Do Recording App
          </p>
        </div>
      </div>
    </Link>
  );
};

HeaderBrand.defaultProps = {
  type: "dark"
};

export default HeaderBrand;
