import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import HeaderBrand from "./HeaderBrand";

const setUp = (props = {}) => {
  const component = shallow(<HeaderBrand {...props} />);
  return component;
};

describe("HeaderBrand Component", () => {
  describe("Check render", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "HeaderBrand");
      expect(wrapper.length).toBe(1);
    });

    it("Should render an avatar", () => {
      const wrapper = findByTestAtrr(component, "HeaderBrand-avatar");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a title", () => {
      const wrapper = findByTestAtrr(component, "HeaderBrand-title");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a subtitle", () => {
      const wrapper = findByTestAtrr(component, "HeaderBrand-subtitle");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        type: "dark",
        collapse: true
      };
      const propsErr = checkProps(HeaderBrand, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
