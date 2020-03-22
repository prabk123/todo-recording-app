import React from "react";
import Title from "Shared/Title";
import "./HeaderBrand.css";
import Avatar from "Assets/avatar-nb.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderBrand = ({ type, collapse }) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div data-test="HeaderBrand" className="HeaderBrand-root">
        <img
          data-test="HeaderBrand-avatar"
          className="HeaderBrand-avatar"
          src={Avatar}
        />
        <div>
          <Title
            data-test="HeaderBrand-title"
            className={`HeaderBrand-title HeaderBrand-${type} ${
              collapse ? "HeaderBrand-collapse" : null
            }`}
            level={5}
          >
            Prabodh Kakodkar
          </Title>
          <p
            data-test="HeaderBrand-subtitle"
            className={`HeaderBrand-title HeaderBrand-${type} ${
              collapse ? "HeaderBrand-collapse" : null
            }`}
          >
            To Do Recording App
          </p>
        </div>
      </div>
    </Link>
  );
};

HeaderBrand.defaultProps = {
  type: "dark",
  collapse: false
};

HeaderBrand.propTypes = {
  type: PropTypes.string,
  collapse: PropTypes.bool
};

export default HeaderBrand;
