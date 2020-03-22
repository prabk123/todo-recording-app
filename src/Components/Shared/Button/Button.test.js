import React from "react";
import { mount } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import Button from "./Button";

const setUp = (props = {}) => {
  const component = mount(<Button {...props} />);
  return component;
};

describe("Button Component", () => {
  describe("Not Disabled", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        children: <span data-test="Button-children">Test</span>,
        onClick: func
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "Button");
      expect(wrapper.length).toBe(1);
    });

    it("Should render its children without errors", () => {
      const wrapper = findByTestAtrr(component, "Button-children");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a button icon without errors", () => {
      const wrapper = findByTestAtrr(component, "Button-icon");
      expect(wrapper.length).toBe(1);
    });

    it("Should emit a callback on click event", () => {
      const button = findByTestAtrr(component, "Button");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Disabled", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        children: <span data-test="Button-children">Test</span>,
        onClick: func,
        disabled: true
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "Button");
      expect(wrapper.length).toBe(1);
    });

    it("Should render its children without errors", () => {
      const wrapper = findByTestAtrr(component, "Button-children");
      expect(wrapper.length).toBe(1);
    });

    it("Should NOT emit a callback on click event", () => {
      const button = findByTestAtrr(component, "Button");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(0);
    });
  });

  describe("Without Arrow", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        children: <span data-test="Button-children">Test</span>,
        onClick: func,
        withArrow: false
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "Button");
      expect(wrapper.length).toBe(1);
    });

    it("Should render its children without errors", () => {
      const wrapper = findByTestAtrr(component, "Button-children");
      expect(wrapper.length).toBe(1);
    });

    it("Should NOT render a button icon", () => {
      const wrapper = findByTestAtrr(component, "Button-icon");
      expect(wrapper.length).toBe(0);
    });
  });
});
