import React, { Component } from "react";
import Modal from "Shared/Modal";
import Button from "Shared/Button";
import "./ToDoModal.css";
import PropTypes from "prop-types";

class ToDoModal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "", error: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { type, selectedTodo } = this.props;
    if (type === "update" && selectedTodo !== prevProps.selectedTodo) {
      this.setState({
        name: selectedTodo.name,
        description: selectedTodo.description
      });
    } else if (type === "create" && prevProps.type !== "create") {
      this.setState({ name: "", description: "", error: "" });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, description } = this.state;
    const { type, selectedTodo, createToDo, updateTodo, onClose } = this.props;
    if (name && description) {
      if (type === "create") {
        createToDo(name, description);
        onClose();
      } else {
        const newTodo = { ...selectedTodo, name, description };
        updateTodo(newTodo);
        onClose();
      }
      this.setState({ name: "", description: "", error: "" });
    } else {
      this.setState({
        error: "Please give your 'To Do' a name and a description."
      });
    }
  }

  render() {
    const { open, onClose, type } = this.props;
    return (
      <Modal open={open} onClose={onClose} maxWidth={400} data-test="ToDoModal">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div style={{ position: "relative" }}>
            {this.state.error ? (
              <div className="ToDoModal-error">{this.state.error}</div>
            ) : null}
            <input
              data-test="ToDoModal-name"
              type="text"
              name="name"
              placeholder="Give your 'To Do' a name..."
              className="ToDoModal-input ToDoModal-name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <textarea
              data-test="ToDoModal-desc"
              className="ToDoModal-input ToDoModal-description"
              name="description"
              placeholder="Give your 'To Do' a description..."
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="ToDoModal-actions">
            <Button data-test="ToDoModal-button" type="submit" color="green">
              {type === "update" ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Modal>
    );
  }
}

ToDoModal.defaultProps = {
  open: false,
  type: "create",
  selectedTodo: null,
  onClose: () => {},
  createToDo: () => {},
  updateTodo: () => {}
};

ToDoModal.propTypes = {
  open: PropTypes.bool,
  type: PropTypes.oneOf(["create", "update"]),
  selectedTodo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date)
  }),
  onClose: PropTypes.func,
  createToDo: PropTypes.func,
  updateTodo: PropTypes.func
};

export default ToDoModal;
