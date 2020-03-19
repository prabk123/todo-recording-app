import React from "react";
import Title from "Shared/Title";
import ToDosHeader from "./ToDosHeader";
import "./ToDos.css";
import Container from "Shared/Container";
import ToDoItem from "./ToDoItem";

const ToDos = props => {
  return (
    <div style={{ height: "2000px" }}>
      <ToDosHeader />
      <Container className="ToDos-container" maxWidth="lg">
        <Title level={4}>To Do List</Title>
        <hr
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            border: "1px solid #efefef"
          }}
        />
        <div className="ToDos-grid">
          <ToDoItem
            name="Test Name"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            createdAt={new Date()}
          />
          <ToDoItem
            name="Test Name"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            createdAt={new Date()}
          />
          <ToDoItem
            name="Test Name"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            createdAt={new Date()}
          />
        </div>
      </Container>
    </div>
  );
};

export default ToDos;
