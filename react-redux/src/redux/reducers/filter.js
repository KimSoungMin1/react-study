import { SHOW_COMPLETE, SHOW_ALL } from "../action";
const initalState = "ALL";
export default function filter(state = initalState, action) {
  switch (action.type) {
    case SHOW_COMPLETE:
      return "COMPLETE";

    case SHOW_ALL:
      return "ALL";
  }

  return state;
}
