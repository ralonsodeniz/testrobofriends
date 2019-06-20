import { shallow, mount, render } from "enzyme";
import Card from "./Card";
import React from "react";

// shallow testing
it("expect to render Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

// spanshot testing
it("expect to snapshot Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
