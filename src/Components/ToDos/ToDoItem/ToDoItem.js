import React from "react";
import Title from "Shared/Title";
import "./ToDoItem.css";
import Moment from "react-moment";

const ToDoItem = props => {
  const { name, description, createdAt, onClick } = props;
  return (
    <div className="ToDoItem-root" onClick={onClick}>
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
  onClick: () => {}
};

export default ToDoItem;
