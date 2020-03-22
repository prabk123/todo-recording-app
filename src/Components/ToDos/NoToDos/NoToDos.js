import React from "react";
import Title from "Shared/Title";
import Container from "Shared/Container";
import Empty from "Assets/empty.svg";
import "./NoToDos.css";

const NoToDos = () => {
  return (
    <Container maxWidth="sm" data-test="NoToDos">
      <div className="NoToDos-root">
        <img data-test="NoToDos-img" className="NoToDos-img" src={Empty} />
        <Title level={6} className="NoToDos-text" data-test="NoToDos-title">
          You haven't got anything in your to do list.
        </Title>
        <p className="NoToDos-text" data-test="NoToDos-para">
          Get started by clicking
          <i className="fas fa-plus NoToDos-icon"></i> in the top right.
        </p>
      </div>
    </Container>
  );
};

export default NoToDos;
