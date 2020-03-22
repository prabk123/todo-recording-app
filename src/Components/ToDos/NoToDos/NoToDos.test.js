import React from "react";
import { mount } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import NoToDos from "./NoToDos";

const setUp = (props = {}) => {
  const component = mount(<NoToDos {...props} />);
  return component;
};

describe("NoToDos Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "NoToDos");
    expect(wrapper.length).toBe(1);
  });

  it("Should render an image", () => {
    const wrapper = findByTestAtrr(component, "NoToDos-img");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a title", () => {
    const wrapper = findByTestAtrr(component, "NoToDos-title");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a paragraph", () => {
    const wrapper = findByTestAtrr(component, "NoToDos-para");
    expect(wrapper.length).toBe(1);
  });
});
