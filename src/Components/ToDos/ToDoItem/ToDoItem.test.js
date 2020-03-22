import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import ToDoItem from "./ToDoItem";

const setUp = (props = {}) => {
  const component = shallow(<ToDoItem {...props} />);
  return component;
};

describe("ToDoItem Component", () => {
  describe("Check render", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        name: "Test Name",
        description: "A test description",
        createdAt: new Date(),
        onClick: func,
        onDelete: func
      };
      component = setUp(props);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "ToDoItem");
      expect(wrapper.length).toBe(1);
    });

    it("Shoud render a name", () => {
      const wrapper = findByTestAtrr(component, "ToDoItem-title");
      expect(wrapper.length).toBe(1);
    });

    it("Shoud render a description", () => {
      const wrapper = findByTestAtrr(component, "ToDoItem-desc");
      expect(wrapper.length).toBe(1);
    });

    it("Shoud render a created at date", () => {
      const wrapper = findByTestAtrr(component, "ToDoItem-created");
      expect(wrapper.length).toBe(1);
    });

    it("Shoud render an edit button", () => {
      const wrapper = findByTestAtrr(component, "ToDoItem-edit");
      expect(wrapper.length).toBe(1);
    });

    it("Shoud render a delete button", () => {
      const wrapper = findByTestAtrr(component, "ToDoItem-delete");
      expect(wrapper.length).toBe(1);
    });

    it("Should emit a callback on edit button click", () => {
      const button = findByTestAtrr(component, "ToDoItem-edit");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should emit a callback on delete button click", () => {
      const button = findByTestAtrr(component, "ToDoItem-delete");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        name: "Test Name",
        description: "Test description",
        createdAt: new Date(),
        onClick: () => {
          return 1 + 1;
        },
        onDelete: () => {
          return 1 + 1;
        },
        highlight: "add"
      };
      const propsErr = checkProps(ToDoItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
