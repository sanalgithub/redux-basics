import { combineReducers } from "redux";
import countingReducer from "./countingReducer";
const reducers = combineReducers({
  counts: countingReducer,
});
export default reducers;



//The state managed by countingReducer will be accessible in the Redux store state object under the key count.