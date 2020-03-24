import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import Title from "./Title";

const setUp = (props = {}) => {
  const component = shallow(<Title {...props} />);
  return component;
};

describe("Title Component", () => {
  describe("Check render", () => {
    let component;
    beforeEach(() => {
      const props = {
        level: 1,
        children: <span data-test="Title-children">Title</span>
      };
      component = setUp(props);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "Title");
      expect(wrapper.length).toBe(1);
    });

    it("Should render children without errors", () => {
      const wrapper = findByTestAtrr(component, "Title-children");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Without correct level", () => {
    let component;
    beforeEach(() => {
      const props = {
        level: 8,
        children: <span data-test="Title-children">Title</span>
      };
      component = setUp(props);
    });

    it("Should NOT render", () => {
      const wrapper = findByTestAtrr(component, "Title");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        level: 1,
        style: { color: "red" },
        children: <span>Child</span>,
        className: "test-class"
      };
      const propsErr = checkProps(Title, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
