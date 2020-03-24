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
      data-test="ToDoItem"
      className={`ToDoItem-root ${highlight ? `ToDoItem-${highlight}` : ""}`}
    >
      <Button
        data-test="ToDoItem-edit"
        className="ToDoItem-edit ToDoItem-button"
        withArrow={false}
        onClick={onClick}
      >
        <i className="fas fa-edit"></i>
        <span className="ToDoItem-button-text">Edit</span>
      </Button>
      <Button
        data-test="ToDoItem-delete"
        className="ToDoItem-delete ToDoItem-button"
        color="red"
        withArrow={false}
        onClick={onDelete}
      >
        <i className="fas fa-trash-alt"></i>
        <span className="ToDoItem-button-text">Delete</span>
      </Button>
      <div>
        <Title data-test="ToDoItem-title" className="ToDoItem-title" level={6}>
          {name}
        </Title>
        <p data-test="ToDoItem-desc" className="ToDoItem-description">
          {description}
        </p>
      </div>
      <span data-test="ToDoItem-created" className="ToDoItem-created">
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
