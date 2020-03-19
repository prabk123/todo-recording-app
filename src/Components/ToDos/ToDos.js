import React from "react";
import Title from "Shared/Title";
import ToDosHeader from "./ToDosHeader";
import "./ToDos.css";
import Container from "Shared/Container";

const ToDos = props => {
  return (
    <div style={{ height: "2000px" }}>
      <ToDosHeader />
      <Container className="ToDos-container" maxWidth="lg">
        <div className="ToDos-grid">
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
          <div
            style={{
              height: "200px",
              background: "#f2f2f2",
              borderRadius: "10px"
            }}
          ></div>
        </div>
      </Container>
    </div>
  );
};

export default ToDos;
