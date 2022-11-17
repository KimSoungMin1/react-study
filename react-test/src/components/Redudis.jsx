const Redudus = (props) => {
  const { state, dispatch } = props;
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={PLUS}>+1</button>
    </div>
  );
  function PLUS() {
    dispatch({ type: "PLUS" });
  }
};

export default Redudus;
