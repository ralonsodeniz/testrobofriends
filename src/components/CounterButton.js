import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this module has its own state and it not uses redux since its state only affects it
      count: 0
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      // if the new count value is different from the previous one we have stored then we want to render this component
      return true;
    }
    return false; // if it is not we don't
  }

  updateCount = () => {
    // remember that setState is an async function so when we want to operate an state with itself we should do it this way so we are sure that we catch the actual value of the state
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
