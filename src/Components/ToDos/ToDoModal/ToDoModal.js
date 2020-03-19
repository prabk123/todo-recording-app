import React, { Component } from "react";
import Modal from "Shared/Modal";
import Button from "Shared/Button";
import "./ToDoModal.css";

class ToDoModal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "", error: "" };

    this.handleChange = this.handleChange.bind(this);
    this.hanleSubmit = this.hanleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hanleSubmit(e) {
    e.preventDefault();
    const { name, description } = this.state;
    if (name && description) {
      this.props.createToDo(name, description);
      this.props.onClose();
    } else {
      this.setState({
        error: "Please give your 'To Do' a name and a description."
      });
    }
  }

  render() {
    const { open, onClose, type } = this.props;
    return (
      <Modal open={open} onClose={onClose} maxWidth={400}>
        <form autoComplete="off" onSubmit={this.hanleSubmit}>
          <div style={{ position: "relative" }}>
            {this.state.error ? (
              <div className="ToDoModal-error">{this.state.error}</div>
            ) : null}
            <input
              type="text"
              name="name"
              placeholder="Give your 'To Do' a name..."
              className="ToDoModal-input ToDoModal-name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <textarea
              className="ToDoModal-input ToDoModal-description"
              name="description"
              placeholder="Give your 'To Do' a description..."
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="ToDoModal-actions">
            <Button type="submit" color="green">
              {type === "update" ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default ToDoModal;
