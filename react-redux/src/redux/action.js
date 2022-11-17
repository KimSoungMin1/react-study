export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = " COMPLETE_TODO";
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

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}

//users
//깃 허브 API호출을 시작함(로딩)
export const GET_USERS_START = "GET_USERS_START";

//깃 허브 API호출에 대한 응답이 성공적으로 돌아온경우
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

//깃 허브 API호출에 대한 응답이 실패한경우
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}