import React from "react";
import Title from "Shared/Title";
import Button from "Shared/Button";
import "./ToDoItem.css";
import Moment from "react-moment";

const ToDoItem = props => {
  const { name, description, createdAt, onClick, onDelete } = props;
  return (
    <div className="ToDoItem-root" onClick={onClick}>
      <Button
        className="ToDoItem-delete"
        color="red"
        withArrow={false}
        onClick={e => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <i className="fas fa-trash-alt"></i>
        <span className="ToDoItem-delete-text">Delete</span>
      </Button>
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

ToDoItem.defaultProps = {
  onClick: () => {},
  onDelete: () => {}
};

export default ToDoItem;
