import React, { Component } from "react";
import Title from "Shared/Title";
import ToDosHeader from "./ToDosHeader";
import "./ToDos.css";
import Container from "Shared/Container";
import ToDoItem from "./ToDoItem";
import ToDoModal from "./ToDoModal";
import { connect } from "react-redux";
import { getTodos, addTodo, updateTodo, removeTodo } from "Actions/todoActions";

class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, modalType: "create" };

    this.openModal = this.openModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.createToDo = this.createToDo.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  openModal(type) {
    this.setState({ showModal: true, modalType: type });
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  createToDo(name, description) {
    const createdAt = new Date();
    const todo = { name, description, createdAt };
    this.props.addTodo(todo);
  }

  render() {
    console.log(this.props.todos);
    const { todos } = this.props;
    return (
      <div>
        <ToDoModal
          open={this.state.showModal}
          onClose={this.handleClose}
          createToDo={this.createToDo}
        />
        <ToDosHeader openModal={this.openModal} />
        <Container className="ToDos-container" maxWidth="lg">
          <Title level={4}>To Do List</Title>
          <hr
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              border: "1px solid #efefef"
            }}
          />
          {todos.length > 0 ? (
            <div className="ToDos-grid">
              {todos.map(x => (
                <ToDoItem
                  key={x.id}
                  name={x.name}
                  description={x.description}
                  createdAt={x.createdAt}
                />
              ))}
            </div>
          ) : null}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

export default connect(mapStateToProps, {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo
})(ToDos);
