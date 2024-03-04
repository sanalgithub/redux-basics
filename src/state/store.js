import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/combReducers";
import thunk from "redux-thunk";//middleware for handling asynchronous actions.

export const store = createStore(reducers, {}, applyMiddleware(thunk));

//{} provides inital state as empty object
//This empty object serves as the initial state for the application's Redux store, meaning that when the application starts, the Redux store will have an initial state with no pre-defined values.
