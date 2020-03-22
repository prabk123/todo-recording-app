import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import Modal from "./Modal";

const setUp = (props = {}) => {
  const component = shallow(<Modal {...props} />);
  return component;
};

describe("Modal Component", () => {
  describe("Check render", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        children: <div data-test="Modal-children"></div>,
        onClose: func,
        open: true,
        maxWidth: 400
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "Modal");
      expect(wrapper.length).toBe(1);
    });

    it("Should render main inner modal", () => {
      const wrapper = findByTestAtrr(component, "Modal-inner");
      expect(wrapper.length).toBe(1);
    });

    it("Should render children", () => {
      const wrapper = findByTestAtrr(component, "Modal-children");
      expect(wrapper.length).toBe(1);
    });

    it("Should emit a callback on dimmer click event", () => {
      const dimmer = findByTestAtrr(component, "Modal");
      const mockedEvent = {
        target: {
          getAttribute: params => {
            return "dimmer";
          }
        }
      };
      dimmer.simulate("click", mockedEvent);
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        onClose: () => {
          return 1 + 1;
        },
        open: true,
        style: { background: "#fff" },
        className: "test-class"
      };
      const propsErr = checkProps(Modal, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
