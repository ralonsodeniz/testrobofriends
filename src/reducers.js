// in this file we create the reducers
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";
// first thing we have to create is a initial state of the app
const initialStateSearch = {
  // we need to have an initial state from which our application start
  searchField: ""
};

// now we create the reducer, that is a function
export const searchRobots = (state = initialStateSearch, action = {}) => {
  // the third principle says that changes using pure function, this is a pure function that returns always the same for the same inputs
  // state parameter is the state of the application and action is the action that is related with this reducer | we are giving them initial states so we don't get errors if nothing is passed
  // the reducer gets the state and the action and when they receive and action related with the searchRobots they do something
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    // according to the 3 principles of redux, the second one states that the state is read only, so we do not modify state so we use Object.assign to create a new object which is returned
    // this new object is a copy of state to whom we add what we receive from the action
    // the synxtax, {} is the target object, in this case an empty one
    // state is the first object we assign to the new one
    // {searchField:action.payload} is the second object we assign, updating what state had in that property
    // there is another way to do this using object destructuring and spread operator
    // return { ...state, searchField: action.payload };
    // this means that we are returning a new object which is form by state and updated with the second parameter
    default:
      return state; // a pure function allways has to return something by default, in the case of reducers the default state
  }
};

const initialStateRobots = {
  // we create a new initial state for the reducer of requestRobots since it does not care of the same states as searchRobots
  isPending: false,
  robots: [],
  error: ""
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
