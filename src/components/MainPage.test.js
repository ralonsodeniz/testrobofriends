import { shallow } from "enzyme";
import React from "react";
import App from "../containers/App";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  // this will run before of everytest
  const mockProps = {
    onRequestRobots: jest.fn(), // mocking the function
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robot correctly", () => {
  expect(wrapper.instance().filteredRobots([])).toEqual([]); // instances() gives us access to all the methods of the wrapped component
});

it("filter robots with searchField John", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "john",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots(mockProps2.robots)).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@gmail.com"
    }
  ]);
});
