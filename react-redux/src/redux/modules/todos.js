//액션타입정의
export const ADD_TODO = "redux-start/todos/ADD_TODO";
export const COMPLETE_TODO = " redux-start/todos/COMPLETE_TODO";

//액션 생성 함수
//{type : ADD_TOO , text : "할일"}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

//{type : COMPLETE_TODO, index : 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}
//초기값
const initalState = [];

//리듀서
export default function reducer(state = initalState, action) {
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
