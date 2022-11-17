import { useReducer } from "react";
import Redudus from "./Redudis";
//reducer => state 를변경하는 로직이 담겨 있는 함수
const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return { ...state, count: state.count + 1 };
    case "ADD":
      return { ...state, add: state.add - 1 };
  }
};
/*const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
};*/
//dispatch => action 객체를 넣어서 사용

//action => 객체이고 필수 프로퍼티로 type을가진다

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, add: 5, eeg: 1 });
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "PLUS" })}>xx</button>
      <p>{state.add}</p>
      <button onClick={ADD}>xx</button>
      <Redudus dispatch={dispatch} state={state} />
    </div>
  );
  function PLUS() {
    dispatch({ type: "PLUS" });
  }
  function ADD() {
    dispatch({ type: "ADD" });
  }
}
