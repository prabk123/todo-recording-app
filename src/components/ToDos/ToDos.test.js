import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore, checkProps } from "Services";
import ToDos from "./ToDos";

var func;
const setUp = (initialState = {}) => {
  func = jest.fn();
  const props = {
    match: {},
    history: {},
    location: {}
  };
  const store = testStore(initialState);
  const component = shallow(<ToDos {...props} store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe("ToDos Component", () => {
  describe("Check Render", () => {
    let component;
    beforeEach(() => {
      const initialState = {
        todoReducer: {
          todos: [],
          record: [],
          recording: false
        }
      };
      component = setUp(initialState);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "ToDos");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Check component methods", () => {
    let component;
    beforeEach(() => {
      const initalState = {
        todoReducer: {
          todos: [],
          record: [],
          recording: false
        }
      };
      component = setUp(initalState);
    });

    it("componentDidUpdate should set the state with new todos", () => {
      const newProps = {
        todos: [
          {
            id: 1,
            name: "TestName1",
            description: "Test Desc 1",
            createdAt: new Date()
          },
          {
            id: 2,
            name: "TestName2",
            description: "Test Desc 2",
            createdAt: new Date()
          }
        ],
        record: [],
        recording: false
      };

      component.setProps({ ...newProps });
      const expectedState = {
        todos: newProps.todos
      };
      const newState = component.instance().state;
      expect(newState.todos).toMatchObject(expectedState.todos);
    });

    it("openModal should change state to open modal", () => {
      const classInstance = component.instance();
      classInstance.openModal("create");
      const newState = classInstance.state.showModal;
      expect(newState).toBe(true);
    });

    it("handleClose should change state to close modal", () => {
      const classInstance = component.instance();
      classInstance.handleClose();
      const newState = classInstance.state.showModal;
      expect(newState).toBe(false);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        todos: [],
        record: [],
        recording: false,
        getTodos: () => {},
        addTodo: () => {},
        updateTodo: () => {},
        removeTodo: () => {},
        startRecording: () => {},
        stopRecording: () => {},
        resetRecording: () => {}
      };
      const propsErr = checkProps(ToDos, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
