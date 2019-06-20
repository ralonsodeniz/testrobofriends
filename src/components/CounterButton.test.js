import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("expect to render Snapshot from CounterButton", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  // this is just saving the shallow copy to a const to make the syntax easier
  const wrapper = shallow(<CounterButton color={mockColor} />);
  // with this method we select an element of the component and we can interact with the shallow copy, for example simulating a click event
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 }); // this way we can check if the functionality is working as expected
  expect(wrapper.props().color).toEqual("red"); // with props we have to especify  which prop we want to compare and in the equal method we just put the value
});
