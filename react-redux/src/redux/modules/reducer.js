import { combineReducers } from "redux"; // 쪼개진 리듀서 함수를 합쳐준다
import todos from "./todos";
import filter from "./filter";
import users from "./users";
const reducer = combineReducers({
  todos,
  filter,
  users,
});

export default reducer;
