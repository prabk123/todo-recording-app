import React, { Component } from "react";
import Title from "Shared/Title";
import ToDosHeader from "./ToDosHeader";
import "./ToDos.css";
import Container from "Shared/Container";
import ToDoItem from "./ToDoItem";
import ToDoModal from "./ToDoModal";
import { connect } from "react-redux";
import {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo,
  startRecording,
  stopRecording,
  resetRecording
} from "Actions/todoActions";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "Actions/actionTypes";
import { START_RECORD } from "../../Actions/actionTypes";

class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalType: "create",
      selectedTodo: null,
      todos: [],
      playing: false
    };

    this.openModal = this.openModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.createToDo = this.createToDo.bind(this);
    this.playRecording = this.playRecording.bind(this);
    this.animateAction = this.animateAction.bind(this);
  }

  componentDidMount() {
    const { todos, getTodos } = this.props;
    this.setState({ todos });
    getTodos();
  }

  componentDidUpdate(prevProps) {
    const { todos } = this.props;
    if (todos !== prevProps.todos) {
      this.setState({ todos });
    }
  }

  openModal(type, selectedTodo = null) {
    this.setState({ showModal: true, modalType: type, selectedTodo });
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  createToDo(name, description) {
    const createdAt = new Date();
    const todo = { name, description, createdAt };
    this.props.addTodo(todo);
  }

  async animateAction(record, type) {
    const animationType =
      type === ADD_TODO
        ? "add"
        : type === UPDATE_TODO
        ? "update"
        : type === REMOVE_TODO
        ? "remove"
        : null;
    if (animationType) {
      console.log(record);
      record.todos[record.changeIdx].highlight = animationType;
      await this.wait(100);
      this.setState(currentState => {
        return { todos: record.todos, playing: true };
      });
      await this.wait(500);
      record.todos[record.changeIdx].highlight = undefined;
      await this.wait(400);
    }
  }

  async playRecording() {
    console.log("HIT1");
    this.setState(currentState => {
      return { playing: true };
    });
    console.log("HIT2");
    const { todos } = this.props;
    let record = [...this.props.record];
    for (let i = 0; i < record.length; i++) {
      if (record[i].actionType === UPDATE_TODO) {
        await this.animateAction(record[i], UPDATE_TODO);
      }
      if (record[i].actionType === REMOVE_TODO) {
        await this.animateAction(record[i - 1], REMOVE_TODO);
      }
      this.setState(currentState => {
        return { todos: record[i].todos };
      });
      if (record[i].actionType === ADD_TODO) {
        await this.animateAction(record[i], ADD_TODO);
      }
      if (record[i].actionType === START_RECORD) {
        await this.wait(1000);
      }
    }
    await this.wait(1000);
    this.setState(currentState => {
      return { todos, playing: false };
    });
  }

  wait(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  render() {
    const { todos, playing } = this.state;
    const {
      recording,
      startRecording,
      stopRecording,
      resetRecording,
      record
    } = this.props;
    return (
      <div>
        <ToDoModal
          type={this.state.modalType}
          open={this.state.showModal}
          onClose={this.handleClose}
          createToDo={this.createToDo}
          updateTodo={this.props.updateTodo}
          selectedTodo={this.state.selectedTodo}
        />
        <ToDosHeader
          openModal={this.openModal}
          recording={recording}
          startRecording={startRecording}
          stopRecording={stopRecording}
          resetRecording={resetRecording}
          recordLength={record.length}
          playing={playing}
          playRecording={this.playRecording}
        />
        <Container
          className={`ToDos-container ${
            playing ? "ToDos-container-playback" : null
          }`}
          maxWidth="lg"
        >
          {playing ? (
            <Title level={6} className="ToDos-playing-text">
              Playing Recording
            </Title>
          ) : null}
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
                  onClick={() => this.openModal("update", x)}
                  onDelete={() => this.props.removeTodo(x.id)}
                  highlight={x.highlight}
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
    todos: state.todoReducer.todos,
    record: state.todoReducer.record,
    recording: state.todoReducer.recording
  };
};

export default connect(mapStateToProps, {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo,
  startRecording,
  stopRecording,
  resetRecording
})(ToDos);
