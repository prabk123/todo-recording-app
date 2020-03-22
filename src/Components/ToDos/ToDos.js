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
import { wait } from "Services";
import PropTypes from "prop-types";

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

  async animateAction(record, type, changeIdx) {
    // Determine action type
    const animationType =
      type === ADD_TODO
        ? "add"
        : type === UPDATE_TODO
        ? "update"
        : type === REMOVE_TODO
        ? "remove"
        : null;

    if (animationType) {
      // Add appropriate styles for action type
      record.todos[changeIdx].highlight = animationType;

      // Wait - small delay before updating DOM
      await wait(100);
      this.setState(currentState => {
        return { todos: record.todos, playing: true };
      });

      // Keep styling for half a second
      await wait(500);
      record.todos[changeIdx].highlight = undefined;

      // Wait to complete a second before next animation
      await wait(400);
    }
  }

  async playRecording() {
    console.log("HIT");
    // Initialise state so that appropriate DOM elements are disabled.
    this.setState(currentState => {
      return { playing: true };
    });

    const { todos } = this.props;
    let record = [...this.props.record];

    // Itterates through recorded actions
    for (let i = 0; i < record.length; i++) {
      const actionType = record[i].actionType;
      if (actionType === REMOVE_TODO || actionType === UPDATE_TODO) {
        let recordParam =
          actionType === REMOVE_TODO ? record[i - 1] : record[i];
        await this.animateAction(recordParam, actionType, record[i].changeIdx);
      }
      // Sets the current action competed state
      this.setState(currentState => {
        return { todos: record[i].todos };
      });
      if (actionType === START_RECORD) {
        await wait(1000);
        continue;
      }
      if (actionType === ADD_TODO) {
        await this.animateAction(record[i], actionType, record[i].changeIdx);
      }
    }

    await wait(1000);
    this.setState(currentState => {
      return { todos, playing: false };
    });
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
    const containerClass = playing ? "ToDos-container-playback" : null;

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
          className={`ToDos-container ${containerClass}`}
          maxWidth="lg"
        >
          {playing ? (
            <Title level={6} className="ToDos-playing-text">
              Playing Recording
            </Title>
          ) : null}
          <Title level={4}>To Do List</Title>
          <hr />
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

ToDos.propTypes = {
  todos: PropTypes.array,
  record: PropTypes.array,
  recording: PropTypes.bool,
  getTodos: PropTypes.func,
  addTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func,
  resetRecording: PropTypes.func
};

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    record: state.todoReducer.record,
    recording: state.todoReducer.recording
  };
};

export default connect(
  mapStateToProps,
  {
    getTodos,
    addTodo,
    updateTodo,
    removeTodo,
    startRecording,
    stopRecording,
    resetRecording
  }
)(ToDos);
