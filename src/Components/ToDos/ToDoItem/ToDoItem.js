import React from "react";
import Title from "Shared/Title";
import Button from "Shared/Button";
import "./ToDoItem.css";
import Moment from "react-moment";
import PropTypes from "prop-types";

const ToDoItem = props => {
  const { name, description, createdAt, onClick, onDelete, highlight } = props;
  return (
    <div
      className={`ToDoItem-root ${highlight ? `ToDoItem-${highlight}` : ""}`}
      onClick={onClick}
    >
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
  name: "",
  description: "",
  createdAt: "",
  onClick: () => {},
  onDelete: () => {},
  highlight: ""
};

ToDoItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  highlight: PropTypes.string
};

export default ToDoItem;
