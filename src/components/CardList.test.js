import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expected to render snapshot of CardList component", () => {
  // we need to mock our robots because since this is a shallow copy of the component props are not passed to it, otherwise we will get a typerror when it tries to map robots
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "john@gmail.com"
    }
  ];
  // now we pass our mockRobots array of robots to the CardList component robots prop
  // we need to do this when we want to test a component that uses props and having them undefined is a problem
  // it was not a problem with Card component since it only used props to write so it will write undefined as text, but in this casse robots is used with map() method to map all the robot cards divs
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
