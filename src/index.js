import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux"; // we need to create the Store \ applyMiddleware is needed to insert middleware in our app
// combineReducers is a function from redux that allows us to combine multiple reducers in order to have just one to create the store
import { Provider } from "react-redux";
import { createLogger } from "redux-logger"; // this is the middleware for loggin
import thunkMiddleware from "redux-thunk"; // this is the middleware for async actions in redux
// the store is the first principle of redux, the one source of all true, the big js object that stores the state of all our app
import "./index.css";
import App from "./containers/App";
// standar says that components have to be capitalized
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
); // with this we create the store
// as a second parameter we set what middleware want to use, logger has to be the last middleware always
// in real life we have a lot of reducers so we need to have one rootReducer that combines all of the reducers of the app
// now we have to pass the store to our app
// to do this, and in order to not to have to pass it all the time from App to App childs we use the Provider component that comes in react-redux
// Provider is a wrap component, as it was ErrorBoundary for example, that allows the access to the store to all the components and subcomponents wrapped inside it
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// to install redux we do npm install redux
// npm install react-redux to connect react with redux store
// first thing to do is to creat an action and a reducer
// connect makes the function of store.subscribe, which is to let know the components that need the store the link to it and listen to it
// connect simplifies a lot the procedure
// middleware is something in between the action and the reducer that may modify the action before getting to the reducer or trigger another action
// its somehow similar to the middleware in expressjs
// redux logger is a middleware that allows us to log redux actions
// in order to handle async actions with redux we use another middleware called redux-think
// this middleware will manage async actions such fetching an api
// usually the actions returns objects, but not the async actions, they return a function. And there is when thunk enters in action.
// thunk is listening when an action returns a function and catches it, in order to treat it and make redux able to understand it since redux only understand actions that are objects
