// in this document we create the redux actions | actions are functions that passes objects
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";
import { apiCall } from "./api/api";
// actions always have a type of action, which is a constant and a payload, what the action takes
// export const setSearchField = text => ({
//   // this is the action for the SearchField component
//   // it will take text, what the user inputs and is goign to return an object
//   type: CHANGE_SEARCHFIELD, // this is the action, the search field change | this is a constant thats why its in uppercase, and to make sure we don't misspell it we will create actual constants in a different file to assign to the types of the actions
//   payload: text // payload is a common term in redux, in this case we are sending the data which is needed
// }); // wraping the curly brackets inside parentesis directly states that we are returning what it is inside the curly brackets

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  // considering how the function is triggered in App.js this is a currying function, first dispatch is executed and it returns a function which is executed with the dispatch parameter returned from the first execution
  // in the async action we have dispatch as parameter, it will be passed when we
  dispatch({ type: REQUEST_ROBOTS_PENDING }); // firs we dispatch the action to inform the promise is being processed
  apiCall("https://jsonplaceholder.typicode.com/users") // then we start fetching
    // once we have the response we have 2 options
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })) // the promise is resolved satisfactorily
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })); // the promise is rejected
};
