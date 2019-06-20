// we create this component to avoid unnecesary reload of the header
import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // we are going to use this lyfecyle method to avoid header to be reloaded when it is not needed
    // if this returns true, the component will be updated, if it returns false it won't
    // this method receives nextProps and nextState in case we want to use it to determine if we want to update or not
    // those two values give us the new values of state and props after an event that triggers the update so we can decide if we do want to update the component
    return false; // in our case we don't want it to be rendered more than the initial time
  }
  render() {
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color="red" />
      </div>
    );
  }
}

export default Header;
