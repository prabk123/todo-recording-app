import React from "react";
import Title from "Shared/Title";
import "./ToDoItem.css";
import Moment from "react-moment";

const ToDoItem = props => {
  const { name, description, createdAt } = props;
  return (
    <div className="ToDoItem-root">
      <div>
        <Title className="ToDoItem-title" level={6}>
          {name}
        </Title>
        <p className="ToDoItem-description">{description}</p>
      </div>
      <span className="ToDoItem-created">
        <Moment fromNow>{createdAt}</Moment>
      </span>
    </div>
  );
};

export default ToDoItem;
