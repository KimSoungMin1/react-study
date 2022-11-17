import { useDispatch, useSelector } from "react-redux";

const Count = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>xxx</button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        xxx
      </button>
    </div>
  );
};

export default Count;
