import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const count = useSelector((state) => state.counts);
  //retrieves count state from the redux store using useSelector hook
  const dispatch = useDispatch();

  //dispatch is a function provided by redux store used to dispatch actions to the redux store
  const { increment, decrement } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => increment(1)}>increment</button>
      <button onClick={() => decrement(1)}>decrement</button>
    </div>
  );
}

export default App;
