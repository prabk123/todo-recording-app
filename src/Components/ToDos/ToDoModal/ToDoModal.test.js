import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import ToDoModal from "./ToDoModal";

const setUp = (props = {}) => {
  const component = shallow(<ToDoModal {...props} />);
  return component;
};

describe("ToDoModal Component", () => {
  describe("Check render", () => {
    let component;
    beforeEach(() => {
      const props = {
        open: true,
        type: "create",
        onClose: () => {},
        createToDo: () => {}
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "ToDoModal");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a name input", () => {
      const wrapper = findByTestAtrr(component, "ToDoModal-name");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a description input", () => {
      const wrapper = findByTestAtrr(component, "ToDoModal-desc");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a submit button", () => {
      const wrapper = findByTestAtrr(component, "ToDoModal-button");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Check component methods", () => {
    let component;
    let onClose;
    let createToDo;
    let updateTodo;
    beforeEach(() => {
      onClose = jest.fn();
      createToDo = jest.fn();
      updateTodo = jest.fn();
      const props = {
        open: true,
        type: "create",
        onClose: onClose,
        createToDo: createToDo,
        updateTodo: updateTodo
      };
      component = setUp(props);
    });

    it("handleChange method should update state", () => {
      const classInstance = component.instance();
      const event = {
        target: {
          name: "name",
          value: "New Name"
        }
      };
      classInstance.handleChange(event);
      const newState = classInstance.state.name;
      expect(newState).toBe(event.target.value);
    });

    it("componentDidUpdate should set the correct state", () => {
      const newProps = {
        type: "update",
        selectedTodo: {
          name: "Selected To Do",
          description: "Changed to do"
        }
      };

      component.setProps({ ...newProps });
      const expectedState = {
        name: newProps.selectedTodo.name,
        description: newProps.selectedTodo.description,
        error: ""
      };
      const newState = component.instance().state;
      expect(newState).toMatchObject(expectedState);
    });

    it("handleSubmit should trigger createToDo if type is create", () => {
      component.setState({ name: "New Name", description: "New Description" });
      const classInstance = component.instance();
      const event = { preventDefault: () => {} };
      classInstance.handleSubmit(event);
      const callback = createToDo.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("handleSubmit should trigger updateTodo if type is update", () => {
      const newProps = {
        type: "update",
        selectedTodo: {
          name: "Selected To Do",
          description: "Changed to do"
        }
      };
      component.setProps({ ...newProps });
      const classInstance = component.instance();
      const event = { preventDefault: () => {} };
      classInstance.handleSubmit(event);
      const callback = updateTodo.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("handleSubmit should trigger error name and description are not set", () => {
      const classInstance = component.instance();
      const event = { preventDefault: () => {} };
      classInstance.handleSubmit(event);
      const error = "Please give your 'To Do' a name and a description.";
      const newState = classInstance.state.error;
      expect(newState).toBe(error);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        open: true,
        type: "update",
        selectedTodo: {
          id: 1,
          name: "Test Name",
          descriotion: "Test Description",
          createdAt: new Date()
        },
        onClose: () => {
          return 1 + 1;
        },
        createToDo: () => {
          return 1 + 1;
        },
        updateTodo: () => {
          return 1 + 1;
        }
      };
      const propsErr = checkProps(ToDoModal, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
