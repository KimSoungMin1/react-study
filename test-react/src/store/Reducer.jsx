const counter = {
  counter: 1,
};
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
function reducer(state = counter, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
export default reducer;
