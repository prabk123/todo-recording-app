import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "Services";
import Container from "./Container";

const setUp = (props = {}) => {
  const component = shallow(<Container {...props} />);
  return component;
};

describe("Container Component", () => {
  let component;
  beforeEach(() => {
    const props = {
      children: <div data-test="Container-children">Test</div>
    };
    component = setUp(props);
  });

  it("Should render without any errors", () => {
    const wrapper = findByTestAtrr(component, "Container");
    expect(wrapper.length).toBe(1);
  });

  it("Should render its children without errors", () => {
    const wrapper = findByTestAtrr(component, "Container-children");
    expect(wrapper.length).toBe(1);
  });
});
