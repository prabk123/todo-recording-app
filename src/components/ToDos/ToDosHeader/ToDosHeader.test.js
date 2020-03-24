import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import ToDosHeader from "./ToDosHeader";

const setUp = (props = {}) => {
  const component = shallow(<ToDosHeader {...props} />);
  return component;
};

describe("ToDosHeader Component", () => {
  describe("Check Render", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        recordLength: 4,
        playing: false,
        recording: false,
        openModal: func,
        startRecording: func,
        stopRecording: func,
        resetRecording: func,
        playRecording: func
      };
      component = setUp(props);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "ToDosHeader");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a add button", () => {
      const wrapper = findByTestAtrr(component, "ToDosHeader-add");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a play button", () => {
      const wrapper = findByTestAtrr(component, "ToDosHeader-play");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a record button", () => {
      const wrapper = findByTestAtrr(component, "ToDosHeader-record");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a reset button", () => {
      const wrapper = findByTestAtrr(component, "ToDosHeader-reset");
      expect(wrapper.length).toBe(1);
    });

    it("Should emit a callback on click add button", () => {
      const button = findByTestAtrr(component, "ToDosHeader-add");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should emit a callback on click play button", () => {
      const button = findByTestAtrr(component, "ToDosHeader-play");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should emit a callback on click record button", () => {
      const button = findByTestAtrr(component, "ToDosHeader-record");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should emit a callback on click reset button", () => {
      const button = findByTestAtrr(component, "ToDosHeader-reset");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        recordLength: 4,
        playing: false,
        recording: false,
        openModal: () => {},
        startRecording: () => {},
        stopRecording: () => {},
        resetRecording: () => {},
        playRecording: () => {}
      };
      const propsErr = checkProps(ToDosHeader, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
