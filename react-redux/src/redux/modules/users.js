import axios from "axios";
import { put, delay, call, takeEvery } from "redux-saga/effects";
//액션 타입 정의

//깃 허브 API호출을 시작함(로딩)
export const GET_USERS_START = "redux-start/users/GET_USERS_START";

//깃 허브 API호출에 대한 응답이 성공적으로 돌아온경우
export const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS";

//깃 허브 API호출에 대한 응답이 실패한경우
export const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL";

//액션생성함수
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

//초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

//리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }
  return state;
}
//redux-Thhunk-middleware
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}
const GET_USERS_SAGA_START = "GET_USERS_SAGA_START";

//redux-saga
function* getUsersSaga(action) {
  try {
    yield put(getUsersStart());
    //sleep
    yield delay(2000);
    const res = yield call(axios.get, "https://api.github.com/users");
    yield put(getUsersSuccess(res.data));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

export function getUsersSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}

export function* usersSaga() {
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}
