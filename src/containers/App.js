import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";

const mapStateToProps = state => {
  // this function is used to pass the state to props for App, what do I need to listen from state and pass it to props
  // we are stating that searchField is going to be taken from state, from the reducer we used in the store props we created in index.js and then the property of state we want
  return {
    // we return an object
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
const mapDispatchToProps = dispatch => {
  // it says what props I should listen to that are actions that I need to get dispatched
  // dispatch is what triggers the action
  return {
    // here we also return an object
    onSearchChange: event => dispatch(setSearchField(event.target.value)), // onSearchChange is just the name of the props that is going to be receive, we are keeping the one we had previous to redux
    onRequestRobots: () => dispatch(requestRobots()) // in this case, we dispatch a function, not an object with the dipatch method in it
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />; // object spreading to pass all props to the component
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App); //connect is a higher order function, is a function that returns another function
//  if we realize the syntax is very similar to currying functions where we had a function that we executed in different steps first with some variables and then with others
//  connect runs a first time and returns another function that is going to be runned using App as a parameter
//  connect accepts 2 parameters, mapStateToProps and mapDispatchToProps
