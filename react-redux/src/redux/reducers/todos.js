import { ADD_TODO, COMPLETE_TODO } from "../action";
const initalState = [];
export default function todos(state = initalState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, done: false }];

    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      });
  }
  return state;
}
